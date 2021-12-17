import Image from 'next/image'
import { useEffect, useState } from 'react'
import { DefaultText } from '../DefaultText'
import { Github } from '../Icons'
import { Button } from '../Button'
import { Base, ItemsDiv, Div, Img } from './styles'

export function LoginSide(props) {
  return (
    <Base>
      <ItemsDiv>
        <DefaultText
          padding="537px 0 0 0"
          textAlign="center"
          fontSize="32px"
          fontWeight="700"
        >
          Envie e compartilhe sua mensagem
        </DefaultText>
        <Button
          background="#FFCD1E"
          margin="32px 0 0 0"
          padding="16px 40px"
          color="#09090A"
        >
          <Github margin="0 12px -5px 0" />
          ENTRAR COM GITHUB
        </Button>
      </ItemsDiv>
    </Base>
  )
}
