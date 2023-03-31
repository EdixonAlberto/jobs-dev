import './Jobs.css'
import { useEffect, useState } from 'react'
import { Search } from '~/components/Search'
import { Icons } from '~/components/Icons'
import { useLocaleStorge } from '~/hooks/useLocalStorage'

type TUserStore = {
  views: string[]
}

export function Jobs() {
  const [jobs, setJobs] = useState<TJob[]>([])
  const [jobsFilter, setJobsFilter] = useState<TJob[]>([])
  const [search, setSearch] = useState<string>('')
  const [userStore, setUserStore] = useLocaleStorge<TUserStore>('store', {
    views: []
  })

  useEffect(() => {
    getJobs()
  }, [])

  useEffect(() => {
    if (jobs.length || search) {
      const filter = jobs.filter(job => {
        const textInput = search.trim().toLowerCase()
        // prettier-ignore
        return (
          false
          || job.title.toLowerCase().includes(textInput)
          || job.details.skills.map(skill => skill.toLowerCase()).includes(textInput)
        )
      })
      setJobsFilter(filter)
    }
  }, [jobs, search])

  // FUNCTIONS _________________________________________________________________________________________________________

  async function getJobs(): Promise<void> {
    const { VITE_API_URL, VITE_ACCESS_TOKEN } = import.meta.env
    const response = await fetch(`${VITE_API_URL}/api/jobs`, {
      headers: { Authorization: `Bearer ${VITE_ACCESS_TOKEN}` }
    })
    const data = (await response.json()) as TResponseListApi<TJob>
    if (data.error?.length) {
      alert(`Error del servidor: ${data.error.join(', ')}`)
    } else {
      // setJobs(data.response.data)

      const jobs = data.response.data.filter(job => {
        // prettier-ignore
        return (
            true
            && job.details.postulations < 100
            && job.details.remote100
            && job.details.language === 'spanish'
          )
      })
      setJobs(jobs)
    }
  }

  function setView(jobId: string): void {
    setUserStore({
      views: [...(userStore?.views || []), jobId]
    })
  }

  // TEMPLATE __________________________________________________________________________________________________________

  return (
    <div className="jobs">
      <Search onSearch={setSearch} />

      <div className="jobs__header">
        <p>
          JobsDev es el destino número uno para buscar y listar increibles ofertas de trabajo remoto en programación.
        </p>
        <h3 className="jobs__header__title">Últimos Trabajos: {jobsFilter.length}</h3>
      </div>

      <ul className="jobs__container">
        {jobsFilter.length ? (
          jobsFilter.map((job: TJob) => (
            <li key={job.id} className="jobs__container__card">
              <div className="card__section jobs__card__content">
                <div className="jobs__content__text">
                  <div className="item__title jobs__content__item">
                    <h3>
                      {job.title}
                      {userStore?.views.includes(job.id) && <Icons.Eye />}
                    </h3>
                  </div>

                  <div className="jobs__content__item">
                    <Icons.Company />
                    <span>{job.companyName}</span>
                  </div>

                  <div className="jobs__content__item">
                    <Icons.Location />
                    <span>{job.location}</span>
                  </div>

                  <div className="jobs__content__item">
                    <Icons.Code />
                    <span>{job.role}</span>
                  </div>

                  <div className="jobs__content__item">
                    <Icons.Clock />
                    <span>{job.time}</span>
                  </div>

                  <div className="jobs__content__item">
                    <Icons.Lang />
                    <span>{job.details.language === 'spanish' ? 'Español' : job.details.language}</span>
                  </div>

                  <div className="jobs__content__item">
                    <Icons.Users />
                    <span>
                      {job.details.postulations + (job.details.postulations > 1 ? ' Postulaciones' : ' Postulante')}
                    </span>
                  </div>
                </div>

                <div className="jobs__content__badges">
                  {job.isNew && <div className="badge__new">Nuevo</div>}
                  {job.postulationFast && <div className="badge__fast">Rapido</div>}
                  {job.hasPublishedSalary && <div className="badge__money">Salario</div>}
                </div>
              </div>

              <div className="card__section jobs__card__badges">
                {job.details.skills.map(skill => (
                  <div key={skill} className="jobs__badges__item">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <a
                className="card__section jd__link"
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setView(job.id)}
              >
                Ver Detalles
              </a>
            </li>
          ))
        ) : (
          <p>No hay trabajos publicados</p>
        )}
      </ul>
    </div>
  )
}
