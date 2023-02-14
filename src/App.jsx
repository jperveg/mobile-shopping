import './App.scss'
import { Route, Routes } from 'react-router-dom'
import config from './config'
import { Header } from './views/'

function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path={config.BASE_URL} element={<h1>{'Hola'}</h1>} />
        <Route path={config.DETAILS_URL} element={<h1>{'Detalle'}</h1>} />
        <Route path="*" element={<h1>{'Not found'}</h1>} />
      </Routes>
    </div>
  )
}

export default App
