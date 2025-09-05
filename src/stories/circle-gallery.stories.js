import "../components/circle_galary.js";

export default {
    title: "Components/Interactive-Cards/Circle Gallery",
    argTypes: {
        cards: {
            control: "object",
            defaultValue: [
                "https://picsum.photos/300/300?random=1",
                "https://picsum.photos/300/300?random=2",
                "https://picsum.photos/300/300?random=3",
                "https://picsum.photos/300/300?random=4",
                "https://picsum.photos/300/300?random=5",
            ],
        },
        size: {
            control: { type: "number", min: 150, max: 500, step: 10 },
            defaultValue: 250,
        },
    },
};

const Template = ({ cards, size }) => `
  <div style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100%;
      background: #ffffff; /* خلفية بيضاء طبيعية */
  ">
    <circle-gallery
      cards='${JSON.stringify(cards)}'
      size="${size}"
    ></circle-gallery>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    cards: [
        "https://picsum.photos/300/300?random=1",
        "https://picsum.photos/300/300?random=2",
        "https://picsum.photos/300/300?random=3",
        "https://picsum.photos/300/300?random=4",
        "https://picsum.photos/300/300?random=5",
    ],
    size: 250,
};
