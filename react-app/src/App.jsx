import './App.css'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar'
import ApartmentsList from './components/ApartmentsList/ApartmentsList.jsx'
import DashboardPage from './Pages/DashboardPage.jsx'
import { Route, Routes } from 'react-router-dom'
// import ApartmentCard from './components/ApartmentCard/ApartmentCard.jsx'

function App() {

  return (
    <div className='App'>

      <Navbar />

      <div className="viewport-content">

        <Sidebar />

        <Routes>
          <Route path='/' element={<DashboardPage />} />
        </Routes>

      </div>

      <Footer />

    </div>
  )
}

export default App