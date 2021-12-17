import styled from 'styled-components'

export const Base = styled.p`
  color: ${props => (props.color ? props.color : '')};
  font-size: ${props => (props.fontSize ? props.fontSize : '20px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '400')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  margin: ${props => (props.margin ? props.margin : '0')};
  padding: ${props => (props.padding ? props.padding : '0')};
  cursor: ${props => (props.cursor ? props.cursor : '')};
`
