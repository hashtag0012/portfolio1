import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import styles from './NeonSphereCanvas.module.scss';

function EntangledSphereMesh() {
  const outerSphereRef = useRef();
  const innerShape1Ref = useRef();
  const innerShape2Ref = useRef();

  useFrame((_, delta) => {
    // Pure slow rotation only - no position bobbing or mouse movement
    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.y += delta * 0.2;
      outerSphereRef.current.rotation.x += delta * 0.1;
    }
    if (innerShape1Ref.current) {
      innerShape1Ref.current.rotation.x += delta * 0.3;
      innerShape1Ref.current.rotation.y += delta * 0.4;
    }
    if (innerShape2Ref.current) {
      innerShape2Ref.current.rotation.y -= delta * 0.3;
      innerShape2Ref.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Signature 3D Wireframe Sphere */}
      <mesh ref={outerSphereRef} scale={1.85}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#00ff66" wireframe />
      </mesh>

      {/* Inner Entangled Shape 1 */}
      <mesh ref={innerShape1Ref} scale={0.82}>
        <torusKnotGeometry args={[0.8, 0.22, 64, 16]} />
        <meshStandardMaterial color="#00ff66" emissive="#00ff66" emissiveIntensity={2.4} roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Inner Entangled Shape 2 */}
      <mesh ref={innerShape2Ref} scale={0.95}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#00ffaa" wireframe emissive="#00ff66" emissiveIntensity={2.0} />
      </mesh>
    </group>
  );
}

export default function NeonSphereCanvas() {
  return (
    <div className={styles.sphereContainer}>
      <div className={styles.canvasWrapper}>
        <Canvas gl={{ antialias: true, alpha: true }} dpr={[0.5, 1.5]}>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
          <ambientLight intensity={2.5} />
          <directionalLight position={[3, 3, 3]} intensity={3.0} />
          <directionalLight position={[-3, -3, 3]} intensity={2.0} color="#00ff66" />
          <EntangledSphereMesh />
        </Canvas>
      </div>
    </div>
  );
}
