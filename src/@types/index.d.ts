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

type TResponseListApi<D> = {
  error: null | string[]
  response: TResponseList<D>
}

type TResponseList<D> = {
  total: number
  data: D[]
}

type TJob = {
  id: string
  title: string
  role: string
  time: string
  postulationFast: boolean
  companyName: string
  location: string
  url: string
  perks: string[]
  isNew: boolean
  hasPublishedSalary: boolean
  details: {
    postulations: number
    remote100: boolean
    language: string | 'spanish'
    skills: string[]
  }
}
