import styled from 'styled-components'

export const Base = styled.p`
  padding: ${props => (props.padding ? props.padding : '')};
  height: ${props => (props.height ? props.height : '')};
  width: ${props => (props.width ? props.width : '')};
  margin: ${props => (props.margin ? props.margin : '0')};
  transform: ${props => (props.transform ? props.transform : '')};
  z-index: ${props => (props.zIndex ? props.zIndex : '')};
  left: ${props => (props.left ? props.left : '')};
  top: ${props => (props.top ? props.top : '')};
  right: ${props => (props.right ? props.right : '')};
  bottom: ${props => (props.bottom ? props.bottom : '')};
  position: ${props => (props.position ? props.position : 'absolute')};
`
