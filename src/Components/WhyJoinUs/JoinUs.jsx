import { GiArchiveResearch } from "react-icons/gi";
import images from "../../assets/images";
import { motion } from "framer-motion";
import { AiOutlineExperiment, AiOutlineFire } from "react-icons/ai";

const JoinUs = () => {
    return (
        <section style={{ backgroundImage: `url(${images?.image?.bg2})` }} className="bg-cover bg-center bg-no-repeat relative py-20 md:py-40">
            <div className="container mx-auto px-2 md:px-5 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
                    <motion.div
                        className="info lg:pl-40"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h5 className="text-[#854ec8] inter">Why Join Us</h5>
                        <h1 className="text-[#1b2a52] text-2xl md:text-5xl font-bold space">Join Our Community</h1>
                        <p className="inter text-[#79859b] px-1">Join the Presidency University AI Club to explore the world of AI, Machine Learning, and Data Science. Learn, collaborate, and innovate with us!</p>

                        <ul className="pl-6 list-[square] py-4">
                            <li className="flex items-start py-1">
                                <img
                                    src={images?.image?.check}
                                    alt="check icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <div>
                                    <h5 className="text-[#1b2a52] font-semibold">Learn AI from Scratch</h5>
                                    <p className="text-[#1b2a52]">Get started with AI and Machine Learning with our beginner-friendly resources and workshops.</p>
                                </div>
                            </li>
                            <li className="flex items-start py-1">
                                <img
                                    src={images?.image?.check}
                                    alt="check icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <div>
                                    <h5 className="text-[#1b2a52] font-semibold">Collaborate with Peers</h5>
                                    <p className="text-[#1b2a52]">Work on real-world projects, participate in hackathons, and collaborate with like-minded peers.</p>
                                </div>
                            </li>
                            <li className="flex items-start py-1">
                                <img
                                    src={images?.image?.check}
                                    alt="check icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <div>
                                    <h5 className="text-[#1b2a52] font-semibold">Innovate and Build</h5>
                                    <p className="text-[#1b2a52]">Innovate with AI, build AI-powered solutions, and contribute to the AI community.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="px-20 md:px-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <img src={images?.image?.ai} alt="AI Image" />
                    </motion.div>
                </div>

                <div className="flex flex-wrap items-center justify-center mt-10 gap-5">
                    <div className="flex items-center gap-6 p-4 bg-white rounded-full w-full sm:w-auto">
                        <div className="p-4 bg-[#1b2a52] rounded-full">
                            <GiArchiveResearch className="text-3xl text-white"/>
                        </div>
                        <div>
                            <h1 className="text-[#1b2a52] space">Recharge</h1>
                            <p className="inter">We conduct advanced AI and <br /> machine learning research.</p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img src={images?.image?.line} alt="line" />
                    </div>
                    <div className="flex items-center gap-6 p-4 bg-white rounded-full w-full sm:w-auto">
                        <div className="p-4 bg-[#1b2a52] rounded-full">
                            <AiOutlineExperiment className="text-3xl text-white"/>
                        </div>
                        <div>
                            <h1 className="text-[#1b2a52] space">Workshops</h1>
                            <p className="inter">We organize workshops to  <br /> teach AI concepts and tools.</p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img src={images?.image?.line} alt="line" />
                    </div>
                    <div className="flex items-center gap-6 p-4 bg-white rounded-full w-full sm:w-auto">
                        <div className="p-4 bg-[#1b2a52] rounded-full">
                            <AiOutlineFire className="text-3xl text-white"/>
                        </div>
                        <div>
                            <h1 className="text-[#1b2a52] space">Competitions</h1>
                            <p className="inter">We organize hackathons and <br /> coding challenges.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shapes with Scroll Animation */}
            <motion.img src={images?.image?.shape1} alt="shape" className="absolute top-20 left-24 lg:top-[10%] lg:left-[10%] hidden md:block" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1 }} />
            <motion.img src={images?.image?.shape2} alt="shape" className="absolute top-80 left-[70%] lg:left-[50%] hidden md:block" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} transition={{ duration: 1, delay: 0.2 }} />
            <motion.img src={images?.image?.shape3} alt="shape" className="absolute top-[40rem] left-[10rem] lg:top-[36rem] lg:left-80 hidden md:block" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 1, delay: 0.4 }} />
            <motion.img src={images?.image?.shape4} alt="shape" className="absolute right-[10%] lg:bottom-[80%] lg:right-[20%] hidden md:block" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1, delay: 0.6 }} />
            <motion.img src={images?.image?.shape6} alt="shape" className="absolute right-[10%] lg:bottom-[80%] lg:right-[50%] hidden md:block" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1, delay: 0.6 }} />
            <motion.img src={images?.image?.shape5} alt="shape" className="absolute bottom-0 right-0" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0.8 }} />
        </section>
    );
};

export default JoinUs;
