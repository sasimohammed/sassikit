import "../components/card-stack.js";

export default {
    title: "Components/Interactive-Cards/Card Stack",
    argTypes: {
        cards: {
            control: "object",
            defaultValue: [
                "https://picsum.photos/250/250?random=1",
                "https://picsum.photos/250/250?random=2",
                "https://picsum.photos/250/250?random=3",
                "https://picsum.photos/250/250?random=4",
            ],
        },
        cardWidth: { control: { type: "number", min: 100, max: 400, step: 10 }, defaultValue: 250 },
        cardHeight: { control: { type: "number", min: 100, max: 400, step: 10 }, defaultValue: 250 },
        sensitivity: { control: { type: "number", min: 50, max: 300, step: 10 }, defaultValue: 100 },
        rotationFactor: { control: { type: "number", min: 1, max: 10, step: 1 }, defaultValue: 4 },
    },
};

const Template = ({ cards, cardWidth, cardHeight, sensitivity, rotationFactor }) => `
  <div style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100%;
      background: #f0f0f0;
  ">
    <card-stack
      cards='${JSON.stringify(cards)}'
      card-width="${cardWidth}"
      card-height="${cardHeight}"
      sensitivity="${sensitivity}"
      rotation-factor="${rotationFactor}"
    ></card-stack>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    cards: [
        "https://picsum.photos/250/250?random=1",
        "https://picsum.photos/250/250?random=2",
        "https://picsum.photos/250/250?random=3",
        "https://picsum.photos/250/250?random=4",
    ],
    cardWidth: 250,
    cardHeight: 250,
    sensitivity: 100,
    rotationFactor: 4,
};
