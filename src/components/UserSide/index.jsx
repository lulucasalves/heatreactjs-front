import { useEffect, useState } from 'react'
import { DefaultText } from '../DefaultText'
import { Door, Github } from '../Icons'
import { Button } from '../Button'
import { Base, ItemsDiv, DivAbsolute, Div, Img, TextArea } from './styles'
import { api } from '../../pages/api/api'
import Image from 'next/image'

export function UserSide(props) {
  const [user, setUser] = useState([
    {
      avatar_url: 'https://avatars.githubusercontent.com/u/72206769?v=4',
      name: 'Lucas Alves',
      login: 'lulucasalves',
      id: 1123132
    }
  ])

  useEffect(() => {
    async function getUser() {
      await api.get('/profile').then(res => setUser(res))
    }

    //getUser()
  }, [])

  return (
    <Base>
      <ItemsDiv>
        <Div top="87px" right="150px" zIndex="15" position="absolute">
          <Image width="68px" height="68px" src="/logo.png" />
        </Div>
        <DivAbsolute />
        <Div padding="121px 0 0 0">
          <Div
            display="block"
            width="453px"
            zIndex="10"
            background="#1B1B1F"
            padding="24px"
            position="relative"
          >
            <Door />
            {user.map(val => {
              return (
                <>
                  <Div
                    padding="3px"
                    background="linear-gradient(100deg, #ff008e 0%, #ffcd1e 100%)"
                    borderRadius="50%"
                    lineHeight="0"
                    margin="48px auto 0 auto"
                    width="99px"
                  >
                    <Img width="93px" height="93px" src={val.avatar_url} />
                  </Div>
                  <DefaultText
                    margin="16px 0 8px 0"
                    fontWeight="700"
                    fontSize="24px"
                    textAlign="center"
                  >
                    {val.name}
                  </DefaultText>
                  <Div
                    margin="0 0 48px 0"
                    textAlign="center"
                    justifyContent="center"
                  >
                    <Github
                      color="#C4C4CC"
                      margin="0 8px -2.5px 0"
                      fontSize="16px"
                    />
                    <DefaultText fontSize="14px" color="#C4C4CC">
                      {val.login}
                    </DefaultText>
                  </Div>
                </>
              )
            })}
            <Div background="#29292E" padding="24px 18px">
              <DefaultText fontSize="20px" color="#E1E1E6" fontWeight="700">
                Mensagem
              </DefaultText>
            </Div>{' '}
            <TextArea />
            <Button position="absolute" bottom="48px" right="48px">
              enviar mensagem
            </Button>
          </Div>
        </Div>
      </ItemsDiv>
    </Base>
  )
}
