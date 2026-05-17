
import { useState } from 'react'
import linkedin from '../assets/img/linkedIn_icon.png'
import facebook from '../assets/img/facebook_logo.png'
import instagram from '../assets/img/instagram_icon.png'
import tikTok from '../assets/img/tiktok_icon.png'
import hero from '../assets/img/deepa.jpg'
import CV from '../assets/cv/Deepa-Bhandari-CV.pdf'
import { DownloadIcon, MailIcon } from 'lucide-react'

const Hero = ({darkMode}) => {
  const [activeProfileTab, setActiveProfileTab] = useState('teacher')

  const socialIcons = [
    { Icon: linkedin , alt: "LinkedIn" },
    { Icon: facebook , alt: "Facebook" },
    { Icon: instagram, alt: "Instagram" },
    { Icon: tikTok, alt: "TikTok" },
  ];

  const portfolioTabs = [
    {
      id: 'teacher',
      label: 'Chemistry Teacher',
      badge: 'Professional Profile',
      title: 'Secondary Chemistry Educator',
      summary: 'Designs exam-focused and curiosity-driven chemistry lessons with strong practical demonstrations and measurable student progress.',
      points: [
        '5+ years teaching science to middle and secondary students.',
        'Builds interactive lesson plans for theory, numericals, and lab work.',
        'Supports board exam preparation with weekly assessments and feedback.'
      ]
    },
    {
      id: 'student',
      label: 'MSc Chemistry Student',
      badge: 'Academic Profile',
      title: 'Master\'s-Level Chemistry Learner',
      summary: 'Combines advanced chemistry coursework with modern pedagogy to connect higher-level concepts to classroom-ready explanations.',
      points: [
        'Currently pursuing MSc in Chemistry with focus on analytical and physical chemistry.',
        'Translates postgraduate concepts into student-friendly teaching examples.',
        'Actively developing research-informed teaching methods for better outcomes.'
      ]
    }
  ]

  const activeTabContent = portfolioTabs.find((tab) => tab.id === activeProfileTab)

const darkTheme = {
  textPrimary: "text-white",
  textSecondary: "text-gray-300",
  buttonSecondary: "text-white border-2 border-pink-500",
  hover: "hover:bg-pink-600",
  decorativeCircle: "bg-pink-500 opacity-10",
   button: "from-pink-500 to-fuchsia-500",
   tabContainer: "bg-slate-900/55 border border-slate-700/70",
   tabButton: "text-slate-300 hover:text-white hover:bg-slate-800/80",
   tabButtonActive: "text-white bg-gradient-to-r from-pink-500 to-fuchsia-500 shadow-lg",
   profileCard: "bg-slate-900/70 border border-slate-700/80 text-slate-100",
   profileTag: "bg-pink-500/20 text-pink-200 border border-pink-300/30",
   profilePointBullet: "bg-pink-400"
};

const lightTheme = {
  textPrimary: "text-gray-900",
  textSecondary: "text-gray-700",
  buttonSecondary: "text-gray-800 border-2 border-pink-500",
  hover: "hover:bg-pink-100 hover:text-white",
  decorativeCircle: "bg-pink-400 opacity-20",
   button: "from-pink-500 to-fuchsia-500",
   tabContainer: "bg-white/75 border border-pink-100",
   tabButton: "text-gray-600 hover:text-gray-900 hover:bg-pink-50",
   tabButtonActive: "text-white bg-gradient-to-r from-pink-500 to-fuchsia-500 shadow-lg",
   profileCard: "bg-white/85 border border-pink-100 text-gray-800",
   profileTag: "bg-pink-100 text-pink-700 border border-pink-200",
   profilePointBullet: "bg-pink-500"
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

              <div
                id='chemistry-portfolio'
                className='w-full mt-8'
                data-aos='fade-up'
                data-aos-delay='760'
              >
                <div className={`rounded-2xl p-2 ${theme.tabContainer}`}>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    {portfolioTabs.map((tab) => {
                      const isActive = activeProfileTab === tab.id
                      return (
                        <button
                          key={tab.id}
                          type='button'
                          onClick={() => setActiveProfileTab(tab.id)}
                          className={`rounded-xl px-4 py-3 text-sm sm:text-base font-semibold transition-all duration-300 ${
                            isActive ? theme.tabButtonActive : theme.tabButton
                          }`}
                        >
                          {tab.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className={`mt-4 rounded-2xl p-5 sm:p-6 backdrop-blur-sm ${theme.profileCard}`}>
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${theme.profileTag}`}>
                    {activeTabContent.badge}
                  </span>
                  <h2 className='mt-3 text-xl sm:text-2xl font-bold'>
                    {activeTabContent.title}
                  </h2>
                  <p className='mt-2 text-sm sm:text-base leading-relaxed'>
                    {activeTabContent.summary}
                  </p>
                  <ul className='mt-4 space-y-3'>
                    {activeTabContent.points.map((point) => (
                      <li key={point} className='flex items-start gap-3'>
                        <span className={`mt-2 h-2 w-2 rounded-full ${theme.profilePointBullet}`}></span>
                        <span className='text-sm sm:text-base leading-relaxed'>{point}</span>
                      </li>
                    ))}
                  </ul>
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
