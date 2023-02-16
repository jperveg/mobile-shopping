import config from '../../config'
import { Link, useLocation } from 'react-router-dom'
import 'index.scss'
import './style.scss'
import { PRODUCTS_LIST } from 'hooks'
// import { useContext } from 'react'
// import { AppStateContext } from 'contexts/AppContext'

export const Breadcrumbs = () => {
  //   const { state } = useContext(AppStateContext)
  const { pathname } = useLocation()
  const crumbs = pathname.split('/')
  const productId = crumbs.at(-1)
  const productName =
    productId && PRODUCTS_LIST.find((product) => product.id === productId).model

  return (
    <div className="breadcrumbs flex-left">
      <Link to={config.BASE_URL}>
        <div className="breadcrumbs-item">{'Home'}</div>
      </Link>
      {crumbs.length > 2 && (
        <>
          <span>{'/'}</span>
          <Link to={pathname}>
            <div className="breadcrumbs-item">{productName}</div>
          </Link>
        </>
      )}
    </div>
  )
}
