import { useRef, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';
import '../main.css'

function Header() {
  const navRef = useRef()
  const location = useLocation()

  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [profile, setProfile] = useState('')
  const [showDropdown, setShowDropdown] = useState(false);

  const getuserdeatils = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,

      url: 'https://teentekde-1.onrender.com/user/getuserdeatils',
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`
      }
    }
    axios
      .request(config)
      .then(response => {
        setUserName(response.data.user.name)
        setProfile(response.data.user.accountBalance)
      })
      .catch(error => {
      })
  }
  useEffect(() => {
    getuserdeatils()
    const storedUserEmail = localStorage.getItem("userEmail");
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="p-4 flex justify-between items-center">
      <Link to="/">
        <h3 className="text-white text-xl">Animal-Aid-Hub</h3>
      </Link>

      <nav className="md:hidden">
        {/* Hamburger menu icon */}
        <button onClick={toggleDropdown} className="text-white focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Dropdown menu */}
        {showDropdown && (
          <div className="absolute top-16 right-0 bg-gray-800 rounded-md shadow-lg">
            <Link to='/' className={`block px-4 py-2 text-white ${location.pathname === '/' ? 'underline' : ''}`}>
              Home
            </Link>
            <Link to='/product' className={`block px-4 py-2 text-white ${location.pathname === '/products' ? 'underline' : ''}`}>
              Market Place
            </Link>
            <Link to='/sos' className={`block px-4 py-2 text-white ${location.pathname === '/sos' ? 'underline' : ''}`}>
              SOS/Rescue
            </Link>
            <Link to='/dashboard' className={`block px-4 py-2 text-white ${location.pathname === '/dashboard' ? 'underline' : ''}`}>
             Dashboard
            </Link>
            <Link to='/vaccine' className={`block px-4 py-2 text-white ${location.pathname === '/vaccine' ? 'underline' : ''}`}>
              Vaccine Centers
            </Link>
            <Link to='/contact' className={`block px-4 py-2 text-white ${location.pathname === '/contact' ? 'underline' : ''}`}>
              Contact us
            </Link>
            <button onClick={handleLogout} className="block px-4 py-2 text-white hover:bg-gray-700">
              Logout
            </button>
          </div>
        )}
      </nav>

      <nav className="hidden md:flex items-center space-x-4">
        <Link to='/' className={`text-white ${location.pathname === '/' ? 'underline' : ''}`}>
          Home
        </Link>
        <Link to='/product' className={`text-white ${location.pathname === '/marketplace' ? 'underline' : ''}`}>
          Market Place
        </Link>
        <Link to='/sos' className={`text-white ${location.pathname === '/sos' ? 'underline' : ''}`}>
          SOS/Rescue
        </Link>
        <Link to='/dashboard' className={`text-white ${location.pathname === '/dashboard' ? 'underline' : ''}`}>
          Dashboard
        </Link>
        <Link to='/vaccine' className={`text-white ${location.pathname === '/vaccine' ? 'underline' : ''}`}>
          Vaccine Centers
        </Link>
        <Link to='/contact' className={`text-white ${location.pathname === '/contact' ? 'underline' : ''}`}>
          Contact us
        </Link>
        <div className="flex items-center">
          <img className='icon h-8 w-8' src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='user icon' />
          <div className="ml-2">
            <p className="text-white">{userName}</p>
            <p className="text-white">{profile}</p>
          </div>
        </div>
        <button onClick={handleLogout} className="text-white">Logout</button>
      </nav>
    </header>
  )
}

export default Header
