import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Footers() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex profile">
            <span className="bg-gradient-to-r from-pink-500 to-rose-300 profile__blog text-left">
              Blogs
            </span>
          </Link>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/" icon={BsInstagram} />
            <Footer.Icon href="https://twitter.com/" icon={BsTwitter} />
            <Footer.Icon href="https://github.com/" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
export default Footers;
