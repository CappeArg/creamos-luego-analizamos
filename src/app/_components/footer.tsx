import Container from "@/app/_components/container";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Estamos en contacto
          </h3>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/pablocappe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-500 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin size="2.5rem" className="align-middle" />
            </a>
            <a
              href="https://www.instagram.com/cappe1989/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-neutral-500 hover:text-pink-500 transition-colors"
            >
              <FaInstagram size="2.5rem" className="align-middle" />
            </a>
            <a
              href="https://x.com/pablocappe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-neutral-500 hover:text-black transition-colors"
            >
              <FaXTwitter size="2.5rem" className="align-middle" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
