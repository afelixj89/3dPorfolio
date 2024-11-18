import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0 z-50 bg-gray text-white py-4">
      <ul className="flex justify-center">
        <li>
          <a
            href="https://github.com/afelixj89"
            className="mr-2.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/antonio-felix00/"
            className="ml-2.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
