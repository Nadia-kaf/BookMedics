import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Price from "../components/pricing";
import Steps from "../components/step";

export default function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Steps/>
        <Price/>
        <Footer/>
        </>
    )
}