import { memo, useEffect, useRef } from 'react'
import { useControls, folder } from 'leva'
import { CameraHelper } from 'three'
import { useHelper } from '@react-three/drei'

function Lights() {
  const { dPosition, dIntensity, aIntensity, dHelper } = useControls(
    'Lights',
    {
      directional: folder({
        dPosition: { value: { x: 3, y: 2, z: 3 }, label: 'position' },
        dIntensity: { value: 1, label: 'intensity' },
        dHelper: { value: true, label: 'helper' },
      }),
      ambient: folder({
        aIntensity: { value: 0.75, label: 'intensity' },
      }),
    },
    { collapsed: true },
  )
  const dLight = useRef()
  const dCamera = useRef()
  useEffect(() => {
    if (dLight.current) {
      dCamera.current = dHelper ? dLight.current.shadow.camera : null
    }
  }, [dLight, dHelper])
  useHelper(dCamera, CameraHelper, 1, 'hotpink')

  const size = 3

  return (
    <group>
      <ambientLight intensity={aIntensity} />
      <directionalLight
        ref={dLight}
        intensity={dIntensity}
        position={[dPosition.x, dPosition.y, dPosition.z]}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-camera-far={8}
        shadow-camera-left={-size}
        shadow-camera-right={size}
        shadow-camera-top={size}
        shadow-camera-bottom={-size}
        shadow-bias={-0.005}
        shadow-radius={1}
      />
    </group>
  )
}

export default memo(Lights)
