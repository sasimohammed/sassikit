import "../components/img-pixels.js";

export default {
    title: "Components/Effects/Pixel Image Transition",
    argTypes: {
        gridSize: {
            control: { type: "number", min: 2, max: 50, step: 1 },
            defaultValue: 12
        },
        pixelColor: {
            control: "color",
            defaultValue: "#ffffff"
        },
        pixelsPerSecond: {
            control: { type: "number", min: 10, max: 1000, step: 10 },
            defaultValue: 100
        },
        width: {
            control: "text",
            defaultValue: "400px",
            description: "Width of the transition (px, %, or auto)",
        },
        height: {
            control: "text",
            defaultValue: "auto",
            description: "Height of the transition (px, %, or auto)",
        },
    },
};

const Template = ({ gridSize, pixelColor, pixelsPerSecond, width, height }) => `
  <div style="
      display: flex; 
      justify-content: center; 
      align-items: center; 
      height: 100vh; 
      width: 100%;
  ">
    <img-transition
      grid-size="${gridSize}"
      pixel-color="${pixelColor}"
      pixels-per-second="${pixelsPerSecond}"
      width="${width}"
      height="${height}"
    >
      <img slot="image" src="https://images.unsplash.com/photo-1503264116251-35a269479413?w=600&h=400&fit=crop" alt="Background"/>
      
      <div slot="image-layer">
        <p style="font-size: 1.5rem; font-weight: bold; text-align: center;">
          Overlay Content
        </p>
      </div>
    </img-transition>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    gridSize: 12,
    pixelColor: "#ffffff",
    pixelsPerSecond: 100,
    width: "400px",
    height: "auto",
};
