import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <>
      <TransitionPage />
      <div className="flex flex-col justify-center items-center h-lvh mt-20 md:mt-28">
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          Contacta conmigo
          <span className="block font-bold text-secondary">
            Estoy aquí para ayudarte
          </span>
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col items-center p-6 space-y-4 bg-gray-600 rounded-lg shadow-md max-w-md">
            <h2 className="text-xl font-semibold">Correo Electrónico</h2>
            <a
              href="mailto:aaronpesqueirafarina@gmail.com"
              className="flex items-center text-lg text-secondary hover:underline break-all"
            >
              <FaEnvelope className="mr-2" /> aaronpesqueirafarina@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center p-6 space-y-4 bg-gray-600 rounded-lg shadow-md max-w-md">
            <h2 className="text-xl font-semibold">LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/aar%C3%B3n-pesqueira-fari%C3%B1a-126057a4/"
              className="flex items-center text-lg text-secondary hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-2" /> LinkedIn Profile
            </a>
          </div>
          <div className="flex flex-col items-center p-6 space-y-4 bg-gray-600 rounded-lg shadow-md max-w-md">
            <h2 className="text-xl font-semibold">Github</h2>
            <a
              href="https://github.com/aronaldo9"
              className="flex items-center text-lg text-secondary hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2" /> github.com/aronaldo9
            </a>
          </div>
          <div className="flex flex-col items-center p-6 space-y-4 bg-gray-600 rounded-lg shadow-md max-w-md">
            <h2 className="text-xl font-semibold">Whatsapp</h2>
            <a
              href="https://wa.me/34686604073"
              className="flex items-center text-lg text-secondary hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mr-2" /> +34 686 60 40 73
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
