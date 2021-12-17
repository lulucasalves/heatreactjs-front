import styled from 'styled-components'

export const Base = styled.div`
  max-width: ${props => (props.width ? props.width : '100%')};
  margin: ${props => (props.margin ? props.margin : '0 auto')};
  overflow-y: hidden;
`

export const ItemsDiv = styled.div`
  background: ${props => (props.background ? props.background : '')};
  display: ${props => (props.display ? props.display : 'flex')};
  max-width: ${props => (props.width ? props.width : '100%')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : '0'};
  margin: ${props => (props.margin ? props.margin : '0 auto')};
  align-items: ${props => (props.alignItems ? props.alignItems : '0')};
  padding: ${props => (props.padding ? props.padding : '0 160px')};
`

export const Div = styled.div`
  max-width: ${props => (props.width ? props.width : '100%')};
  display: ${props => (props.display ? props.display : 'flex')};
  margin: ${props => (props.margin ? props.margin : '0')};
`
