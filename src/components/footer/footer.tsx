const Footer = () => {
  return (
    <footer className="row-start-3 mb-10 flex gap-[24px] flex-wrap items-center justify-center">
      <ul className="flex items-center gap-4 list-none">
        <li>
          <a
            href="https://www.parallelminds.io/"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            &copy; 2024-{new Date().getFullYear()} Parallel Minds
          </a>
        </li>
        <li>&bull;</li>
        <li>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.jonathanfielding.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site built and designed by Jonathan Fielding
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;