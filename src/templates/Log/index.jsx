import { CommentsSide } from '../../components/CommentsSide'
import { UserSide } from '../../components/UserSide'
import { Base, ItemsDiv } from './styles'

export function Log(props) {
  return (
    <Base>
      <ItemsDiv>
        <CommentsSide />
        <UserSide />
      </ItemsDiv>
    </Base>
  )
}
