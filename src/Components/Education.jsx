
import Tilt from 'react-parallax-tilt'
import PropTypes from 'prop-types';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()

const Education = ({person2}) => {
    return (
        <div>
        <div className='flex justify-center mb-10'>
          <h1 className='text-4xl font-semibold  text-gray-200 border-b-2 inline-block p-2 rounded-xl '>About Me</h1>
        </div>

        <div className='grid lg:grid-cols-2 gap-4 items-center mx-3'>

          <div className='grid items-center mb-10 md:mb-0'>
            <div className='flex justify-center ' data-aos="fade-up">
             <Tilt> <img className=" mas mask-hexagon-2 " src={person2} width={'300px'} /></Tilt>
            </div>
            <div className=' text-lg  text-justify text-gray-300 mx-3' data-aos="fade-up">
              I am Md. Tazwarul Islam Abir, Passionate and motivated junior MERN stack developer with a strong desire to learn and grow in a dynamic and collaborative environment. Committed to delivering high-quality code and exceptional user experiences, I aim to utilize my skills in React, Express, MongoDB, and Node.js to drive impactful results and contribute to the success of the team.
            </div>
          </div>

          <div className=' grid gap-4'>

            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-200 hover:bg-base-300 transition-all hover:-translate-y-1 duration-500" data-aos="fade-up">
              <div className="collapse-title text-xl font-medium text-gray-300">
                Bachelor of Science (B.Sc):
              </div>
              <div className="collapse-content">
                <p>Institute: <span className='text-gray-300'>College of Business Science & Technology (National University Affiliated),
                  Mymensingh.</span></p>
                <p>Subject: <span className='text-gray-300'>Computer Science & Engineering (CSE)</span></p>
                <p> CGPA: <span className='text-gray-300'>3.06</span></p>
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-200 hover:bg-base-300 transition-all hover:-translate-y-1 duration-500" data-aos="fade-up">
              <div className="collapse-title text-gray-300 text-xl font-medium">
                Higher Secondary School Certificate (HSC):
              </div>
              <div className="collapse-content">
                <p>Institute: <span className='text-gray-300'>Royal Media College,Mymensingh-RMC</span></p>
                <p>Subject:  <span className='text-gray-300'>Science</span></p>
                <p> GPA: <span className='text-gray-300'>4.42</span></p>
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-200 hover:bg-base-300 transition-all hover:-translate-y-1 duration-500" data-aos="fade-up">
              <div className="collapse-title text-xl text-gray-300 font-medium">
                Secondary School certificate (SSC)
              </div>
              <div className="collapse-content">
                <p>Institute: <span className='text-gray-300'>Mymensingh Laboratory High School</span></p>
                <p>Subject: <span className='text-gray-300'>Science</span></p>
                <p>GPA: <span className='text-gray-300'>3.81</span></p>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
};
Education.propTypes = {
  person2: PropTypes.string.isRequired,
};


export default Education;