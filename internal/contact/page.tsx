"use client";

import SliderExample from "../../components/slider";
import ContentBlock from "../../components/contentblock";
import LinkGradient from "@/app/components/linkGradient";
import FormContact from "@/app/components/FormContact";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="page-contact">
      <SliderExample
        slides={[
          {
            imageSrc: "/banner_aboutus.jpg",
            alt: "Banjara Agro Group - About us",
            heading: "Contact us",
            subHeading:
              "Please feel free to contact us and we will get back to you as soon as we can.",
          },
        ]}
      />
      <ContentBlock contained className="text-center">
        <div className="flex-parent contact-form-container">
          <div className="left-column w-75 bg-lighter_green">
            <FormContact />
          </div>
          <div className="right-column contact-details bg-lighter_green">
            <div className="contact-card mini">
              <div className="icon">
                <FaPhone />
              </div>
              <div className="details">
                <label>Phone number</label>
                <LinkGradient
                  href="tel: +977 98420 32913"
                  className="gradient-link"
                  data-text="+977 98420 32913"
                >
                  +977 98420 32913
                </LinkGradient>
              </div>
            </div>
            <div className="contact-card mini">
              <div className="icon">
                <FaEnvelope />
              </div>
              <div className="details">
                <label>Email Address</label>
                <LinkGradient
                  href="mailto: info@banjaraagro.com"
                  className="gradient-link"
                  data-text="info@banjaraagro.com"
                >
                  info@banjaraagro.com
                </LinkGradient>
              </div>
            </div>
            <div className="contact-card mini">
              <div className="icon">
                <FaLocationArrow />
              </div>
              <div className="details">
                <label>Location</label>
                <LinkGradient
                  href="https://www.google.com/maps/place/BANJARA+AGRO+PVT+LTD/@26.427521,87.2584691,17z/data=!4m8!3m7!1s0x39ef756e60aa0f2f:0x1fdfc88eac980c10!8m2!3d26.427521!4d87.261044!9m1!1b1!16s%2Fg%2F11t6t2zs89?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                  className="gradient-link"
                  data-text="Biratnagar - 12, Darahiya, Morang, Province 1, Nepal"
                >
                  Biratnagar - 12, Darahiya, Morang, Province 1, Nepal
                </LinkGradient>
              </div>
            </div>
          </div>
        </div>

        <div className="container-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.947630893781!2d87.2584691!3d26.4275258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef756e60aa0f2f%3A0x1fdfc88eac980c10!2sBANJARA%20AGRO%20PVT%20LTD!5e0!3m2!1sen!2snp!4v1721879047067!5m2!1sen!2snp"
            width="100%"
            height="400"
            loading="lazy"
            className="iframe-map"
          ></iframe>
        </div>
      </ContentBlock>
    </div>
  );
}
