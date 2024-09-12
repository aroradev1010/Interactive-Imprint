import Link from "next/link";

import { RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2lg">
      <Link
        target="=_blank"
        href={"https://www.linkedin.com/in/dev-arora-815609145/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxLine />
      </Link>
      <Link
        target="=_blank"
        href={"https://github.com/aroradev1010"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
