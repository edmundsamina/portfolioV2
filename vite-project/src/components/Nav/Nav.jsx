import logo from '../../assets/logo.png'
import './nav.css'

export function Nav(){
  return (
    <div className="nav-container">
      <img src={logo}/>
      <ul>
        <li>
          Home
        </li>
        <li>
           CV
        </li>
      </ul>


    </div>
  )
}