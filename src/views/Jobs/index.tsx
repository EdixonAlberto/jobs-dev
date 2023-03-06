import './Jobs.css'
import { useEffect, useState } from 'react'
import { Search } from '~/components/Search'
import { Icons } from '~/components/Icons'

export function Jobs() {
  const [jobs, setJobs] = useState<TJob[]>([])
  const [jobsFilter, setJobsFilter] = useState<TJob[]>([])
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    getJobs()
  }, [])

  useEffect(() => {
    if (jobs.length || search) {
      const filter = jobs.filter(job => {
        return job.title.toLowerCase().includes(search.toLowerCase())
      })
      console.log(filter.length)
      setJobsFilter(filter)
    }
  }, [jobs, search])

  async function getJobs(): Promise<void> {
    const response = await fetch('http://localhost:4000/api/jobs', {
      headers: {
        Authorization: 'Bearer 123'
      }
    })
    const data = (await response.json()) as TResponseListApi<TJob>
    if (data.response) {
      const jobs = data.response.data.filter(job => {
        return job.details.postulations < 50 && job.details.remote100 && job.details.language === 'spanish'
      })
      setJobs(jobs)
    } else {
      // TODO: loading false
    }
  }

  return (
    <div className="jobs">
      <div className="jobs__header">
        <p>JobsDev es el destino número uno para buscar y listar increibles ofertas de trabajo remoto.</p>
        <Search onSearch={setSearch} />
        <h3 className="jobs__header__title">Últimos Trabajos</h3>
      </div>

      <ul className="jobs__main__container">
        {jobsFilter.length ? (
          jobsFilter.map((job: TJob, i: number) => (
            <li key={i} className="jobs__container__card">
              <div className="jobs__card__title">
                <span>{job.title}</span>
                {job.isNew && <span>Nuevo</span>}
              </div>

              <div className="jobs__card__content">
                <div className="jobs__card__content__item">
                  <Icons.Company />
                  <span>{job.companyName}</span>
                </div>

                <div className="jobs__card__content__item">
                  <Icons.Location />
                  <span>{job.location}</span>
                </div>

                <div className="jobs__card__content__item">
                  <Icons.Code />
                  <span>{job.role}</span>
                </div>

                <div className="jobs__card__content__item">
                  <Icons.Lang />
                  <span>{job.details.language === 'spanish' ? 'Español' : job.details.language}</span>
                </div>

                <div className="jobs__card__content__item">
                  <Icons.Users />
                  <span>
                    {job.details.postulations + (job.details.postulations > 1 ? ' Postulaciones' : ' Postulante')}
                  </span>
                </div>

                <a href={job.url} target="_blank" rel="noopener noreferrer">
                  Ver Detalles
                </a>
              </div>
            </li>
          ))
        ) : (
          <p>No hay trabajos publicados</p>
        )}
      </ul>
    </div>
  )
}
