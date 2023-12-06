import './Header.scss'
import headerlogo from './img/myteam-logo.svg'


function Header() {
    return (
        <header>
          <div className="container wrapper">
            <a href="#">
            <img src={headerlogo} alt="" />
            </a>
            <ul className="list">
                <li className='list__item'>
                    <a href="#">home</a>
                </li>
                <li className='list__item'>
                    <a href="#">about</a>
                </li>
              
            </ul>
            <button className='header__btn'>contact</button>
          </div>
        </header>
        
    )
}
export default Header;