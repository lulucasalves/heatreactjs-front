import styled from 'styled-components'

export const Base = styled.div`
  max-width: ${props => (props.width ? props.width : '100%')};
  margin: ${props => (props.margin ? props.margin : '0 auto')};
`

export const ItemsDiv = styled.div`
  height: ${props => (props.height ? props.height : '100%')};
  width: ${props => (props.width ? props.width : '453px')};
  display: ${props => (props.display ? props.display : 'block')};
  max-width: ${props => (props.width ? props.width : '100%')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : '0'};
  margin: ${props => (props.margin ? props.margin : '0 auto')};
  align-items: ${props => (props.alignItems ? props.alignItems : '0')};
  padding: ${props => (props.padding ? props.padding : '0 84px')};
`

export const Div = styled.div`
  background: ${props => (props.background ? props.background : '')};
  display: ${props => (props.display ? props.display : 'flex')};
  margin: ${props => (props.margin ? props.margin : '0')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  cursor: ${props => (props.cursor ? props.cursor : '')};
  background: ${props => (props.background ? props.background : '')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '')};
  padding: ${props => (props.padding ? props.padding : '')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '')};
  height: ${props => (props.height ? props.height : '')};
  width: ${props => (props.width ? props.width : '')};
  z-index: ${props => (props.zIndex ? props.zIndex : '')};
  flex-shrink: 0;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : ''};
  position: ${props => (props.position ? props.position : '')};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  top: ${props => (props.top ? props.top : '')};
  right: ${props => (props.right ? props.right : '')};
`

export const DivAbsolute = styled.div`
  background-repeat: no-repeat;
  background-image: url('default-background.png');
  background-color: #ffca1f;
  height: ${props => (props.height ? props.height : '100%')};
  width: ${props => (props.width ? props.width : '386px')};
  left: ${props => (props.left ? props.left : '')};
  top: ${props => (props.top ? props.top : '')};
  right: ${props => (props.right ? props.right : '0')};
  bottom: ${props => (props.bottom ? props.bottom : '')};
  z-index: ${props => (props.zIndex ? props.zIndex : '')};
  position: ${props => (props.position ? props.position : 'absolute')};
  overflow-x: hidden;
`

export const Img = styled.img`
  margin: ${props => (props.margin ? props.margin : '0')};
  height: ${props => (props.height ? props.height : '')};
  width: ${props => (props.width ? props.width : '')};
  border-radius: 50%;
  border: 4px solid #121214;
`

export const TextArea = styled.textarea`
  color: ${props => (props.color ? props.color : '#8D8D99')};
  font-size: ${props => (props.fontSize ? props.fontSize : '16px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '400')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '24px')};
  margin: ${props => (props.margin ? props.margin : '0')};
  padding: ${props => (props.padding ? props.padding : '24px')};
  height: ${props => (props.height ? props.height : '212px')};
  width: ${props => (props.width ? props.width : '100%')};
  background-color: #202024;
  border: none;
`
