import SliderExample from "../../components/slider";
import ContentBlock from "../../components/contentblock";
import SplitContentGrid from "../../components/SplitContentGrid";

export const metadata = {
  title: "Banjara Agro - Vision",
  description:
    "Discover Banjara Agro’s vision for sustainable, inclusive agricultural growth in Nepal.",
};

export default function vision() {
  return (
    <div>
      <SliderExample
        slides={[
          {
            imageSrc: "/banner_aboutus.jpg",
            alt: "Banjara Agro Group - Vision",
            heading: "A Future Grown from the Ground Up",
            subHeading:
              "Our vision is to build a self-sufficient Nepal by nurturing rural talent, restoring the land, and scaling impact — one farm, one family, one future at a time.",
          },
        ]}
      />
      <ContentBlock contained className="text-center">
        <h3>
          Driving Nepal’s agricultural transformation through innovation,
          community opportunity, and shared purpose
        </h3>
      </ContentBlock>

      <ContentBlock contained>
        <SplitContentGrid
          heading="Vision"
          subheading="Through innovations, training and use of technology, achieve Nepal’s self-sufficiency in basic agro products such as vegetables and fruits and become net exporter of dairy products within the next ten years."
          buttonText="Learn More"
          buttonUrl="/about-us"
          className="bg-white hide-button"
          buttonClassName="color-primary"
          column2Boxes={[
            {
              bgImage: "/vision_1.png",
            },
            {
              heading: "Community Impact",
              subheading: "Supporting female farmers",
            },
            {
              bgImage: "/vision_1.png",
            },
          ]}
        />

        <SplitContentGrid
          heading="Mission"
          subheading="Create community based opportunities that support long term employment, practical education to children and access to public health."
          buttonText="Learn More"
          buttonUrl="/about-us"
          className="bg-white hide-button bg-reverse"
          buttonClassName="color-primary"
          column2Boxes={[
            {
              bgImage: "/vision_1.png",
            },
            {
              heading: "Community Impact",
              subheading: "Supporting female farmers",
            },
            {
              bgImage: "/vision_1.png",
            },
          ]}
        />

        <SplitContentGrid
          heading="Values"
          subheading="Develop a culture that nurtures teamwork, mutual trust and respect while giving space for taking full ownership of individual goals that perfectly complements organization’s long term vision."
          buttonText="Learn More"
          buttonUrl="/about-us"
          className="bg-white hide-button"
          buttonClassName="color-primary"
          column2Boxes={[
            {
              heading: "Community Impact",
              subheading: "Supporting female farmers",
            },
            {
              bgImage: "/vision_7.jpg",
            },
            {
              bgImage: "/vision_1.png",
            },
          ]}
        />
      </ContentBlock>
    </div>
  );
}
