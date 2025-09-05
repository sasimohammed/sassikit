import "../components/clip_img.js";

export default {
    title: "Components/Effects/Clip Image",
    argTypes: {
        image1: { control: "text", defaultValue: "https://picsum.photos/600/400?random=1" },
        image2: { control: "text", defaultValue: "https://picsum.photos/600/400?random=2" },
        width: { control: "text", defaultValue: "600px" },
        height: { control: "text", defaultValue: "400px" },
        border: { control: "text", defaultValue: "2px solid black" },
    },
};

const Template = ({ image1, image2, width, height, border }) => `
  <div style="
      display: flex; 
      justify-content: center; 
      align-items: center; 
      height: 100vh; 
      width: 100%;
  ">
    <clip-image
      image1="${image1}"
      image2="${image2}"
      width="${width}"
      height="${height}"
      border="${border}"
    ></clip-image>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    image1: "https://picsum.photos/600/400?random=1",
    image2: "https://picsum.photos/600/400?random=2",
    width: "600px",
    height: "400px",
    border: "2px solid black",
};
