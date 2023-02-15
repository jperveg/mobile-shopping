import './App.scss'
import { Route, Routes } from 'react-router-dom'
import config from './config'
import { Header, ProductList } from './views/'
import { AppProvider } from './contexts/AppContext'

function App() {
  return (
    <AppProvider>
      <div className="main">
        <Header />
        <Routes>
          <Route path={config.BASE_URL} element={<ProductList />} />
          <Route path={config.DETAILS_URL} element={<h1>{'Detalle'}</h1>} />
          <Route path="*" element={<h1>{'Not found'}</h1>} />
        </Routes>
      </div>
    </AppProvider>
  )
}

export default App
