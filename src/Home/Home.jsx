import images from "../assets/images";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div>
            {/* Animated Background Section */}
            <motion.section 
                className="bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${images?.image?.homeBg})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <div className="container mx-auto py-24 md:py-40">
                    {/* Small Title Animation */}
                    <motion.h5 
                        className="text-[#854ec8] inter text-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        👋 Hey there! We&apos;re Doodle
                    </motion.h5>

                    <div className="flex flex-col items-center justify-center space-y-8">
                        {/* Animated Heading */}
                        <motion.h1 
                            className="text-[#1b2a52] text-center text-4xl/[50px] md:text-6xl/[80px] font-bold space lin"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            Explore the Future with <br className="hidden md:block"/> 
                            PU <span className="bg-[#854ec8] text-white px-4 border rounded-full">AI Club</span>
                        </motion.h1>

                        {/* Animated Paragraph */}
                        <motion.p 
                            className="inter text-[#1b2a52] text-center px-1"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            The Presidency University AI Club is a hub for students to explore AI, Machine Learning,<br/>
                            and Data Science. Join us to learn, collaborate, and innovate! 🚀
                        </motion.p>

                        {/* Floating Robot Image */}
                        <motion.img 
                            src={images?.image?.form_shape} 
                            alt="robot"
                            initial={{ y: 10, opacity: 1 }}
                            animate={{ y: -10, opacity: 1 }}
                            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Home;
