type TRole = 'admin' | 'user'

type TSession = {
  accessToken: string
  user: {
    username: string
    email: string
    roles?: TRole[]
    avatar: string
  }
}
