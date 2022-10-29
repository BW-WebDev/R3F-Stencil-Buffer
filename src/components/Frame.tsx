import * as React from 'react'

type FramePieceProps = {
  position?: [number, number, number]
  rotation?: [number, number, number]
}

function FramePiece({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: FramePieceProps) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxBufferGeometry args={[2.1, 0.1, 0.1]} />
      <meshStandardMaterial color="black" />
    </mesh>
  )
}

export function Frame() {
  return (
    <>
      <FramePiece position={[0, 1, 1]} />
      <FramePiece position={[0, 1, -1]} />
      <FramePiece position={[-1, 1, 0]} rotation={[0, Math.PI / 2, 0]} />
      <FramePiece position={[1, 1, 0]} rotation={[0, Math.PI / 2, 0]} />
      <FramePiece position={[0, -1, 1]} />
      <FramePiece position={[0, -1, -1]} />
      <FramePiece position={[-1, -1, 0]} rotation={[0, Math.PI / 2, 0]} />
      <FramePiece position={[1, -1, 0]} rotation={[0, Math.PI / 2, 0]} />
      <FramePiece position={[1, 0, 1]} rotation={[0, 0, Math.PI / 2]} />
      <FramePiece position={[1, 0, -1]} rotation={[0, 0, Math.PI / 2]} />
      <FramePiece position={[-1, 0, 1]} rotation={[0, 0, Math.PI / 2]} />
      <FramePiece position={[-1, 0, -1]} rotation={[0, 0, Math.PI / 2]} />
    </>
  )
}
