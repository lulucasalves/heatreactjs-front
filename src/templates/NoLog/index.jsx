import { CommentsSide } from '../../components/CommentsSide'
import { LoginSide } from '../../components/LoginSide'
import { Base, ItemsDiv} from './styles'

export function NoLog(props) {
  return (
    <Base>
      <ItemsDiv>
        <CommentsSide />
        <LoginSide />
      </ItemsDiv>
    </Base>
  )
}
