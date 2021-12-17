import { route } from 'next/dist/server/router'
import { createContext, useEffect, useState } from 'react'
import { api } from '../pages/api/api'

export const MyContext = createContext({})

export function Provider(props) {
  const [users, setUsers] = useState(null)

  const clientId = 'af60016e2f4bfbbd3074'

  const signIn = `https://github.com/login/oauth/authorize?scope=user&client_id=${clientId}&redirect_url=http://localhost:3000`

  function signOut() {
    setUsers(null)
    localStorage.removeItem('token')
  }

  async function signInGit(gitCode, url) {
    const response = await api.post('authenticate', {
      code: gitCode
    })

    window.history.pushState({}, '', url)

    const { token, user } = response.data

    localStorage.setItem('token', token)

    api.defaults.headers.common.authorization = `Bearer ${token}`

    setUsers(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`

      api.get('/profile').then(res => {
        setUsers(res.data)
      })
    }
  }, [])

  useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes('?code=')

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=')

      signInGit(githubCode, urlWithoutCode)
    }
  }, [])

  return (
    <MyContext.Provider value={{ signIn, users, signOut }}>
      {props.children}
    </MyContext.Provider>
  )
}
