import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Mail } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const founders = [
  {
    id: 1,
    name: "Nazmul Hasan",
    email: "hnazmul@pu.edu.bd",
    position: "Moderator",
    image: "https://i.ibb.co.com/ZRfVgQFy/Nazmul-Hasan.png",
  },
  {
    id: 2,
    name: "Prof. Dr. Shahidul Islam Khan",
    email: "Shahid@pu.edu.bd",
    position: "Advisor",
    image: "https://i.ibb.co.com/k2HT13bh/Shahidul-Islam-Khan.jpg",
  },
];

const teamMembers = [
  {
    id: 3,
    name: "Md Younus Akon",
    email: "younusakon170@gmail.com",
    position: "President",
    image: "https://i.ibb.co.com/0jgxWdMx/aliul.jpg",
  },
  {
    id: 4,
    name: "Fardin Hasan Mayen",
    email: "fardinhasan.mayen@gmail.com",
    position: "Vice President",
    image: "https://i.ibb.co.com/C3T64gsS/fardinhasan.jpg",
  },
  {
    id: 5,
    name: "Israt Jahan Munmun",
    email: "201099038@student.presidency.edu.bd",
    position: "Vice President",
    image: "https://i.ibb.co.com/0jYk7XmV/girl.png",
  },
  {
    id: 6,
    name: "Abdullah Al-Amin",
    email: "203034038@student.presidency.edu.bd",
    position: "General Secretary",
    image: "https://i.ibb.co.com/pvVW58kq/boy.png",
  },
  {
    id: 7,
    name: "Mir Sabir Bin Abdullah",
    email: "193102038@student.presidency.edu.bd",
    position: "Joint-Secretary",
    image: "https://i.ibb.co.com/pvVW58kq/boy.png",
  },
  {
    id: 8,
    name: "Sadia Jannat Happy",
    email: "251400038@student.presidency.edu.bd",
    position: "Treasurer",
    image: "https://i.ibb.co.com/Kxs6X82z/sadiajannat.jpg",
  },
  {
    id: 9,
    name: "Tousif Ahamed",
    email: "192254038@student.presidency.edu.bd",
    position: "Deputy Treasurer",
    image: "https://i.ibb.co.com/pvVW58kq/boy.png",
  },
  {
    id: 10,
    name: "Tanha Tabassum Natasha",
    email: "203121038@student.presidency.edu.bd",
    position: "Organizing Secretary",
    image: "https://i.ibb.co.com/0jYk7XmV/girl.png",
  },
  {
    id: 11,
    name: "Shahiduzzaman",
    email: "222060038@student.presidency.edu.bd",
    position: "Event Management Secretary",
    image: "https://i.ibb.co.com/gMh5qJNp/shahiduzzaman.jpg",
  },
  {
    id: 12,
    name: "Rakibul Islam Eshty",
    email: "222218038@student.presidency.edu.bd",
    position: "Public Relation Secretary",
    image: "https://i.ibb.co.com/LDhXfB0S/esthy.jpg",
  },
  {
    id: 13,
    name: "Tabassum Islam Arpa",
    email: "221311038@student.presidency.edu.bd",
    position: "Office Secretary",
    image: "https://i.ibb.co.com/0jYk7XmV/girl.png",
  },
  {
    id: 14,
    name: "Md Sohel",
    email: "231440038@student.presidency.edu.bd",
    position: "Communication Secretary",
    image: "https://i.ibb.co.com/XfGfs7LV/sohel.jpg",
  },
  {
    id: 15,
    name: "Fabiha Mukarrama Binte Mannan",
    email: "232534038@student.presidency.edu.bd",
    position: "Deputy Communication Secretary",
    image: "https://i.ibb.co.com/20JVf5mQ/fabiha.jpg",
  },
  {
    id: 16,
    name: "Morium",
    email: "231239038@student.presidency.edu.bd",
    position: "Head of Promotion",
    image: "https://i.ibb.co.com/NdW1rDKg/moriom.jpg",
  },
  {
    id: 17,
    name: "Tasnim Khanam",
    email: "232409040@student.presidency.edu.bd",
    position: "Head of Recruitment",
    image: "https://i.ibb.co.com/B2HtmWCS/tasnim.jpg",
  },
];


const MemberCard = ({ member }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 group">
    <img
      src={member.image || "/placeholder.svg"}
      alt={member.name}
      className="w-full h-64 object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    {/* Position label (always visible, now at top-left) */}
    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-800">
      {member.position}
    </div>

    {/* Info revealed on hover */}
    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
      <div className="flex items-center text-sm">
        <Mail className="w-4 h-4 mr-2" />
        <span>{member.email}</span>
      </div>
    </div>
  </div>
);

MemberCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  isFounder: PropTypes.bool,
};

const TeamSection = () => {
  return (
    <section id="our_team" className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-5">
      {/* Small Title Animation */}
      <motion.h5
        className="text-[#854ec8] inter text-center"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Team Members
      </motion.h5>
      <motion.h2
        className="text-[#1b2a52] text-center text-4xl/[50px] md:text-6xl/[80px] font-bold space lin"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Meet Our AI Club Team
      </motion.h2>

      {/* Founders */}
      <div className="my-16">
        <div className="flex flex-wrap justify-center gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full sm:w-80"
            >
              <MemberCard member={founder} isFounder={true} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Club Team Members Slider */}
      <div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full max-w-7xl mx-auto"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <MemberCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;
