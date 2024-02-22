import Navbar from "./components/nav"
import About from "./components/about"
import Home from "./components/home";
import Skill from "./components/skills";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App =()=>{
  return(
    <div>
      <Navbar/>
      <Home/>
    <About/>
    <Skill/>
    <Portfolio/>
    <Contact/>
    <Footer/>
   
    </div>
  )
}
export default App;