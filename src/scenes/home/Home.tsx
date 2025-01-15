// import useMediaQuery from '@/hooks/useMediaQuery';
import Actionbutton from '@/shared/Actionbutton';
import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import HomePageText from '@/assets/HomePageText.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens =  useMediaQuery("(min-width: 1060px)")
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
        {/* Image and Main header */}
        <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
            {/* Main Header */} 
            <div className='z-10 mt-32 basis-3/5'>
                {/* Headings */}
                <div className='md:-mt-20'>
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:content-gympaltext'>
                            <img src={HomePageText} alt="home-page-text" />
                        </div>
                    </div>

                    <p>
                        A social platform that connects users with similar fitness and wellness 
                        goals. Users can share workouts, join challenges, and participate in 
                        discussions, with features like gamification, rewards, and expert advice
                    </p>
                    
                </div>

                {/* Actions */}
                <div>
                    <Actionbutton setSelectedPage={setSelectedPage}>
                        Join Now
                    </Actionbutton>
                    
                    <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500 cursor-pointer'
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                    >
                        
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>
            

            {/* Image */}
            <div>
                <img src= {HomePageGraphic} alt= "HomePage_Graphics" />
            </div>
        </div>
        {/* Sponsors */}
        {isAboveMediumScreens && (
            <div>
                <div>
                    <div>
                        <img src={SponsorRedBull} alt="redbull sponsor" />
                        <img src={SponsorForbes} alt="forbes sponsor" />
                        <img src={SponsorFortune} alt="fortune sponsor" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}



export default Home