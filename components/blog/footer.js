import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const BlogFooter = () => {
  return (
    <footer className="text-center">
      <div className="flex justify-center items-center p-6 bg-black">
        <div className="flex justify-center text-white">
          <Link href="/privacy-policy" className="mx-5">
            PrivacyPolicy
          </Link>
          <Link
            href="https://www.instagram.com/takane_xx/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </Link>
          <Link
            href="https://twitter.com/takane_x"
            target="_blank"
            rel="noreferrer noopener"
            className="mx-5"
          >
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </Link>
        </div>
      </div>
      <div className="text-center p-5 bg-black text-white">
        <span>&copy; </span>
        <Link href="/" className="font-bold font-serif">
          Gakux
        </Link>
        <span> 2021</span>
      </div>
    </footer>
  );
};

export default BlogFooter;
