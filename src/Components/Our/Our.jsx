import './Our.scss'
import awatar from './img/awatar.svg'
import awatar1 from './img/awatar2.png'
import awatar2 from './img/awatar3.png'


function Our() {
    return (
        <div className='Our'>
            <div className="container our__wrapper">
            <h2 className='our__title'>
            Delivering real results for top companies. Some of our <span className='our__span'>success stories.</span>
                    </h2>

                    <ul className="our__list">
                        <li className='our__item'>
                           <p className='our__info'>
                           “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
                           </p>
                            <h4 className='hero__title'>Kady Baker</h4>
                                <i className='our__i'>Product Manager at Bookmark</i>
                         <img src={awatar } alt="" />
                        </li>
                        <li className='our__item'>
                           <p className='our__info'>
                           “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”
                           </p>
                            <h4 className='hero__title'>Aiysha Reese</h4>
                                <i className='our__i'>Founder of Manage</i>
                         <img src={awatar2} alt="" />
                        </li>
                        <li className='our__item'>
                           <p className='our__info'>
                           “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”
                           </p>
                            <h4 className='hero__title'>Arthur Clarke</h4>
                                <i className='our__i'>Co-founder of MyPhysio</i>
                                <img src={awatar1} alt="" />

                        </li>
                    </ul>

            </div>
        </div>
    )
}
export default Our;