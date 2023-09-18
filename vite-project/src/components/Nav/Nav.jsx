import logo from '../../assets/logo.png';
import './nav.css';
import cv from '../../assets/CV.pdf'

export function Nav(){

  const downloadCV = () => {
    window.open(cv);
  }


  return (
    <div className="nav-container">
      <img src={logo}/>
      <ul>
        <li>
        <a href="#projects">
          Projects
          </a>
        </li>
        <li onClick={downloadCV}>
           CV
        </li>
      </ul>


    </div>
  )
}
