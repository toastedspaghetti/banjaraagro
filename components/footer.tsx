"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import LinkGradient from "./linkGradient";

export default function Footer() {
  return (
    <footer className="footer">
      <svg
        viewBox="0 0 512 512"
        height="48"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e6f5c" />
            <stop offset="100%" stopColor="#2a9d8f" />
          </linearGradient>
        </defs>
      </svg>

      <div className="footer-background">
        <Image
          src="/footer_background.jpeg"
          alt="My Image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="footer-gradient-overlay"></div>
      </div>

      <div className="container">
        <div className="footer-logo-social">
          <div className="footer-logo">
            <Image
              className=""
              src="/ba_logo_white_horizontal.svg"
              alt="Banjara Agro Group"
              width={200}
              height={60}
              priority
            />
          </div>
          <div className="footer-social">
            <Link href="https://www.facebook.com/banjaraagronepal">
              <FaFacebookF />
            </Link>
            <Link href="https://www.linkedin.com/company/banjara-agro-group/">
              <FaInstagram />
            </Link>
            <Link href="https://youtube.com/channel/UCh00fBS8grKPYpZbuvEJyww">
              <FaYoutube />
            </Link>
          </div>
        </div>
        <div className="footer-additional-info">
          <div className="footer-contact-details">
            <LinkGradient
              href="tel: +9779842032913"
              className="gradient-link"
              data-text="+ 977 9842032913"
            >
              <FaPhone /> + 977 9842032913
            </LinkGradient>
            <LinkGradient
              href="mailto: info@banjaraagro.com"
              className="gradient-link"
              data-text="+ 977 9842032913"
            >
              <MdEmail /> info@banjaraagro.com
            </LinkGradient>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Copyright © 2025 Banjara Agro Group All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
