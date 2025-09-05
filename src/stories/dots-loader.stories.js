import "../components/dots_loader.js";

export default {
    title: "Components/Loaders/Dots Loader",
    argTypes: {
        color: { control: "color", defaultValue: "#00c6ff" },
        shadowColor: { control: "color", defaultValue: "white" },
    },
};

const Template = ({ color, shadowColor }) => `
  <div style="
    display:flex; 
    justify-content:center; 
    align-items:center; 
    height:100vh; 
    width:100%;
    background:white;
  ">
    <dots-loader 
      color="${color}" 
      shadow-color="${shadowColor}">
    </dots-loader>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    color: "#00c6ff",
    shadowColor: "white",
};
