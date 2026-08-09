/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const MAX_AIRPLANES = 3;
const SPAWN_INTERVAL = 3.0;
const BASE_SPEED = 2.8;
const MAX_PARTICLES = 120;

function createAirplaneState() {
  return {
    active: false,
    position: new THREE.Vector3(0, -9999, 0),
    velocity: new THREE.Vector3(),
    quaternion: new THREE.Quaternion(),
    rollSpeed: 0,
    scale: 0.08,
    smokeTimer: 0,
  };
}

function createParticleState() {
  return {
    active: false,
    position: new THREE.Vector3(0, -9999, 0),
    scale: 0.1,
    opacity: 0.8,
    maxAge: 1.8,
    age: 0,
    vx: 0,
    vy: 0,
  };
}

function SmokeParticles({ particleState }) {
  const meshRefs = useRef([]);
  const geo = useMemo(() => new THREE.SphereGeometry(0.12, 8, 8), []);
  const mat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: 0x111111,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
      }),
    [],
  );

  useFrame((_, delta) => {
    particleState.current.forEach((p, i) => {
      const mesh = meshRefs.current[i];
      if (!mesh) return;

      if (p.active) {
        p.age += delta;
        if (p.age >= p.maxAge) {
          p.active = false;
          mesh.position.set(0, -9999, 0);
        } else {
          p.position.x += p.vx * delta;
          p.position.y += p.vy * delta;

          const progress = p.age / p.maxAge;
          const currentScale = p.scale * (1 + progress * 2.5);
          const currentOpacity = (1 - progress) * 0.7;

          mesh.position.copy(p.position);
          mesh.scale.setScalar(currentScale);
          if (mesh.material) {
            mesh.material.opacity = currentOpacity;
          }
        }
      } else {
        mesh.position.set(0, -9999, 0);
      }
    });
  });

  return (
    <group>
      {Array.from({ length: MAX_PARTICLES }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            meshRefs.current[i] = el;
          }}
          geometry={geo}
          material={mat.clone()}
          position={[0, -9999, 0]}
        />
      ))}
    </group>
  );
}

function AirplanesScene() {
  const { viewport } = useThree();
  const { scene } = useGLTF('/model/paper_airplane.glb');

  const template = useMemo(() => {
    let geo = null;
    let mat = null;
    scene.traverse((obj) => {
      if (obj.isMesh && !geo) {
        geo = obj.geometry;
        mat = obj.material;
      }
    });
    return { geo, mat };
  }, [scene]);

  const meshRefs = useRef([]);
  const planes = useMemo(() => Array.from({ length: MAX_AIRPLANES }, createAirplaneState), []);
  const particles = useRef(Array.from({ length: MAX_PARTICLES }, createParticleState));
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const spawnTimer = useRef(0);

  const emitSmoke = (pos, planeVelocity) => {
    const idx = particles.current.findIndex((p) => !p.active);
    if (idx === -1) return;

    const p = particles.current[idx];
    p.active = true;
    p.age = 0;
    p.maxAge = 1.2 + Math.random() * 0.8;
    p.scale = 0.08 + Math.random() * 0.06;

    // Offset smoke behind plane tail
    const offset = planeVelocity.clone().normalize().multiplyScalar(-0.3);
    p.position.copy(pos).add(offset);
    p.position.x += (Math.random() - 0.5) * 0.1;
    p.position.y += (Math.random() - 0.5) * 0.1;

    // Random drift velocity
    p.vx = (Math.random() - 0.5) * 0.2;
    p.vy = (Math.random() - 0.5) * 0.2 + 0.1; // subtle float upward
  };

  const spawnPlane = (w, h) => {
    const idx = planes.findIndex((p) => !p.active);
    if (idx === -1) return;

    const p = planes[idx];
    const edge = Math.floor(Math.random() * 4);
    const speed = BASE_SPEED * (0.85 + Math.random() * 0.3);

    let vx = 0;
    let vy = 0;
    if (edge === 0) {
      p.position.set((Math.random() - 0.5) * w * 1.6, h + 1.2, (Math.random() - 0.5) * 1.5);
      vx = (Math.random() - 0.5) * speed * 0.5;
      vy = -speed;
    } else if (edge === 1) {
      p.position.set((Math.random() - 0.5) * w * 1.6, -h - 1.2, (Math.random() - 0.5) * 1.5);
      vx = (Math.random() - 0.5) * speed * 0.5;
      vy = speed;
    } else if (edge === 2) {
      p.position.set(-w - 1.2, (Math.random() - 0.5) * h * 1.6, (Math.random() - 0.5) * 1.5);
      vx = speed;
      vy = (Math.random() - 0.5) * speed * 0.5;
    } else {
      p.position.set(w + 1.2, (Math.random() - 0.5) * h * 1.6, (Math.random() - 0.5) * 1.5);
      vx = -speed;
      vy = (Math.random() - 0.5) * speed * 0.5;
    }

    for (let i = 0; i < MAX_AIRPLANES; i++) {
      if (planes[i].active && planes[i].position.distanceTo(p.position) < 3.5) return;
    }

    p.velocity.set(vx, vy, (Math.random() - 0.5) * 0.3);
    p.scale = 0.075 + Math.random() * 0.02;

    dummy.position.copy(p.position);
    const target = p.position.clone().add(p.velocity);
    dummy.lookAt(target);
    p.quaternion.copy(dummy.quaternion);

    p.rollSpeed = (Math.random() - 0.5) * 0.5;
    p.smokeTimer = 0;
    p.active = true;
  };

  useFrame((_, delta) => {
    spawnTimer.current += delta;
    if (spawnTimer.current >= SPAWN_INTERVAL) {
      spawnTimer.current = 0;
      spawnPlane(viewport.width / 2, viewport.height / 2);
    }

    const pad = 2.5;
    const bw = viewport.width / 2 + pad;
    const bh = viewport.height / 2 + pad;

    planes.forEach((p, i) => {
      const mesh = meshRefs.current[i];
      if (!mesh) return;

      if (p.active) {
        p.position.x += p.velocity.x * delta;
        p.position.y += p.velocity.y * delta;
        p.position.z += p.velocity.z * delta;

        dummy.position.copy(p.position);
        dummy.quaternion.copy(p.quaternion);
        dummy.rotateZ(p.rollSpeed * delta);
        p.quaternion.copy(dummy.quaternion);

        // Random black smoke trail emission
        p.smokeTimer += delta;
        if (p.smokeTimer >= 0.06 + Math.random() * 0.08) {
          p.smokeTimer = 0;
          if (Math.random() > 0.15) {
            emitSmoke(p.position, p.velocity);
          }
        }

        if (p.position.x < -bw || p.position.x > bw || p.position.y < -bh || p.position.y > bh) {
          p.active = false;
          mesh.position.set(0, -9999, 0);
        } else {
          mesh.position.copy(p.position);
          mesh.quaternion.copy(p.quaternion);
          mesh.scale.setScalar(p.scale);
        }
      }
    });
  });

  if (!template.geo || !template.mat) return null;

  return (
    <group>
      {planes.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            meshRefs.current[i] = el;
          }}
          position={[0, -9999, 0]}
          geometry={template.geo}
          material={template.mat}
        />
      ))}
      <SmokeParticles particleState={particles} />
    </group>
  );
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={1.6} />
      <directionalLight position={[5, 5, 5]} intensity={2.2} castShadow />
      <directionalLight position={[-5, 3, 5]} intensity={1.2} />
    </>
  );
}

function FruitNinja() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      <Lighting />
      <AirplanesScene />
    </>
  );
}

export default FruitNinja;
