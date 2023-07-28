declare module 'react-native-gesture-flip-card'

declare module '*.svg' {
  import type { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps & {
    fillSecondary?: string
    fillThird?: string
  }>
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module '*.gif' {
  const content: any
  export default content
}
