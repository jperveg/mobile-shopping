import './styles.scss'
import '../../index.scss'
import { Link } from 'react-router-dom'
import homeLogo from '../../assets/icons/homeLogo.svg'
import shoppingCart from '../../assets/icons/shoppingCart.svg'

const count = 3

export const Header = () => {
  return (
    <header className="app-header">
      <Link to="/">
        <div className="app-header-logo flex-centered">
          <img src={homeLogo} alt="logo" />
          <p>{'Mobile shop'}</p>
        </div>
      </Link>
      <div className="app-header-shopping-cart flex-centered">
        <img
          src={shoppingCart}
          className="app-header-shopping-cart-img"
          alt="shoppingCart"
        />
        <div className="app-header-shopping-cart-counter">{count}</div>
      </div>
    </header>
  )
}
