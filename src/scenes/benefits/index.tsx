import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/outline"
import { SelectedPage, BenefitType } from "@/shared/types"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import Actionbutton from "@/shared/Actionbutton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "Connect with Like-Minded Individuals",
        description: "Join a supportive community that shares your fitness goals and passions",
    },

    {
        icon: <UserGroupIcon className="w-6 h-6"/>,
        title: "Track Progress and Stay Motivated",
        description: "Access personalized tools and expert advice to help you reach your wellness objectives",
    },

    {
        icon: <AcademicCapIcon className="w-6 h-6"/>,
        title: "Unlock Rewards and Achievements",
        description: "Earn badges and rewards for completing challenges and achieving milestones, making fitness a fun and engaging experience",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}


const Index = ({setSelectedPage}: Props) => {
  return <section
  id="benefits"
  className="mx-auto min-h-full w-5/6 py-20"
  >
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
        {/* Header */}
        <motion.div 
            className="md:my-5 md:w-4/5"
            initial = "hidden"
            whileInView = "visible"
            viewport={{once: true, amount: 0.5}}
            transition = {{ duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
            }}
        >
            <HText>MORE THAN JUST A GYM</HText>

            <p className="my-5 text-sm w-full md:w-1/2">
                GymPal is a social fitness and wellness platform showcasing 
                like-minded individuals striving for a healthier lifestyle
            </p>
        </motion.div>

        {/* Benefits */}
        <motion.div 
            className="mt-5 items-center justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
            >
            {benefits.map((benefit: BenefitType) => (
                <Benefit
                    key = {benefit.title}
                    icon = {benefit.icon}
                    title = {benefit.title}
                    description = {benefit.description}
                    setSelectedPage = {setSelectedPage}
                />
            ))}

        </motion.div>

        {/* Graphics & Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* Graphics */}
            <img src={BenefitsPageGraphic} alt="benefits-page-graphic"
            className="mx-auto"
            />

            {/* Description */}
            <div>
                {/* Title */}
                <motion.div 
                    className="relative"
                    initial = "hidden"
                    whileInView = "visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x:0}
                    }}
                    >
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <HText>
                                MILLIONS OF HAPPY MEMBERS GETTING {" "} 
                                <span className="text-primary-500">FIT</span>
                            </HText>
                    </div>
                </motion.div>

                {/* Description */}
                <div>
                    <p className="my-5">
                        Join the GymPal community today and become part of a vibrant and 
                        supportive network of individuals who share your passion for fitness 
                        and wellness. With GymPal, you'll find motivation, inspiration, and 
                        the tools you need to achieve your goals and live a healthier, happier life
                    </p>

                    <p className="mb-5">
                        Experience the power of community-driven fitness, where every member supports and 
                        motivates each other to reach new heights. Whether you're a fitness enthusiast or 
                        just starting out, GymPal provides a welcoming and inclusive space to help you succeed
                    </p>
                </div>

                {/* Button */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <Actionbutton setSelectedPage={setSelectedPage}>
                            Join Now
                        </Actionbutton>
                    </div>
                </div>

            </div>
        </div>

    </motion.div>
        
  </section>
 
}

export default Index;