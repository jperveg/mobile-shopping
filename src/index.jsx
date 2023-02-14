import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import config from './config'
import { setupFetcher } from './config/setupFetcher'
import './index.scss'
import { Fetcher } from './utils/fetcher'

setupFetcher(() => new Fetcher(config.BASE_URL))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
