import Link from "next/link";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>© Made by Anna Hilla, 2024</p>
      <div className="socials">
        <Link
          href="https://github.com/annahilla/expense-tracker"
          target="_blank"
        >
          <button className="btn-light">View Code</button>
        </Link>
        <Link href="https://github.com/annahilla" target="_blank">
          <FaGithub color="black" />
        </Link>
        <Link href="mailto:annahilla21@gmail.com" target="_blank">
          <CgMail color="black" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
