import ContentBlock from "./components/contentblock";
import Grid from "./components/grid";
import SliderExample from "./components/slider";

import FlexGrid from "./components/FlexGrid";

import ModelComparisonChart from "./components/ComparisonChart"; // adjust path as needed
import TwoColumnCallout from "./components/TwoColumnCallout";
import SplitContentGrid from "./components/SplitContentGrid";
import StatsGrid from "./components/StatsGrid";

import {
  FaHandsHolding,
  FaPeopleRoof,
  FaHandHoldingHeart,
} from "react-icons/fa6";

const models = [
  {
    tag: "LIGHT & FAST",
    heading: "Haiku",
    subheading:
      "Our fastest model that can execute lightweight actions, with industry-leading speed.",
  },
  {
    tag: "HARD WORKING",
    heading: "Sonnet",
    subheading:
      "Our best combination of performance and speed for efficient, high-throughput tasks.",
  },
  {
    tag: "POWERFUL",
    heading: "Opus",
    subheading:
      "Our highest-performing model, which can handle complex analysis, longer tasks with many steps, and higher-order math and coding tasks.",
  },
];

export default function Home() {
  return (
    <div>
      <SliderExample
        slides={[
          {
            imageSrc: "/agrobanner.jpeg",
            alt: "Banjara Agro Group",
            heading: "Modern Farming. Local Roots. Global Vision.",
            buttonText: "Read more",
            buttonLink: "/test-page",
          },
          {
            imageSrc: "/ba_cows.jpg",
            alt: "Cows",
            heading: "Leading the Future of Dairy and Agriculture in Nepal",
            buttonText: "Read more",
            buttonLink: "/test-page",
          },
          {
            imageSrc: "/banner_3.jpeg",
            alt: "Green Fields",
            heading: "Driving Progress for a Healthier, Greener Tomorrow",
            buttonText: "Read more",
            buttonLink: "/test-page",
          },
        ]}
      />
      <ContentBlock contained>
        {/* <HeadingSubheading
          heading="The future of dairy starts here."
          subContent="Hand-raised cows. Farm-fresh milk. A commitment to quality. A promise for tomorrow."
          className="align-center"
        /> */}
        <TwoColumnCallout
          heading="The future of dairy starts here."
          subheading="Hand-raised cows. Farm-fresh milk. A commitment to quality. A promise for tomorrow."
          buttonText="Learn more"
          buttonUrl="/about-us"
        />
        <Grid
          boxes={[
            {
              imageUrl: "/assets/images/content/cows_farm_vertical.png",
              heading: "450",
              text: "Cattle Capacity",
              // url: "/nature",
              boxClassName: "bottom-gradient",
              slides: [
                {
                  imageUrl: "/assets/images/content/popup_cattle.png",
                  text: "This modern dairy farm in Nepal houses over 450 cattle, with high-efficiency feeding lanes designed for optimal herd health and scalable future expansion.",
                },
                {
                  imageUrl: "/assets/images/content/popup_cattle3.png",
                  text: "Equipped with automated milking systems, the farm ensures precision dairy collection, supporting both quality control and the capacity to scale milk output.",
                },
                {
                  imageUrl: "/assets/images/content/popup_cattle5.png",
                  text: "As one of Nepal’s flagship dairy farms, this facility demonstrates the nation’s growing capacity for local production and offers exciting opportunities for expanding both herd size and market reach.",
                },
              ],
            },
            {
              imageUrl: "/assets/images/content/equipment_vertical.png",
              heading: "71",
              text: "Current Cattle",
              slides: [
                {
                  imageUrl: "/assets/images/content/popup_equipment1.png",
                  text: "Advanced milking equipment ensures efficient, hygienic dairy collection, reducing manual effort and improving milk quality on the Nepalese farm.",
                },
                {
                  imageUrl: "/assets/images/content/popup_equipment2.png",
                  text: "Dedicated farm workers maintain a clean, hygienic environment, promoting both animal welfare and a safe, healthy workplace for the entire team.",
                },
              ],
            },
            {
              // gradient: "linear-gradient(120deg, #1e6f5c 0%, #3a923a 100%)",
              heading: "1000L",
              text: "Current Milk Production",
              boxClassName: "glow bg-secondary color-primary",
            },
            {
              imageUrl: "/assets/images/content/equipment_silo_horizontal.png",
              heading: "10,000",
              text: "SQM Greenhouse capacity",
              slides: [
                {
                  imageUrl: "/assets/images/content/greenhouse_1.png",
                  text: "This expansive greenhouse in Nepal supports large-scale vegetable production, maximizing land use and offering significant capacity for future agricultural growth.",
                },
                {
                  imageUrl: "/assets/images/content/greenhouse_2.png",
                  text: "Rows of vibrant, healthy vegetables flourish under controlled greenhouse conditions, ensuring top-quality produce for local and regional markets.",
                },
                {
                  imageUrl: "/assets/images/content/greenhouse_3.png",
                  text: "A dedicated team works together with pride and care, maintaining the greenhouse and driving a shared mission of sustainable, high-quality farming.",
                },
              ],
            },
            {
              imageUrl:
                "/assets/images/content/equipment_sileage_horizontal.png",
              heading: "24 Ton",
              text: "Sileage Production",
            },
          ]}
        />
      </ContentBlock>
      <ContentBlock className="cb-full-width">
        <TwoColumnCallout
          contained
          heading="Empowering communities through smarter farming."
          subheading="Locally grown. Globally minded. A future built on innovation, education, and sustainable agriculture."
          buttonText="Learn more"
          buttonUrl="/vision"
        />
        <FlexGrid
          items={[
            {
              icon: <FaHandsHolding />,
              heading: "Vision",
              content:
                "Through innovations, training and use of technology, achieve Nepal’s self-sufficiency in basic agro products such as vegetables and fruits and become net exporter of dairy products within the next ten years.",
            },
            {
              icon: <FaPeopleRoof />,
              heading: "Mission",
              content:
                "Create community-based opportunities that support long-term employment, provide practical education to children, improve access to public health, and strengthen local livelihoods for a more resilient future.",
            },
            {
              icon: <FaHandHoldingHeart />,
              heading: "Values",
              content:
                "Develop a culture that nurtures teamwork, mutual trust and respect while giving space for taking full ownership of individual goals that perfectly complements organization’s long term vision.",
            },
          ]}
        />
      </ContentBlock>
      <ContentBlock
      >
        {/* <TwoColumnCallout-
          contained
          heading="Behind every number, a step toward self-sufficiency."
          subheading="From thriving cattle to scalable greenhouse capacity, our data reflects progress, purpose, and the promise of a stronger agro future."
        /> */}
        <StatsGrid
          heading="Behind every number, a step toward self-sufficiency."
          subheading="From thriving cattle to scalable greenhouse capacity, our data reflects progress, purpose, and the promise of a stronger agro future."
          contained
          column2Boxes={[
            {
              heading: "400+",
              subheading: "Unified vision to support your specific needs",
              tag: "Everyday topic",
              tagBottom: true,
            },
            {
              heading: "4.5*",
              subheading: "Explore our customer reviews on App Store",
              tag: "Get it from AppStore",
            },
            {
              heading: "13%",
              subheading: "Average Annual Return by our Business Services",
              icon: <span>📈</span>,
            },
            {
              heading: "5M+",
              subheading: "Used by millions of teams and professionals",
              icon: (
                <>
                  <span>🌐</span>
                  <span>🏢</span>
                  <span>⚙️</span>
                </>
              ),
            },
          ]}
        />
      </ContentBlock>
      <ContentBlock contained className="backdrop">
        <TwoColumnCallout
          heading="Optimizing every layer of the modern farm."
          subheading="From daily routines to data-driven insights, our systems scale with your needs—enabling speed, precision, and peak agricultural performance."
        />
        <ModelComparisonChart
          models={models}
          leftLabel="INTELLIGENCE"
          bottomLabel="COST"
          heading="Cultivating Progress, Year After Year"
          subHeading="From humble beginnings to a thriving agro-dairy enterprise, our journey reflects sustained growth, smarter practices, and a deepening impact on local communities and national food resilience."
        />
      </ContentBlock>
      <ContentBlock contained className="bg-lighter_grey color-black">
        <SliderExample
          className="slider-quote"
          autoPlay={false}
          showDots={false}
          slides={[
            {
              heading:
                "“Farming is not just a profession, it’s a promise to the future.”",
              subHeading: "— Banjara Agro Group",
            },
            {
              heading:
                "“Growth isn’t just measured in acres — it’s measured in impact.”",
              subHeading: "— CEO, BA Group",
            },
            {
              heading:
                "“Innovation in agriculture means securing tomorrow’s food today.”",
              subHeading: "— From the Field",
            },
          ]}
        />
      </ContentBlock>
      <ContentBlock contained className="backdrop">
        <SplitContentGrid
          heading="In the Media"
          subheading="From in-depth podcasts and viral YouTube features to national news coverage — our farm continues to inspire and lead conversations around innovation in agriculture."
          buttonText="Learn More"
          buttonUrl="/about-us"
          className="hide-button skip-padding"
          buttonClassName="color-primary"
          column1ClassName="w-040"
          column2ClassName="w-060"
          column2Boxes={[
            {
              iFrameYoutube: "https://www.youtube.com/embed/ZujPO5N7Pw0",
            },
            {
              iFrameYoutube: "https://www.youtube.com/embed/24YAtuNOp9w",
            },
            {
              iFrameYoutube: "https://www.youtube.com/embed/n5W6vViBPsQ",
            },
            {
              iFrameYoutube: "https://www.youtube.com/embed/EK_iAbk86xA",
            },
          ]}
        />
        {/* <ImageText
          reverse={false}
          btnClassName="btn-primary btn-curve"
          blocks={[
            {
              heading: "Revolutionizing Dairy in Nepal",
              content:
                "Our cutting-edge practices ensure the highest quality milk production while supporting sustainable farming.",
              buttonText: "Learn More",
              buttonUrl: "/about",
              bullets: [
                {
                  highlight: "500 litres",
                  text: " of high-quality milk produced daily",
                },
                {
                  highlight: "Premium dairy cows",
                  text: " bred through artificial selection",
                },
                {
                  highlight: "Sustainable growth",
                  text: " backed by long-term planning",
                },
              ],
              images: [
                {
                  src: "/assets/images/content/home_6.png",
                  className: "main-img w-75",
                },
                // Optionally add more images:
                // { src: "/bubble2.png", bubble: true }
              ],
            },
          ]}
        /> */}
      </ContentBlock>
    </div>
  );
}
