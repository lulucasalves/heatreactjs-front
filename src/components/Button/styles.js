import styled from 'styled-components'

export const Base = styled.button`
  z-index: ${props => (props.zIndex ? props.zIndex : '')};
  background: ${props => (props.background ? props.background : '#ff008e')};
  color: ${props => (props.color ? props.color : '#fff')};
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '700')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
  margin: ${props => (props.margin ? props.margin : '0')};
  padding: ${props => (props.padding ? props.padding : '15px 32px')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : ''};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  right: ${props => (props.right ? props.right : '')};
  position: ${props => (props.position ? props.position : '')};
  bottom: ${(props) => (props.bottom ? props.bottom : '')};

  &:hover {
    filter: brightness(0.9);
  }
`
