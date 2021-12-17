import React from 'react'
import { Log } from '../templates/Log'
import { NoLog } from '../templates/NoLog'
import { useContext } from 'react'
import { MyContext } from '../auth'

export default function index() {
  const { users } = useContext(MyContext)

  console.log(users)

  return <>{!!users ? <Log /> : <NoLog />}</>
}
