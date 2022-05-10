import * as React from 'react'
import Svg, { Circle } from 'react-native-svg'

export default function CardLogo (): React.ReactElement {
  return (
    <Svg width='35' height='25' viewBox='0 0 35 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <Circle cx='12.2229' cy='12.2229' r='12.2229' fill='#E9231A' />
      <Circle opacity='0.8' cx='21.7885' cy='12.2229' r='12.2229' fill='#E99418' />
    </Svg>

  )
}
