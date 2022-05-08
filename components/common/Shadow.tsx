import { Shadow } from 'react-native-shadow-2';

type ShadowDefaultProps = {
  children: JSX.Element,
  size: [width: number, height: number],
  startColor?: string;
}

export default function ShadowDefault({ children, size, startColor = "rgba(0, 0, 0, 0.02)" }: ShadowDefaultProps) {
  return (
    <Shadow offset={[0, 8]} radius={30} startColor={startColor} size={size}>
      {children}
    </Shadow>
  )
}