
import linkedin from '../assets/img/linkedIn_icon.png'
import facebook from '../assets/img/facebook_logo.png'
import instagram from '../assets/img/instagram_icon.png'
import tikTok from '../assets/img/tiktok_icon.png'
import hero from '../assets/img/deepa.jpg'
import CV from '../assets/cv/Deepa-Bhandari-CV.pdf'
import { DownloadIcon, MailIcon } from 'lucide-react'

const Hero = ({darkMode}) => {
  const socialIcons = [
    { Icon: linkedin , alt: "LinkedIn" },
    { Icon: facebook , alt: "Facebook" },
    { Icon: instagram, alt: "Instagram" },
    { Icon: tikTok, alt: "TikTok" },
  ];

const darkTheme = {
  textPrimary: "text-white",
  textSecondary: "text-gray-300",
  buttonSecondary: "text-white border-2 border-pink-500",
  hover: "hover:bg-pink-600",
  decorativeCircle: "bg-pink-500 opacity-10",
   button: "from-pink-500 to-fuchsia-500",
};

const lightTheme = {
  textPrimary: "text-gray-900",
  textSecondary: "text-gray-700",
  buttonSecondary: "text-gray-800 border-2 border-pink-500",
  hover: "hover:bg-pink-100 hover:text-white",
  decorativeCircle: "bg-pink-400 opacity-20",
   button: "from-pink-500 to-fuchsia-500",
};

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
      <section 
        id='home'
        data-aos = 'fade-up'
        data-aos-delat = '250'
        className='body-font z-10'>
          <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 
          lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14'>
            <div className='lg:w-1/2 w-full flex-col items-center lg:item-start text-center
            lg:text-left mb-12 lg:mb-0'>
              <div className='flex justify-center lg:justify-start 
              gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
                {socialIcons.map((social,index) => (
                  <a key={index}
                  href='#'
                  target='_blank'
                  data-aos-delay={`${400 + index *100}`}
                  className='transform hover:scale-110
                  transition-tranform duration-300'>
                    <img 
                    src={social.Icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10
                      object-container ${darkMode 
                        ? '' : 'filter brightness-90'}`}
                    ></img>

                  </a>
                ))}
              </div>
              <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
              data-aos='fade-up'
              data-aos-delay='500'>
                Hi, I'm Deepa Bhandari
              </h1>
              <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md
                sm:max-w-lg ${theme.textSecondary}`}
                data-aos='fade-up'
                data-aos-delay='600'>
                   Dedicated Science educator with over 5 years of teaching and tutoring
                    experience for primary and secondary students. Skilled in creating customized
                    lesson plans, using interactive teaching methods, and fostering a positive
                    learning environment. Proficient in physics, chemistry, and biology, with a BSc
                    and currently pursuing an MSc in Chemistry. Recognized for strong
                    communication, classroom management, and commitment to student success.
              </p>
              {/* Button */}
              <div className='w-full pt-4 sm:pt-6'>
                <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                data-aos='fade-up'
                data-aos-delay='700'>
                  <a href={CV} download className='w-full sm:w-auto'>
                    <button className={`w-full sm:w-auto
                    inline-flex items-center justify-center text-white
                    bg-gradient-to-r ${theme.button} border-0
                    py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                    rounded-full text-base sm:text-lg font-semibold transition-all
                    duration-300 transform`}>
                      <DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2'>
                      </DownloadIcon>
                       Download CV
                    </button>
                  </a>
                  <a href="#contact" className='w-full sm:w-auto'>
                    <button className={`w-full sm:w-auto
                    inline-flex items-center justify-center 
                     ${theme.buttonSecondary} border-0
                    py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                    rounded-full text-base sm:text-lg font-semibold transition-all
                    duration-300 transform`}>
                      <MailIcon className='w-5 h-4 sm:w-5 sm:h-5 mr-2'>
                      </MailIcon>
                      Contact Me
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Image */}
            <div
             className='lg:2-1/2 w-full max-w-md lg:max-w-lg mt-8
             lg:mt-0 flex justify-center'
             data-aos='fade-left'
             data-aos-delay='400'>
              <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
              <div className='relative overflow-hidden'>
                <img
                src={hero}
                alt="deepa Image"
                className='w-full h-auto object-cover transform hover:scale-105 
                transition-transform duration-500 rounded-3xl'></img>

              </div>

              </div>

            </div>
          </div>
      </section>

    </div>
  );
};

export default Hero;
