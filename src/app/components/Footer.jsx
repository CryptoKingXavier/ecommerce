import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiFillPinterest, AiOutlineLink } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Hanei's Art & Prints™️</p>
      <p className="icons">
        <Link href="https://www.instagram.com/yuuj1nee" target="_blank"><AiFillInstagram /></Link>
        <Link href="https://pin.it/4VnsVINEs" target="_blank"><AiFillPinterest /></Link>
        <Link href="https://lit.link/en/hanei" target="_blank"><AiOutlineLink /></Link>
      </p>
    </div>
  );
};

export default Footer;
