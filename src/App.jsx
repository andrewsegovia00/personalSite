import { BrowserRouter } from "react-router-dom"
import { About, ContactMe, Experience, Feedbacks, Hero, Navbar, Tech, Projects, StarsCanvas } from "./components"
const App = () => {

  return (
<BrowserRouter>

<div className="relative z-0 bg-primary">
  <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />

  </div>
  <About />
  <Tech />
  <Projects />
  {/* <Experience /> */}
  <div className="relative z-0">
    <ContactMe />
    <StarsCanvas />
  </div>
</div>

</BrowserRouter>
  )
}

export default App
