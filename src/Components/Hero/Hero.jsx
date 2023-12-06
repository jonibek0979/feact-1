import './Hero.scss'
import hero1 from './img/hero__img1.svg'
import hero2 from './img/hero__img2.svg'
import hero3 from './img/hero__img3.svg'


function Hero() {
    return (
        <div className='hero'>
            <div className="container WRAPPER">
                <div className="hero__wrapper">
                    <hr className='hero__hr'></hr>
                    <h2 className='hero__titleeee'>
                        Build & manage distributed teams like no one else.
                    </h2>
                </div>
                <div className="hero__inner">
                    <ul className="hero__list">
                        <li className='hero__item'>
                        <img src={hero1} alt="" />
                            <span className='hero__span'>
                                <h4 className='hero__h4'>Experienced Individuals</h4>
                                <p className='hero__text'>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                            </span>
                        </li>
                        <li className='hero__item'>
                        <img src={hero2} alt="" />
                            <span className='hero__span'>
                                <h4 className='hero__h4'>Easy to Implement</h4>
                                <p className='hero__text'>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                            </span>
                        </li>
                        <li className='hero__item'>
                        <img src={hero3} alt="" />
                            <span className='hero__span'>
                                <h4 className='hero__h4'>Enhanced Productivity</h4>
                                <p className='hero__text'>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                            </span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Hero;