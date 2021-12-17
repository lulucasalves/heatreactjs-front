import styled from 'styled-components'

export const Base = styled.div`
  max-width: ${props => (props.width ? props.width : '100%')};
  margin: ${props => (props.margin ? props.margin : '0 auto')};
`

export const ItemsDiv = styled.div`
  background-image: url('login-background.png');
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
  max-width: ${props => (props.width ? props.width : '100%')};
  display: ${props => (props.display ? props.display : 'flex')};
  margin: ${props => (props.margin ? props.margin : '0')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  cursor: ${props => (props.cursor ? props.cursor : '')};
  background: ${props => (props.background ? props.background : '')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '')};
  padding: ${props => (props.padding ? props.padding : '')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '')};
`

export const Img = styled.img`
  margin: ${props => (props.margin ? props.margin : '0')};
  height: ${props => (props.height ? props.height : '')};
  width: ${props => (props.width ? props.width : '')};
  border-radius: 50%;
  border: 4px solid #121214;
`
