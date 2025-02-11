import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.section 
        id="about"
            className="container mx-auto py-20 md:py-40 bg-cover bg-center bg-no-repeat relative px-2 md:px-5 lg:px-0"
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: false }} // When scrolling up or down, it will trigger again
        >
            <motion.h5 
                className="text-[#854ec8] inter text-left md:text-center"
                initial={{ opacity: 0, y: -10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: false }}
            >
                About Us
            </motion.h5>

            <motion.h1 
                className="text-[#1b2a52] space text-left md:text-center text-2xl/[50px] md:text-5xl/[80px] font-bold space lin"
                initial={{ scale: 0.8, opacity: 0 }} 
                whileInView={{ scale: 1, opacity: 1 }} 
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Our Journey Since 2022
            </motion.h1>

            <motion.p 
                className="inter text-left md:text-center md:px-10 lg:px-[20%] text-[#1b2a52] px-1"
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                viewport={{ once: false }}
            >
                Founded in 2022 🚀, the Presidency University AI Club started as a small initiative with a big dream—to empower students with AI knowledge 🤖 and innovation 💡.<br className="block md:hidden"/><br className="block md:hidden"/>
                Over the years, we&apos;ve transformed into a thriving community, fostering collaboration 🤝, learning 📚, and groundbreaking AI projects 🧠.
            </motion.p>

            <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
                <motion.div 
                    className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight space text-[#1b2a52] dark:text-white">
                        Our Vision
                    </h5>
                    <p className="mb-3 inter font-normal text-gray-500 dark:text-gray-400">
                        We aim to build a community of AI enthusiasts who not only learn but also apply AI to solve real-world challenges. Our vision is to inspire the next generation of AI leaders, researchers, and innovators who will drive technological advancements and reshape industries.
                    </p>
                </motion.div>

                <motion.div 
                    className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#1b2a52] dark:text-white space">
                        Join Us
                    </h5>
                    <p className="mb-3 inter font-normal text-gray-500 dark:text-gray-400">
                        Be a part of a dynamic community where curiosity meets innovation. Whether you&apos;re a beginner or an expert, the Presidency University AI Club welcomes all who share a passion for AI. Together, let&apos;s explore, learn, and create the future!
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;
