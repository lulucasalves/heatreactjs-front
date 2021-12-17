import Image from 'next/image'
import { useEffect, useState } from 'react'
import { DefaultText } from '../DefaultText'
import { Base, ItemsDiv, Div, Img, DivMessage } from './styles'
import { api } from '../../pages/api/api'

export function CommentsSide(props) {
  const [comment, setComment] = useState([])

  useEffect(() => {
    async function getMessages() {
      await api.get('/messages/last3').then(res => setComment(res.data))
    }

    getMessages()
  }, [])

  return (
    <Base>
      <ItemsDiv>
        <Div margin="24px 0 0 0">
          <Image width="280px" height="24px" src="/logo-dowhile.png" />
        </Div>
        <Div margin="146px 0 0 0" display="block">
          {comment.map(val => {
            return (
              <DivMessage
                key={val.created_at}
                margin="40px 0 0 0"
                display="block"
                width="440px"
              >
                <p>{comment[val]}</p>
                <DefaultText margin="0 0 16px 0">{val.text}</DefaultText>
                <Div cursor="default">
                  <Div
                    padding="2px"
                    background="linear-gradient(100deg, #ff008e 0%, #ffcd1e 100%)"
                    borderRadius="50%"
                    lineHeight="0"
                  >
                    <Img width="30px" height="30px" src={val.user.avatar_url} />
                  </Div>
                  <DefaultText margin="0 0 0 12px" fontSize="16px">
                    {val.user.name}
                  </DefaultText>
                </Div>
              </DivMessage>
            )
          })}
        </Div>
      </ItemsDiv>
    </Base>
  )
}
