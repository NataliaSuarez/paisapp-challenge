import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface SearchIconProps {
  color: string
  handleClick?: any
}

export default function SearchIcon ({ color, handleClick }: SearchIconProps): React.ReactElement {
  return (
    <Svg onPress={handleClick} width='19' height='20' viewBox='0 0 19 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <Path fill-rule='evenodd' clip-rule='evenodd' d='M9.14342 17.2868C13.6409 17.2868 17.2868 13.6409 17.2868 9.14342C17.2868 4.64593 13.6409 1 9.14342 1C4.64593 1 1 4.64593 1 9.14342C1 13.6409 4.64593 17.2868 9.14342 17.2868Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M14.8073 15.2303L18 18.4146' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
