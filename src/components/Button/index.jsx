import { Base } from './styles'

export function Button(props) {
  return <Base {...props}>{props.children}</Base>
}
