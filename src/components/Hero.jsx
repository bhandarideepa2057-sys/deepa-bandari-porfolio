
import linkedin from '../assets/img/linkedIn_icon.png'
import facebook from '../assets/img/facebook_logo.png'
import instagram from '../assets/img/instagram_icon.png'
import tikTok from '../assets/img/tiktok_icon.png'

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
};

const lightTheme = {
  textPrimary: "text-gray-900",
  textSecondary: "text-gray-700",
  buttonSecondary: "text-gray-800 border-2 border-pink-500",
  hover: "hover:bg-pink-100 hover:text-white",
  decorativeCircle: "bg-pink-400 opacity-20",
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
          lg:py-32 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-14'>
            <div className='lg:w-1/2 w-full flex-col items-center lg:item-start text-center
            lg:test-left mb-12 lg:mb-0'>
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
              <h1 className={`title-font text-3xl sm:text-4xl lg:test-5xl mb-4 font-bold ${theme.textPrimary}`}
              data-aos='fade-up'
              data-aos-delay='500'>
                Hi, I'm Deepa Bhandari
              </h1>
              <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md
                sm:max-w-lg ${theme.textSecondary}`}
                data-aos='fade-up'
                data-aos-delay='600'>
                  Let me explain how can i 

              </p>
            </div>
          </div>
      </section>

    </div>
  );
};

export default Hero;
