import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/outline"
import { SelectedPage, BenefitType } from "@/shared/types"
import { motion } from "framer-motion";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>
        title: "Connect with Like-Minded Individuals"
        description: "Join a supportive community that shares your fitness goals and passions"
    },

    {
        icon: <UserGroupIcon className="w-6 h-6"/>
        title: "Track Progress and Stay Motivated"
        description: "Access personalized tools and expert advice to help you reach your wellness objectives"
    },

    {
        icon: <AcademicCapIcon className="w-6 h-6"/>
        title: "Unlock Rewards and Achievements"
        description: "Earn badges and rewards for completing challenges and achieving milestones, making fitness a fun and engaging experience"
    }
]


const Benefits = ({setSelectedPage}: Props) => {
  return <section
  id="benefits"
  className="mx-auto min-h-full w-5/6 py-20"
  >
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
        {/* Header */}
        <div className="md:my-5 md:w-4/5">
            <HText>MORE THAN JUST A GYM</HText>

            <p className="my-5 text-sm w-full md:w-1/2">
                GymPal is a social fitness and wellness platform showcasing 
                like-minded individuals striving for a healthier lifestyle
            </p>
        </div>

        {/* Benefits */}
        <div className="mt-5 items-center justify-between md:flex">
            <div>hjhjhj</div>
            <div>hjhjhj</div>
            <div>hjhjhj</div>

            {benefits.map((benefit) => (
                <Benefits/>
            ))}

        </div>

    </motion.div>
        
  </section>
 
}

export default Benefits;