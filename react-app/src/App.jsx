
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Sidebar from './component/Sidebar/Sidebar'

const App = () => {

  return (
    <div className='App' >

      <Navbar>
        <p>Yo soy Navbar</p>
      </Navbar>

      <Footer />
      <Sidebar />




    </div>


  )
}

export default App
