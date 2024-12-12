import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode, faPaintBrush, faFilm} from '@fortawesome/free-solid-svg-icons';
import BtnPrimary from '../components/BtnPrimary';
import BtnSecondary from '../components/BtnSecondary';
import Lottie from 'lottie-react';
import codingAnimation from "../assets/animations/codingAnimation.json"

const Home = () => {
    return (
      <>
        {/* HERO SECTION */}
        <section className="flex flex-col justify-center items-center gap-4 p-2 mt-20">
          <h1 className="text-3xl md:text-4xl text-clr text-balance text-center poppins-bold">
            Where Creativity Meets Digital Solutions
          </h1>
          <p className="text-lg md:text-xl text-clr text-balance roboto-light text-center">
            Bringing your visions to life with cutting-edge web development,
            innovative product design, and captivating storytelling.
          </p>
          <div className="flex gap-4">
            <BtnPrimary label="Explore My Work" />
            <BtnSecondary label="Get In Touch" />
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="mt-20 p-2 relative">
          <h2 className="text-3xl md:text-4xl text-clr text-center raleway-medium mb-4">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-clr text-center roboto-light max-w-3xl mx-auto">
            I’m a multidisciplinary creative specializing in Web Development,
            Product Design, and Screenwriting. I bring complex ideas to life
            through responsive, user-centered websites, intuitive interface
            designs, and compelling stories that engage audiences.
          </p>

          <h3 className="text-2xl md:text-3xl text-clr ml-8 raleway-medium mt-8">
            Skills
          </h3>

          {/* Coding Animation */}
          <div className="absolute top-1/2 left-3 hidden md:block w-1/2 h-full opacity-20 pointer-events-none transform -translate-x-1/4 -translate-y-1/4">
            <Lottie
              className="w-full max-w-sm"
              animationData={codingAnimation}
            />
          </div>

          <div className="flex flex-row items-center justify-start gap-8 mt-6">
            <ul className="space-y-4">
              <li className="text-lg md:text-xl text-clr roboto-light pl-5">
                <span className="roboto-medium">
                  <FontAwesomeIcon className="mr-1" icon={faCode} />
                  Web Development:
                </span>{" "}
                HTML, CSS, JavaScript, React, and UI/UX Principles
              </li>
              <li className="text-lg md:text-xl text-clr roboto-light pl-5">
                <span className="roboto-medium">
                  <FontAwesomeIcon className="mr-1" icon={faPaintBrush} />
                  Product Design:
                </span>{" "}
                Wireframing, Prototyping, User (UI) Interface Design, and User
                Experience (UX) Design
              </li>
              <li className="text-lg md:text-xl text-clr roboto-light pl-5">
                <span className="roboto-medium">
                  <FontAwesomeIcon className="mr-1" icon={faFilm} />
                  Screenwriting:
                </span>{" "}
                Story Structure, Script Development, and Character Building
              </li>
            </ul>
          </div>
        </section>
      </>
    );
}
 
export default Home;