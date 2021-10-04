import {
  faFacebook,
  faInstagram,
  faSkype,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-center bg-gray-100 py-6">
      <div>
        <div className="pt-5">
          <FontAwesomeIcon
            className="text-green-700"
            icon={faBook}
            size="3x"
          ></FontAwesomeIcon>
          <h1 className="text-xl md:text-3xl uppercase pt-4">
            Know the unknown, see the unseen
          </h1>
        </div>
        <div className="footer-icon my-4">
          <ul className="flex justify-center">
            <li>
              <Link
                to={{ pathname: "https://www.facebook.com/" }}
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </Link>
            </li>
            <li>
              <Link
                to={{ pathname: "https://www.instagram.com/" }}
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </Link>
            </li>
            <li>
              <Link to={{ pathname: "https://www.skype.com/" }} target="_blank">
                <FontAwesomeIcon icon={faSkype} size="lg" />
              </Link>
            </li>
            <li>
              <Link
                to={{ pathname: "https://www.youtube.com/" }}
                target="_blank"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="last-footer text-center">
          <p className="text-green-700 font-semibold py-1">
            &copy; 2021 WorldLearner<sup>&reg;</sup>
          </p>
          <p className="text-green-700">
            Design by <span className="text-blue-500">pervej</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
