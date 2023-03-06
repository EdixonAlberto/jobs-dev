import './Tabs.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icons } from '~/components/Icons'

export function Tabs() {
  const [tab, setTab] = useState('')
  const navigate = useNavigate()

  function changeView(viewName: string) {
    setTab(viewName)
    navigate('/' + viewName)
  }

  return (
    <footer className="tabs">
      <ul className="tabs__items">
        <li className={'tabs__items__tab' + (tab === '' ? ' active' : '')} onClick={() => changeView('')}>
          <Icons.Home />
          <span>Inicio</span>
        </li>

        <li
          className={'tabs__items__tab' + (tab === 'statistics' ? ' active' : '')}
          onClick={() => changeView('statistics')}
        >
          <Icons.Chart />
          <span>Estadisticas</span>
        </li>

        <li className={'tabs__items__tab' + (tab === 'subs' ? ' active' : '')} onClick={() => changeView('subs')}>
          <Icons.Wallet />
          <span>Subscripción</span>
        </li>

        <li className={'tabs__items__tab' + (tab === 'profile' ? ' active' : '')} onClick={() => changeView('profile')}>
          <Icons.User />
          <span>Perfil</span>
        </li>
      </ul>
    </footer>
  )
}
