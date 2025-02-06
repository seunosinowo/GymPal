import Actionbutton from '@/shared/Actionbutton';
import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import HomePageText_1 from '@/assets/HomePageText_1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import { motion } from 'framer-motion';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens =  useMediaQuery("(min-width: 1060px)")
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
        {/* Image and Main header */}
        <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            
            
            {/* Main Header */} 
            <motion.div className='z-10 mt-32 basis-3/5'>
                {/* Headings */}
                <motion.div className='md:-mt-20'
                initial = "hidden"
                whileInView= "visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.2, duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50 },
                    visible: {opacity: 1, x: 0}
                }}>

                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1]'>
                            <img src={HomePageText_1} alt="home-page-text"
                            className='-ms-6'
                            />
                        </div>
                    </div>

                    <p className='mt-8 text-sm md:text-start'>
                        A social platform that connects users with similar fitness and wellness 
                        goals. Users can share workouts, join challenges, and participate in 
                        discussions, with features like gamification, rewards, and expert advice
                    </p>
                        
                </motion.div>

                {/* Actions */}
                <motion.div className='mt-8 flex gap-8 items-center'
                initial = "hidden"
                whileInView = "visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.2, duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 1},
                }}
                >
                    <Actionbutton setSelectedPage={setSelectedPage}>
                        Join Now
                    </Actionbutton>
                    
                    <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500 cursor-pointer'
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                    >
                        
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </motion.div>
            

            {/* Image */}
            <div className='flex basis-3/5 justify-centern md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                <img src= {HomePageGraphic} alt= "HomePage_Graphics"
                className='h-[25rem]'
                />
            </div>
        </motion.div>
        {/* Sponsors */}
        {isAboveMediumScreens && (
            <div className='h-[150px] w-full bg-primary-100 py-10'>
                <div className='mx-auto w-5/6'>
                    <div className='flex w-3/5 items-center justify-center gap-8'>
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