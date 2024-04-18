import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Specialties from "../components/specialties";
import Steps from "../components/step";
import Stepss from "../components/steps";

export default function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Specialties/>
        <Steps/>
        <Footer/>
        </>
    )
}