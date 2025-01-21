import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "./scenes/home/Home";
import Benefits from "./scenes/benefits/Benefits";


function App() {
  const[selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const[isTopofPage, setIsTopofPage] = useState<boolean>(false)


  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopofPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      if(window.scrollY ! == 0) setIsTopofPage(true);
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return  (
  <div className="app bg-gray-20">
    <Navbar 
      isTopofPage = {isTopofPage}
      selectedPage = {selectedPage} 
      setSelectedPage = {setSelectedPage}/>

      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      
  </div>
  )
}

export default App;
