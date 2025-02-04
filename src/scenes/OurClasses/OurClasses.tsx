import { SelectedPage } from '@/shared/types';
import image1 from '@/assets/image1.png'; 
import image2 from '@/assets/image2.png'; 
import image3 from '@/assets/image3.png'; 
import image4 from '@/assets/image4.png'; 
import image5 from '@/assets/image5.png'; 
import image6 from '@/assets/image6.png'; 
import {motion} from 'framer-motion';
import HText from '@/shared/HText';
import { ClassType } from '@/shared/types';
import Class from './Class';

const classes: Array<ClassType> = [
  {
    name: "Workout Logs",
    description: "Track your daily workouts and monitor your progress",
    image: image1,
  },

  {
    name: "Weight Tracker",
    description: "Upload photos to track visual changes in your body",
    image: image2,
  },

  {
    name: "Mood Journaling",
    description: "Record your emotions and energy levels to identify patterns",
    image: image3,
  },

  {
    name: "Sleep Tracker",
    description: "Monitor your sleep patterns and receive tips for improvement",
    image: image4,
  },

  {
    name: "Nutrition Planner",
    description: "Plan and track your meals to achieve your fitness goals",
    image: image5,
  },

  {
    name: "Step Counter",
    description: "Track your daily steps and monitor your physical activity",
    image: image6,
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage} : Props) => {
  return <section id='ourclasses' className='w-full bg-primary-100 py-40'>
    <motion.div
      onViewportEnter={() =>  setSelectedPage(SelectedPage.OurClasses)}
    >
      <motion.div
        className='mx-auto w-5/6'
      >
        <div className='w-3/5'>
          <HText>Progress Tracking</HText>

          <p className='py-5'>
            Stay motivated and focused on your fitness goals with our progress
            tracking section, designed to inspire and encourage you every step of 
            the way. This dedicated space allows you to visualize your journey, 
            set reminders, and receive motivational notifications to keep you 
            moving forward. With a clean and intuitive design, our progress 
            tracking section provides a seamless and engaging user experience.
          </p>
        </div> 
      </motion.div>

      <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
        <ul className='w-[2800px] whitespace-nowrap'>
          {classes.map((item: ClassType, OurClasses) => (
            <Class
              key = {`${item.name} - ${OurClasses}`}
              name = {item.name}
              description = {item.description}
              image = {item.image}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  </section>
}

export default OurClasses