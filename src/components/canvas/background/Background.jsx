import { useThree } from '@react-three/fiber';

function Background() {
  const { viewport } = useThree();

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height, 1, 1]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  );
}

export default Background;
