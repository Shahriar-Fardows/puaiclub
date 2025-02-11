import { motion } from "motion/react";
import RegistrationForm from "./RegistrationForm";

const JoinFrom = () => {
    return (
        <section>
            <motion.h5 className="text-[#854ec8] inter text-center" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                Join Us
            </motion.h5>
            <motion.h1 className="text-[#1b2a52] text-center text-4xl/[50px] md:text-5xl/[80px] font-bold space lin" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} >
                Ready to Get Started? Join Us and<br /> Shape Your Future Today!
            </motion.h1>
            <div>
                <h1 className="text-[#1b2a52] text-center text-2xl/[50px] md:text-4xl/[80px] font-bold space lin">Only 50TK Registration Fee !</h1>

                <RegistrationForm/>
            </div>
        </section>
    );
};

export default JoinFrom;