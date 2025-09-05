import "../components/3d-card-stack.js";

export default {
    title: "Components/Interactive-Cards/Card Swap",
    argTypes: {
        images: {
            control: "object",
            defaultValue: [
                "https://picsum.photos/200/300?random=1",
                "https://picsum.photos/200/300?random=2",
                "https://picsum.photos/200/300?random=3",
                "https://picsum.photos/200/300?random=4"
            ]
        },
        cardDistance: { control: { type: "number", min: 20, max: 200, step: 10 }, defaultValue: 60 },
        verticalDistance: { control: { type: "number", min: 20, max: 200, step: 10 }, defaultValue: 70 },
        delay: { control: { type: "number", min: 1000, max: 10000, step: 500 }, defaultValue: 5000 },
        width: { control: { type: "number", min: 100, max: 400, step: 10 }, defaultValue: 200 },
        height: { control: { type: "number", min: 150, max: 500, step: 10 }, defaultValue: 300 },
    },
};

const Template = ({ images, cardDistance, verticalDistance, delay, width, height }) => `
  <div style="
      display: flex; 
      justify-content: center; 
      align-items: center; 
      height: 100vh; 
      width: 100%;
  ">
    <card-swap
      images='${JSON.stringify(images)}'
      card-distance="${cardDistance}"
      vertical-distance="${verticalDistance}"
      delay="${delay}"
      width="${width}"
      height="${height}"
    ></card-swap>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    images: [
        "https://picsum.photos/200/300?random=1",
        "https://picsum.photos/200/300?random=2",
        "https://picsum.photos/200/300?random=3",
        "https://picsum.photos/200/300?random=4"
    ],
    cardDistance: 60,
    verticalDistance: 70,
    delay: 5000,
    width: 200,
    height: 300,
};
