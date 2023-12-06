import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Main from '../../Components/Main/Main';
import Our from '../../Components/Our/Our';
import Ready from '../../Components/Ready/Ready';
import './Home.scss'


function Home() {
    return (
        <div>
            <Header/>
            <Main/>
            <Hero/>
            <Our/>
            <Ready/>
            <Footer/>
        </div>
    )
}
export default Home;