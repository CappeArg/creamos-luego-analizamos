import Container from "@/app/_components/container";

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
              <svg
          width="2.5rem"
          height="2.5rem"
          fill="none"
          viewBox="0 0 28 28"
          aria-hidden="true"
          className="align-middle"
              >
          <rect width="28" height="28" rx="6" fill="currentColor" className="opacity-10"/>
          <path fill="currentColor" d="M9.5 11.5h2v7h-2v-7zm1-3a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm3.5 3h1.9v1h.03c.26-.5.9-1.03 1.87-1.03 2 0 2.37 1.32 2.37 3.03v4h-2v-3.56c0-.85-.02-1.94-1.18-1.94-1.18 0-1.36.92-1.36 1.87v3.63h-2v-7z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/cappe1989/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-neutral-500 hover:text-pink-500 transition-colors"
            >
              <svg
          width="2.5rem"
          height="2.5rem"
          fill="none"
          viewBox="0 0 28 28"
          aria-hidden="true"
          className="align-middle"
              >
          <rect width="28" height="28" rx="6" fill="currentColor" className="opacity-10"/>
          <rect x="8" y="8" width="12" height="12" rx="4" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="19" cy="9" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a
              href="https://x.com/pablocappe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-neutral-500 hover:text-black transition-colors"
            >
              <svg
          width="2.5rem"
          height="2.5rem"
          fill="none"
          viewBox="0 0 28 28"
          aria-hidden="true"
          className="align-middle"
              >
          <rect width="28" height="28" rx="6" fill="currentColor" className="opacity-10"/>
          <path fill="currentColor" d="M9.5 9.5h2.1l2.4 3.2 2.4-3.2h2.1l-3.3 4.3 3.5 4.7h-2.1l-2.6-3.5-2.6 3.5h-2.1l3.5-4.7-3.3-4.3z"/>
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
