import config from '../../config'
import { Link, useLocation } from 'react-router-dom'
import 'index.scss'
import './style.scss'
// import { useContext } from 'react'
// import { AppStateContext } from 'contexts/AppContext'

export const Breadcrumbs = () => {
  //   const { state } = useContext(AppStateContext)
  const { pathname } = useLocation()
  const crumbs = pathname.split('/')

  return (
    <div className="breadcrumbs flex-left">
      <div className="breadcrumbs-item">
        <Link to={config.BASE_URL}>{'Home'}</Link>
      </div>
      {crumbs.length > 2 && (
        <>
          <span>{'/'}</span>
          <div className="breadcrumbs-item">
            <Link to={pathname}>{crumbs.at(-1)}</Link>
          </div>
        </>
      )}
    </div>
  )
}
