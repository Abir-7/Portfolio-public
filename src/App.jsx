
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import './App.css'

import person from './assets/image.jpg'
import person2 from './assets/image2.jpg'


import { Link } from 'react-scroll'

import Tilt from 'react-parallax-tilt'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Particless from './Components/Particless'
import { useEffect, useState } from 'react'
// ..
AOS.init()
import Typewriter from 'react-ts-typewriter'
import { useGetAllProject } from './hooks/projects/project.hook'
import { useGetAllSkill } from './hooks/skills/skill.hook'
import Education from './Components/Education'
import ContactMe from './Components/ContactMe'
import MyProject from './Components/MyProject'


function App() {












  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        console.log(window.scrollY)
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

const {data:projects}=useGetAllProject()
const {data:skills}=useGetAllSkill()


  return (
    <div >
      <section name='intro' className='relative'>



        <div className='lg:min-h-[610px] xl:min-h-[650px]  flex items-center  z-50 mx-4'>
          <div className='text-white grid gap-0.5 md:grid-cols-2 justify-center items-center'>

            <div className='flex justify-center w-full text-center md:text-left' data-aos="fade-up">
              <div className='grid gap-6'>
                <h1 className='text-4xl font-semibold text-gray-300'>Hello, It&apos;s Me</h1>
                <h1 className='text-6xl font-bold text-gray-300'>Md. Tazwarul Islam Abir</h1>
                <h1 className='font-semibold text-4xl text-gray-300'>I&apos;m a <span className='text-white'> <Typewriter speed={300}
                  text={["MERN Stack Developer", "Front End Developer", "Web Developer", "ReactJs Developer", "Full Stack Developer"]} loop={true} /></span></h1>
                <a href='resume.pdf' download={'resume.pdf'} className='btn w-2/3 sm:w-2/3 xl:w-1/3 mx-auto md:mx-0 outline outline-offset-4  hover:outline-offset-2 transition-all duration-100 rounded-full bg-white bg-opacity-30 text-gray-300 p-2'>Download Resume <FaArrowDown></FaArrowDown></a>
              </div>
            </div>

            <div className='flex justify-center mt-10 md:mt-0  ' data-aos="fade-up">
              <div className='imageSection xl:w-4/6 lg:w-5/6 rounded-full  flex justify-center p-5 bg-white bg-opacity-30 shadow-2xl shadow-gray-700'>
                <img className='rounded-full ' src={person} alt="" />
              </div>
            </div>
            
          </div>
        </div>

        <div className='absolute top-10 -z-10'>
          <Particless></Particless>
        </div>
      </section>

      <section className='mb-10' name='about'>
        <Education person2={person2}></Education>
      </section>

      <section className='mb-10' name='skill'>
        <div>
          <div className='flex justify-center mb-10'>
            <h1 className='text-4xl font-semibold  text-gray-200 border-b-2 inline-block p-2 rounded-xl '>Skills & Tools</h1>
          </div>

          <div className='grid  lg:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-5  md:gap-10 mx-2'>
            {skills?.data?.map(skill => <Tilt key={skill?.skillName}>
              <div className='flex flex-col  items-center w-auto md:w-80 card bg-base-200 p-5' data-aos="fade-up">
                <div className='mb-2'><img width={'100px'} src={skill?.icon} alt="" /></div>
                <div className='text-gray-300'>{skill.skillName}</div>
               
              </div>
            </Tilt>)}
          </div>

        </div>
      </section>



      <section className='mb-10 ' name='project'>
        <MyProject  projects={projects}></MyProject>
      </section>

      <section className='mb-10' name='contact'>

        <div className='flex justify-center '>
          <h1 className='text-4xl font-semibold  text-gray-200 border-b-2 inline-block p-2 rounded-xl '>Contact Me</h1>
        </div>

        <ContactMe></ContactMe>
      </section>

      <div className={`bottom-10 fixed right-10 ${isButtonVisible ? 'visible' : 'hidden'}`}>
        <button className='bg-gray-700 p-3 rounded-full shadow-lg imageSection2 '><Link
          to="intro"
          smooth={true}
          offset={-50}
          duration={500}
        ><FaArrowUp></FaArrowUp></Link></button>
      </div>
    </div>
  )
}

export default App
