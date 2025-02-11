import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Titanic - ML from Disaster",
    year: "2024",
    description:
      "We hosted a high-level AI hackathon, drawing talented participants from across the university. This event established us as a hub for AI-driven innovation and problem-solving.",
  },
  {
    title: "Expanding Our Reach",
    year: "2024",
    description:
      "Our membership grew to 50+ active students, making us one of the most vibrant student organizations at Presidency University.",
  },
  {
    title: "The Beginning",
    year: "2022",
    description:
      "With just 10 passionate members, we laid the foundation of a club dedicated to AI learning and research.",
  },
];

const Timeline = () => {
  return (
    <ol className="relative flex flex-col sm:flex-row sm:items-center">
      {timelineData.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative mb-6 sm:mb-0"
        >
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.year}
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
};

export default Timeline;
