import './home.css';
import homeImage from '../../assets/home-drawing.png';
import downArrow from '../../assets/icons/arrow-down.png'

export function Home(){
  return (
        <div className="home-container">
        <div className='background-circle'></div>
            <h1><span><svg width="40" height="3" viewBox="0 0 94 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.864258" y1="1.98284" x2="93.288" y2="1.98284" stroke="black" strokeWidth="3"/>
            </svg>
            </span>
                Hello! I'm Amina.
            </h1>
            <div className='color-rectangle'></div>

            <h2>Full-Stack Developer</h2>
            <p>With backgrounds in architecture and teaching, I discovered a passion for coding after an intensive bootcamp. Eager to combine design and analytical skills as a developer. Also a coach at the bootcamp, passing on what I've learned. Outside of programming, I love exploring new recipes.

</p>

            <img src={homeImage}/>
            <span className='see-work-nav'> My Work <img src={downArrow}/> <span><svg width="40" height="3" viewBox="0 0 94 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.864258" y1="1.98284" x2="93.288" y2="1.98284" stroke="black" strokeWidth="2"/>
            </svg></span></span>
        </div>
  )
}