import './Footer.scss'
import footerlogo from './img/logo.svg'
import facebook from './img/facebook.jpg'
import d from './img/d.jpg'
import twitter from './img/twitter.png'


function Footer() {
    return (
        <footer className='footer'>
      <div className="container">
      <ul className="footer__list">
            <li className="footer__item">
                <a href="#">
                  <img src={footerlogo} alt="" />
                </a>
                <span className='footer__span'>
                    <a href="#" className='footer__a'>home</a>
                    <a href="#" className='footer__A'>about</a>
                </span>
            </li>
            <li className="footer__iteM">
            <a href="#" className='footer__AA'>987 Hillcrest Lane</a>
            <a href="#" className='footer__AA'>Irvine, CA</a>
            <a href="#" className='footer__AA'>California 92714</a>
            <a href="#" className='footer__AA'>Call Us : 949-833-7432</a>

            </li>
            <li className="footer__item">
            <span className='footer__spann'>
              <img src={facebook} alt="" />
              <img src={d} alt="" />
              <img src={twitter} alt="" />
                </span>
                <a href="#" className='footer_a'>Copyright 2020. All Rights Reserved</a>
            </li>
          </ul>
      </div>
        </footer>
    )
}
export default Footer;