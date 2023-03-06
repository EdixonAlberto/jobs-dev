import { PropsWithChildren } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface IAuthProps extends PropsWithChildren {
  role?: TRole
}

export function Auth({ children, role = 'user' }: IAuthProps) {
  const session = JSON.parse(localStorage.getItem('session') || 'null') as TSession | null

  if (!session) {
    return <Navigate to="/auth/login" replace />
  }

  const { user } = session

  // Se permite el acceso a usuarios sin roles para considerar el manejo de sesion sin roles
  if (!user.roles || user.roles.includes(role)) {
    return children ? <>{children}</> : <Outlet />
  } else {
    return <Navigate to="/" replace />
  }
}
