import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const calRepository = width / 375

const Colors = {
  bgButtonPurple: '#8E97FD',
}
const Fonts = {
  bold: {
    fontFamily: 'HelveticaNeueBold',
  },
  light: {
    fontFamily: 'HelveticaNeueLight',
  },
}
export {
  calRepository, Colors, Fonts,
}
