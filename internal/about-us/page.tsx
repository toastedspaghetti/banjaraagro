// app/internal/about-us/page.tsx
import SliderExample from "../../components/slider";
import Grid from "../../components/Grid_Cards";
import SplitContentGrid from "../../components/SplitContentGrid";
import ContentBlock from "../../components/contentblock";
import ImageText from "../../components/cb_imagetext";
import HeadingText from "../../components/HeadingText";

export default function AboutUsPage() {
  const doctors = [
    {
      name: "Dr. Emily Johnson",
      title: "Pediatrician",
      imageUrl: "/cards_1.png",
    },
    {
      name: "Dr. John Smith",
      title: "Cardiologist",
      imageUrl: "/cards_2.png",
    },
    {
      name: "Dr. Sarah Davis",
      title: "Dermatologist",
      imageUrl: "/cards_3.png",
    },
    {
      name: "Dr. Michael Lee",
      title: "Orthopedic",
      imageUrl: "/cards_3.png",
    },
    {
      name: "Dr. Jane Doe",
      title: "Cardiologist",
      imageUrl: "/cards_2.png",
    },
    {
      name: "Dr. Maria Lopez",
      title: "Neurologist",
      imageUrl: "/cards_1.png",
    },
  ];

  return (
    <div>
      <SliderExample
        slides={[
          {
            imageSrc: "/banner_aboutus.jpg",
            alt: "Banjara Agro Group - About us",
            heading: "Rooted in Community, Growing with Purpose",
            subHeading: "From Darahiya to every farm we touch, Banjara Agro exists to uplift lives, protect the earth, and cultivate a future where no one is left behind."
          },
        ]}
      />
      <ContentBlock contained className="text-center">
        <h3>
          Bringing a disruptive approach to drive performance through innovative
          ideas
        </h3>
        <ImageText
          className="image-text-internal block-transparent "
          reverse={true}
          blocks={[
            {
              heading: "Our Mission",
              content:
                "Supported by its ambitious plan of mechanization, automation, and use of technology in the agriculture industry, BA Group is committed to developing local talents and equip them with world-class training and experience so that they can drive productivity and yield at par with the advanced agro economies.",
              images: [{ src: "/home_5.png", className: "image-1" }],
            },
            {
              heading: "Diversity and Inclusion",
              content:
                "With Diversity and Inclusion as an integral part of its culture, BA Group aims to achieve 50% female representation in its full-time workforce by the end of 2022. Furthermore, the company strongly believes that it can bring hope, prosperity, and respectable livelihood to local people below the poverty line by creating direct employment opportunities while ensuring sustainable income to local farmers through contract farming.",
              images: [{ src: "/aboutus_1.png", className: "image-1" }],
            },
          ]}
        />
      </ContentBlock>
      <ContentBlock contained>
        <HeadingText
          heading="Global Warming and Climate change"
          text={
            <>
              While an accelerated growth of the agriculture industry is key to
              the nation’s overall development, BA Group ensures all its work
              processes and production methods are built around protecting the
              environment and achieving carbon neutrality by{" "}
              <span className="bold">2030.</span>
            </>
          }
        ></HeadingText>
        <HeadingText
          heading="Pioneer in the Agriculture Industry"
          text={
            <>
              While the company’s short and mid-term strategies and actions are
              targeted towards narrowing the gap between demand and supply of
              bare minimum essentials such as dairy milk, fresh vegetables, and
              fruits, Banjara Agro envisions to be the pioneer of the modern
              dairy and agriculture industry of Nepal in the longer terms. This
              will be achieved by establishing Research Academies (Agriculture &
              Livestock) in partnership with leading global and regional
              organizations. Such academies will deploy infrastructure,
              technologies, and research capabilities at par with their partners
              to fast-track the development of the high-quality dairy breed and
              high yield vegetable and fruit varieties following global
              sustainable farming practices.
            </>
          }
        ></HeadingText>
      </ContentBlock>
      <ContentBlock contained>
        <SplitContentGrid
          heading="Empowering Rural Agriculture"
          subheading="Join us in transforming Nepal’s farming ecosystem with technology and local insight."
          buttonText="Learn More"
          buttonUrl="/about-us"
          className="bg-light_green"
          buttonClassName="color-primary"
          column2Boxes={[
            {
              heading: "Sustainability",
              subheading: "Environment-first methods",
            },
            {
              heading: "Community Impact",
              subheading: "Supporting female farmers",
            },
          ]}
        />
      </ContentBlock>
      <ContentBlock contained>
        <Grid heading="Our team" doctors={doctors} />
      </ContentBlock>
    </div>
  );
}
