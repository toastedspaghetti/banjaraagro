import SliderExample from "../../components/slider";
import ContentBlock from "../../components/contentblock";
import ImageText from "../../components/cb_imagetext";

export default function Portfolio() {
  return (
    <div>
      <SliderExample
        slides={[
          {
            imageSrc: "/banner_aboutus.jpg",
            alt: "Banjara Agro Group - About us",
            heading: "Our Growing Portfolio of Purpose-Driven Ventures",
            subHeading:
              "From sustainable agriculture to innovative manufacturing, our team is building a diverse ecosystem of businesses that uplift communities, create jobs, and shape a resilient future.",
          },
        ]}
      />
      <ContentBlock contained className="text-center">
        <h3>
          Building Sustainable Futures Through Agriculture, Innovation & Enterprise
        </h3>
        <ImageText
          className="image-text-internal block-transparent "
          reverse={true}
          blocks={[
            {
              heading: "Banjara Agro",
              content:
                "Nepal’s first modern integrated farm. Currently developing Nepal’s first fully automated model dairy farm with the ambition to transform country’s dairy industry through breed development, feed enhancement and use of latest technology. Additionally BA is also working closely with its overseas partners to establish Nepal’s first Greenhouse Park that is expected to be a Launchpad for modern vegetable & fruit farming.\n\nBA is committed to cutting greenhouse emissions and therefore investing in clean & renewable energy. While 75% of the farm’s energy comes from hydroelectricity, BA plans to deploy EV solutions for all of its cargo vehicles and staff transport.",
              images: [{ src: "/portfolio_ba.jpg", className: "image-1" }],
            },
            {
              heading: "Darahiya Plastic",
              content:
                "Nepal’s first silage film company, Darahiya Plastics aims to position itself as the most preferred agro plastics brand in the domestic market. In Phase I, DP has made significant investment in one of China’s best, fully automatic production line that uses best raw materials from an American petrochemical company. DP’s products will meet or surpass currently imported silage plastic quality while selling at a lower price. \n\nWhile silage film production and sales is expected to be begin in early April 2022, DP has already mapped out other agro plastic solutions such as mulch and greenhouse films. High quality produce, wider market access and consistent year-round supply to the national market grid will be achieved through structured and lean operating model that will be scaled up to 7 sales and distribution bases in the country within 3 years to ensure the entire nation has access to affordable silage and greenhouse plastics.",
              images: [{ src: "/portfolio_dp.jpeg", className: "image-1" }],
            },
            {
              heading: "Kunti Cattle Fodder",
              content:
                "Kunti Cattle Fodder Company is pioneering a “complete dairy cattle feed solution” which is a prerequisite for milk yield growth in Nepal. Corn silage and concentrate feed will be company’s primary focus and company plans to grow its own corn to ensure the highest quality is achieved within the most competitive price range while making sure responsible and sustainable farming practices are strictly adhered to.  \n\nIn the longer term, KCFC plans to become Nepal’s leading dairy cattle feed brand and help achieve self-sufficiency in dairy milk production in the country.",
              images: [{ src: "/portfolio_dp.jpeg", className: "image-1" }],
            }
          ]}
        />
      </ContentBlock>
    </div>
  );
}
