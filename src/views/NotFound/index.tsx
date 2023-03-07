import './NotFound.css'

export function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Not Found</h2>
      <p className="not-found__text">¡El recurso solicitado no se pudo encontrar en este servidor!</p>
    </div>
  )
}
