import './Tabs.css'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Icons } from '~/components/Icons'

export function Tabs() {
  const [tab, setTab] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setTab(location.pathname)
  }, [])

  function changeView(pathname: string) {
    setTab(pathname)
    navigate(pathname)
  }

  return (
    <footer className="tabs">
      <ul className="tabs__container">
        <li className={'tabs__container__item' + (tab === '/' ? ' active' : '')} onClick={() => changeView('/')}>
          <Icons.Home />
          <span>Inicio</span>
        </li>

        <li
          className={'tabs__container__item' + (tab === '/statistics' ? ' active' : '')}
          onClick={() => changeView('/statistics')}
        >
          <Icons.Chart />
          <span>Estadisticas</span>
        </li>

        <li
          className={'tabs__container__item' + (tab === '/subs' ? ' active' : '')}
          onClick={() => changeView('/subs')}
        >
          <Icons.Wallet />
          <span>Subscripción</span>
        </li>

        <li
          className={'tabs__container__item' + (tab === '/profile' ? ' active' : '')}
          onClick={() => changeView('/profile')}
        >
          <Icons.User />
          <span>Perfil</span>
        </li>
      </ul>
    </footer>
  )
}
