import images from "../assets/images";
import { motion } from "framer-motion";
import useSEO from "../Hooks/useSEO";

const Home = () => {

    useSEO({
        title: "Presidency University AI Club - Leading Innovation in AI",
        description:
          "Welcome to Presidency University AI Club. Explore our innovative projects, research, and events in artificial intelligence. Join us to advance AI and be a part of our vibrant community.",
        keywords:
          "Presidency University, AI Club, Artificial Intelligence, AI Research, Innovation, University Club, AI Projects, puaic, Presidency University AI Club",
        canonicalUrl: "https://pubaic.netlify.app/", // Replace with your actual domain URL
        ogType: "website",
        ogImage: "../assets/Images/logo.png", // Replace with your actual Open Graph image URL
        twitterHandle: "@PresUniAIClub", // Replace with your club's Twitter handle if available
        additionalMetaTags: {
          author: "Presidency University AI Club",
          robots: "index, follow",
        },
        additionalLinkTags: {
          icon: "/public/favicon.ico", // Replace with your favicon URL
        },
      });


    return (
        <>
            {/* Animated Background Section */}
            <motion.section   className="bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${images?.image?.homeBg})` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }}>
                <div className="container mx-auto py-24 md:py-40">
                    {/* Small Title Animation */}
                    <motion.h5   className="text-[#854ec8] inter text-center" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        👋 Hey there! That is Presidency University AI Club
                    </motion.h5>

                    <div className="flex flex-col items-center justify-center space-y-8">
                        {/* Animated Heading */}
                        <motion.h1    className="text-[#1b2a52] text-center text-4xl/[50px] md:text-6xl/[80px] font-bold space lin"  initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 1, delay: 0.3 }} >
                            Explore the Future with <br className="hidden md:block"/> 
                            PU <span className="bg-[#854ec8] text-white px-4 border rounded-full">AI Club</span>
                        </motion.h1>

                        {/* Animated Paragraph */}
                        <motion.p   className="inter text-[#1b2a52] text-center px-1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} >
                            The Presidency University AI Club is a hub for students to explore AI, Machine Learning,<br/>
                            and Data Science. Join us to learn, collaborate, and innovate! 🚀
                        </motion.p>

                        {/* Floating Robot Image */}
                        <motion.img   src={images?.image?.form_shape}   alt="robot" initial={{ y: 10, opacity: 1 }} animate={{ y: -10, opacity: 1 }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut" }} />
                    </div>

                    {/* Shapes with Scroll Animation */}
                    <motion.img  src={images?.image?.shape1}  alt="shape"  className="absolute top-20 left-24 lg:top-44 lg:left-80 hidden md:block" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1 }} />

                    <motion.img  src={images?.image?.shape2}  alt="shape"  className="absolute top-80 left-[70%] lg:left-[25%] hidden md:block" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} transition={{ duration: 1, delay: 0.2 }} />

                    <motion.img  src={images?.image?.shape3}  alt="shape"  className="absolute top-[35rem] left-[10rem] lg:top-[30rem] lg:left-80 hidden md:block" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 1, delay: 0.4 }} />

                    <motion.img  src={images?.image?.shape4}  alt="shape"  className="absolute right-[10%] lg:bottom-60 lg:right-80 hidden md:block" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1, delay: 0.6 }} />

                    <motion.img  src={images?.image?.shape5}  alt="shape"  className="absolute bottom-0 right-0 " whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0.8 }}/>
                </div>
            </motion.section>
        </>
    );
};

export default Home;
