import './Search.css'
import { Icons } from '~/components/Icons'

interface ISearchProps {
  onSearch: (value: string) => void
}

export function Search({ onSearch }: ISearchProps) {
  return (
    <div className="search">
      <div className="jd__input search__input">
        <input
          type="text"
          name="search"
          placeholder="Buscar Trabajos"
          onInput={({ target }: any) => onSearch(target.value)}
        />

        <div className="search__icon">
          <Icons.Search />
        </div>
      </div>
    </div>
  )
}
