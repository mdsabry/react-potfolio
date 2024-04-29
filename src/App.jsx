import Header from "./Components/1- header/Header";
import MainContent from "./Components/3- main/main";
import Hero from "./Components/2- hero/Hero";
import Contact from "./Components/4- contact/Contact";
import Footer from "./Components/5- footer/Footer";

function App() {

  return (
    <div className="container">
      <Header />
      <div className="dividers" />
      <Hero />
      <div className="dividers" />
      <MainContent />
      <div className="dividers" />
      <Contact />
      <div className="dividers" />
      <Footer />
    </div>
  )
}

export default App
