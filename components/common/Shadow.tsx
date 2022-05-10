import { Shadow } from 'react-native-shadow-2'

interface ShadowDefaultProps {
  children: JSX.Element
  size: [width: number, height: number],
}

export default function ShadowDefault ({ children, size }: ShadowDefaultProps) {
  return (
    <Shadow offset={[0, 8]} radius={30} startColor='rgba(0, 0, 0, 0.02)' size={size}>
      {children}
    </Shadow>
  )
}
