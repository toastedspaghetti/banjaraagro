import SliderExample from "../../components/slider";
import ImageText from "../../components/cb_imagetext";
import ContentBlock from "../../components/contentblock";
import FlexGrid from "../../components/FlexGrid";
import {
  FaHandsHolding,
  FaPeopleRoof,
  FaHandHoldingHeart,
} from "react-icons/fa6";

export default function inspiration() {
  return (
    <div>
      <SliderExample
        slides={[
          {
            imageSrc: "/banner_aboutus.jpg",
            alt: "Banjara Agro Group - Inspiration",
            heading: "What Inspires Us Every Day",
            subHeading: "From the resilience of Darahiya to the hands that nurture our land — this is where our purpose begins.",
          },
        ]}
      />
      <ContentBlock contained className="text-center">
        <h3>
          The principle objective of BA is to become Nepal’s market leader in
          agriculture.{" "}
        </h3>
        <ImageText
          className="image-text-internal block-transparent "
          reverse={true}
          blocks={[
            {
              heading: "A Glimpse Into Darahiya",
              content:
                "Located in the South Eastern Nepal, Darahiya Village has not changed much in the past 40 years.  A population of 7,500 people, nearly 60% of the families are deprived of a permanent employment, a basic house and education; health care is considered a luxury. ",
              images: [{ src: "/inspiration_1.jpg", className: "image-1" }],
            },
            {
              heading: "Building a Better Future",
              content:
                "With this in mind, Banjara Agro has embarked into an ambitious project to be their hope by providing families a respectable platform that provides regular employment, free education to  children and company funded medical and life insurance. This will be further supported with a solid people-focused work culture that provides equal opportunities and respectable work environment for everyone to thrive.",
              images: [{ src: "/inspiration_2.jpg", className: "image-1" }],
            },
          ]}
        />
      </ContentBlock>
      <ContentBlock contained>
        <FlexGrid
          className="align-center light icons-centre"
          sectionHeading="Scaling Sustainable Agriculture"
          items={[
            {
              icon: <FaHandsHolding />,
              heading: "Empowering Local Rural Communities",
              content:
                "Establishing a fully integrated farm system that aligns with the national goal of self-sufficiency, while generating employment at the grassroots level.",
            },
            {
              icon: <FaPeopleRoof />,
              heading: "Driving Sustainable Market Access",
              content:
                "Ensuring high-quality produce with broader market access and a reliable, year-round supply to the national market.",
            },
            {
              icon: <FaHandHoldingHeart />,
              heading: "Expanding Scalable Farm Growth",
              content:
                "Using a structured and lean operating model to expand operations — scaling to 4 locations within 5 years and 10 locations within 8 years.",
            },
          ]}
        />
      </ContentBlock>
    </div>
  );
}
