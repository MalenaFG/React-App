import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Apartamentos</Link>
                    </li>
                    <li>
                        <a href="#">Otros</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar