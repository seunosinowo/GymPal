import Logo from "@/assets/Logo.jpg"


const footer = () => {
  return (
  <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="" />
                <p className="my-5">
                    GymPal is a social fitness and wellness platform that connects like-minded 
                    individuals striving for a healthier lifestyle. Our platform offers a 
                    supportive community, personalized tools, and expert advice to help 
                    users achieve their wellness objectives.
                </p>
                <p>&copy; GymPal  All right Reserved.</p>
            </div>

            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Home</p>
                <p className="my-5">Benefits</p>
                <p className="my-5">Our Classes</p>
                <p className="my-5">Contact Us</p>
            </div>

            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact</h4>
                <p className="my-5">Get in Touch with Us to Transform Your Fitness Journey!</p>
                <p>(333) 455</p>
            </div>

        </div>
  </footer>
)}

export default footer