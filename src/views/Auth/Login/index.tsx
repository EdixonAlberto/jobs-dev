import './Login.css'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const navigate = useNavigate()

  function login(): void {
    localStorage.setItem('session', JSON.stringify({ accessToken: '123', user: {} }))
    navigate('/')
  }

  return (
    <div className="Login">
      <h1>Login</h1>

      <form action="" onSubmit={login}>
        <input type="text" name="email" placeholder="Correo" />
        <input type="password" name="password" placeholder="Contraseña" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
