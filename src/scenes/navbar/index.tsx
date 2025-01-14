import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Logo from "@/assets/Logo.jpg"
import Link from "./Link"
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import Actionbutton from "@/shared/Actionbutton";

type Props = {
  isTopofPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({isTopofPage, selectedPage, setSelectedPage} : Props) => {
  const flexBetween = "flex items-center justify-between"
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const navbarBackground = isTopofPage ? "bg-primary-100 drop-shadow" : "";

  return <nav>
    <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left Side */}
            <img src={Logo} alt="logo" />

            {/* Right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} w-full gap-8 text-sm`}>
                  <Link 
                    page = "Home"
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage}
                  />

                  <Link
                    page="Benefits"
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage}
                  />

                  <Link
                    page="Our Classes"
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage}
                  />

                  <Link
                    page="Contact Us"
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage}
                  />

                </div> 
                <div className={`${flexBetween} gap-6`}>
                  <p>Sign In</p>
                  <Actionbutton setSelectedPage = {setSelectedPage}>Become a member</Actionbutton>
                </div>
                </div>

                ) : (
                  <button className="rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                      <Bars3Icon className="h-6 w-6 text-white"/>
                  </button>
                  
                )}

               

            </div>

          </div>
      </div>
      {/* Mobile Menu Modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">

          {/* Closed Icon */}
          <div className="flex justify-end p-10">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400"/>
            </button>
          </div>

          {/* Menu Icons */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                  <Link 
                    page = "Home"
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage}
                  />

                  <Link
                    page="Benefits"
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage}
                  />

                  <Link
                    page="Our Classes"
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage}
                  />

                  <Link
                    page="Contact Us"
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage}
                  />

                </div> 

        </div>
      )}
  </nav>
}

export default Navbar