import { Routes, Route } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { DashboardPage } from './pages/DashboardPage/DashboardPage'
import { AddCompanyPage } from './pages/AddCompanyPage'

function App() {
  const { loading } = useAuth()

  if (loading) {
    return null // Or a loading spinner
  }

  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/add-company" element={<AddCompanyPage />} />
    </Routes>
  )
}

export default App