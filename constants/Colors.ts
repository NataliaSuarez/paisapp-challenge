interface ColorsAccents {
  green: string
  lightGreen: string
  orange: string
  lightOrange: string
  purple: string
  lightPurple: string
  blue: string
  lightBlue: string
  secondaryMain: string
  secondaryBase: string
}

interface ColorsMain {
  primary: string
  mainBase: string
  textMain: string
  textBase: string
  textSecondary: string
  white: string
  softWhite: string
  black: string
  accents: ColorsAccents
}

interface ColorsDefault {
  default: ColorsMain
}

const Colors: ColorsDefault = {
  default: {
    primary: '#005CEE',
    mainBase: '#F9FAFC',
    textMain: '#334154',
    textBase: '#AAAAAA',
    textSecondary: '#616E7C',
    white: '#FFFFFF',
    softWhite: '#FAFAFA',
    black: '#071529',
    accents: {
      green: '#74CC9B',
      lightGreen: '#E4FFF0',
      orange: '#EF9C55',
      lightOrange: '#FEEAD4',
      purple: '#B946FF',
      lightPurple: '#EEE3FF',
      blue: '#68C6E5',
      lightBlue: '#CAF0FF',
      secondaryMain: '#6C8FF8',
      secondaryBase: '#89A5FB'
    }
  }
}

export default Colors
