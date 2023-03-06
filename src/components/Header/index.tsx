import './Header.css'
import { Icons } from '~/components/Icons'

export function Header() {
  return (
    <header className="jd__headers">
      <h2 className="header__title fd-title">JobsDev</h2>

      <Icons.Menu />
    </header>
  )
}
