import './Header.css'
import { Icons } from '~/components/Icons'

export function Header() {
  return (
    <header className="header">
      <h2 className="header__title">JobsDev</h2>
      <Icons.Menu />
    </header>
  )
}
