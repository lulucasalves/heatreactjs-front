import styled from 'styled-components'

export const Base = styled.p`
  color: ${props => (props.color ? props.color : '#09090A')};
  font-size: ${props => (props.fontSize ? props.fontSize : '24px')};
  margin: ${props => (props.margin ? props.margin : '0')};
`
