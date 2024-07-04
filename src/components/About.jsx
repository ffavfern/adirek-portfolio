
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGithub, faDribbble } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <img src="https://media.licdn.com/dms/image/C5603AQGjMhFS3J5w5g/profile-displayphoto-shrink_200_200/0/1537259096283?e=2147483647&v=beta&t=A_KJT2fmloreJ9cwKbtqi0uhZi9CjAvSjosUMISSTRE" alt="Surprised man" className="rounded-full w-80 h-80 mx-auto lg:mx-0" />
        </div>
        <div className="lg:w-1/2 lg:pl-10 text-center lg:text-left">
          <h3 className="text-blue-500 text-sm font-bold uppercase mb-2">About Me</h3>
          <h2 className="text-3xl font-bold mb-4">More Than 10+ Years Chinese Experienced</h2>
          <p className="text-gray-600 mb-4">
            I am a highly experienced Chinese teacher based in Thailand with over a decade of teaching expertise. My passion lies in imparting knowledge and fostering a deep understanding of the Chinese language among my students. Over the years, I have developed innovative teaching methods that cater to diverse learning styles, ensuring that each student achieves their full potential.
          </p>
          <div className="mb-4">
            <span className="block text-gray-800 font-bold">Name:</span>
            <span className="block text-gray-600">Adirek Nuansri</span>
          </div>
          <div className="mb-4">
            <span className="block text-gray-800 font-bold">Email:</span>
            <span className="block text-gray-600">Adirek.n2020@gmail.com</span>
          </div>
          <div className="flex flex-col lg:flex-row items-center mb-8">
            <div className="mb-4 lg:mb-0 lg:mr-8">
              <span className="block text-gray-800 font-bold">Location:</span>
              <span className="block text-gray-600">Chiang Mai, Thailand</span>
            </div>
          </div>
          <a href="https://drive.google.com/file/d/1nOr2V0OqJbMxUmQRy1PU33tPAUHmWTBR/preview" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Download CV</a>
          <div className="flex justify-center lg:justify-start mt-8 items-center">
            <span className="text-gray-600 mr-4">Follow me</span>
            <div className="flex justify-center lg:justify-start ">
              <a href="#" className="text-gray-600 mr-4 hover:text-blue-500">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-gray-600 mr-4 hover:text-blue-500">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-gray-600 mr-4 hover:text-blue-500">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <FontAwesomeIcon icon={faDribbble} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
