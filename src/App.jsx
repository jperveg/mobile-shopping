import './App.scss'
import { Route, Routes } from 'react-router-dom'
import config from './config'
import { Header, ProductDetail, ProductList } from 'views'
import { AppProvider } from 'contexts/AppContext'
import { PersistProvider } from 'contexts/PersistContext'

function App() {
  return (
    <AppProvider>
      <PersistProvider>
        <div className="main">
          <Header />
          <Routes>
            <Route path={config.BASE_URL} element={<ProductList />} />
            <Route path={config.DETAILS_URL} element={<ProductDetail />} />
            <Route path="*" element={<h1>{'Not found'}</h1>} />
          </Routes>
        </div>
      </PersistProvider>
    </AppProvider>
  )
}

export default App
