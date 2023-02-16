import { AppStateContext } from 'contexts/AppContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from 'views/Breadcrumbs'
import homeLogo from '../../assets/icons/homeLogo.svg'
import shoppingCart from '../../assets/icons/shoppingCart.svg'
import 'index.scss'
import './styles.scss'

export const Header = () => {
  const { state } = useContext(AppStateContext)
  const {
    cart: { numProductsInCart },
  } = state
  return (
    <>
      <header className="app-header">
        <div className="flex-left-col">
          <Link to="/">
            <div className="app-header-logo flex-centered flex-left">
              <img src={homeLogo} alt="logo" />
              <p>{'Mobile shop'}</p>
            </div>
          </Link>
          <Breadcrumbs />
        </div>
        <div className="app-header-shopping-cart flex-centered">
          <img
            src={shoppingCart}
            className="app-header-shopping-cart-img"
            alt="shoppingCart"
          />
          {numProductsInCart !== 0 && (
            <div className="app-header-shopping-cart-counter">
              {numProductsInCart}
            </div>
          )}
        </div>
      </header>
    </>
  )
}
