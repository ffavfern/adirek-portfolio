import { ReactTyped } from "react-typed";
import profile from '../assets/img/profile.png';

const Hero = () => {
  return (
    <section id="home" className="bg-gray-100 pt-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Hello Mate 👋</h2>
          <h1 className="text-5xl font-bold mb-4">I'm Adirek Nuansri</h1>
          <h2 className="text-4xl font-bold mb-4 text-blue-500">
            <ReactTyped
              strings={['a Chinese Teacher']}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h2>
          <p className="text-gray-600 mb-8">Hi ! Everyone I'm a Chinese teacher. Welcome to my experience. I'm a great place for you to tell a story and let you know a little more about me.</p>
          <div className="flex justify-center lg:justify-start">
            <button className="btn btn-primary mr-4">Book a Call</button>
            <a href="https://drive.google.com/file/d/1nOr2V0OqJbMxUmQRy1PU33tPAUHmWTBR/preview" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Download CV</a>
            
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <img src={profile} alt="profile"  />
        </div>
      </div>
    </section>
  );
};

export default Hero;
