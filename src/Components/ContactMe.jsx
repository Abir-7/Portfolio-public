import { useRef, useState } from 'react';
import { HiRocketLaunch } from 'react-icons/hi2';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const ContactMe = () => {
  const form = useRef();
  const [msg, setMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setMsg('');
    emailjs
      .sendForm(
        import.meta.env.VITE_Email_serviceId,
        import.meta.env.VITE_Email_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_Email_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text) {
            setMsg('Message Sent');
            toast.success('Message Sent.');
          }
        },
        () => {
          setMsg('Message Limit is Over');
        }
      );
  };

  return (
    <div className=" text-white">
      <ToastContainer />

      <div className="min-h-[50vh] py-12 container mx-auto p-5">
        <div className="items-center grid md:grid-cols-2 gap-10 space-y-10 md:space-y-0">
          {/* Form Section */}
          <div className="w-full" data-aos="fade-up">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-base-200 bg-opacity-10 p-5 rounded-lg shadow-md"
            >
              <h1 className="text-3xl md:text-4xl font-semibold mb-5">How Can We Help</h1>
              <div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="text-gray-300">Name</span>
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="text-gray-300">Email</span>
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="text-gray-300">Message</span>
                  </label>
                  <textarea
                    required
                    name="message"
                    placeholder="Message"
                    className="textarea textarea-bordered w-full"
                  ></textarea>
                </div>
                <div className="mt-6 flex flex-col items-center">
                  <button className="btn w-full md:w-auto bg-white bg-opacity-30 text-white hover:bg-opacity-40 transition-all rounded-full px-4 py-2 flex items-center justify-center">
                    <span>Send Message</span>
                    <HiRocketLaunch className="ml-2" />
                  </button>
                  <p
                    className={`mt-3 ${
                      msg === 'Message Sent' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {msg}
                  </p>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-10" data-aos="fade-up">
            <div>
              <h1 className="text-3xl font-semibold border-l-8 border-white pl-5">
                Contact Info
              </h1>
            </div>
            <div className="grid gap-5 md:gap-10 md:grid-cols-2">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <Mail className="text-xl" />
                  <a href="mailto:md.tazwarul.islam.07@gmail.com" className="link-hover">
                    md.tazwarul.islam.07@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-xl" />
                  <span>+8801795377643</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-xl" />
                  <address>
                    35/3 Maskanda, Mymensingh <br />
                    Bangladesh
                  </address>
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <FaFacebookSquare className="text-xl" />
                  <a href="https://www.facebook.com/tazwarul.islam" className="link-hover">
                    Facebook
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FaGithubSquare className="text-xl" />
                  <a href="https://github.com/Abir-7" className="link-hover">
                    GitHub
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-xl" />
                  <a href="https://www.linkedin.com/in/md-tazwarul-islam-abir-5762b7214/" className="link-hover">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
