import { slideInFromLeft, textVariant } from '@/utils/motion';
import {motion} from 'framer-motion';

  const themesData = [
    {
      id: 1,
      name: "AI AND ML",
      prize: "10,000 INR",
      description:
        "Create innovative applications that leverage machine learning algorithms to solve complex problems, natural language and computer vision.",
      
    },
    {
      id: 2,
      name: "GAME DEVELOPMENT",
      prize: "10,000 INR",
      description:
        "Develop immersive and engaging games, leveraging cutting-edge game engines and technologies to create captivating gameplay experiences.",
     
    },
    {
      id: 3,
      name: "I-O-T",
      prize: "10,000 INR",
      description:
        "Build connected devices and systems that collect and analyze data in real-time, creating innovative solutions that improve efficiency.",
    },
    {
      id: 4,
      name: "WEB3 AND FIN-TECH",
      prize: "10,000 INR",
      description:
        "Build decentralized applications (dApps) that run on the blockchain, smart contracts to facilitate secure and transparent transactions.",
    },
    {
      id: 5,
      name: "AR / VR",
      prize: "10,000 INR",
      description:
        "Use augmented and virtual reality technologies to create innovative applications, entertainment experiences, and marketing campaigns.",
    },
    {
      id: 6,
      name: "BEST WOMEN TECH",
      prize: "15,000 INR",
      description:
        "Make Best use of Technology to solve real world problems and make a difference. which women can relate to.",
    },
  ];
  
  export const VerticalLine = () => {
    return (
      <section id="about" className="min-h-screen w-full px-0 py-16 md:px-10">
        <motion.div 
        variants={textVariant(1.3)}
        className="mb-20 text-center text-4xl sm:text-5xl sourcecode bg-clip-text text-transparent Welcome-text uppercase">
          Themes and Prizes
        </motion.div>
        <div
        className='h-[50px] w-full'></div>
        <motion.div 
        variants={slideInFromLeft(1.3)}
        className="grid grid-cols-1 gap-10 ml-20 mr-20 px-4 md:grid-cols-2 lg:grid-cols-3 ">
          {themesData.map((theme) => (
            <div
              key={theme.id}
              className="z-10 flex flex-col items-center justify-evenly space-y-4 rounded-[30px]  border-[#7042f861] bg-gray-950 border p-8"
            >
              <motion.div
              variants={slideInFromLeft(1.3)}
              className="text-center Welcome-text text-2xl font-semibold text-gray-200">
                {theme.name}
              </motion.div>
              <div className="text-center Welcome-text text-2xl font-semibold text-gray-400 sourcecode">
                {theme.prize}
              </div>
              <div className="text-center text-gray-300 cursive text-2xl">{theme.description}</div>
            </div>
          ))}
        </motion.div>
      </section>
    );
  };
