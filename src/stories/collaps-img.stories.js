import "../components/collaps_img.js";

export default {
    title: "Components/Effects/Pixel Collapse Card",
    component: "pixel-collapse-card",
    argTypes: {
        src: { control: "text", defaultValue: "https://picsum.photos/400/300" },
        width: { control: "text", defaultValue: "400px" },
        tileSize: { control: "number", defaultValue: 20 },
        scaleFactor: { control: "number", defaultValue: 2 },
        borderRadius: { control: "text", defaultValue: "16px" },
        borderColor: { control: "color", defaultValue: "#ddd" },
        boxShadow: { control: "text", defaultValue: "0 4px 10px rgba(0,0,0,0.1)" },
    },
};

const Template = ({ src, width, tileSize, scaleFactor, borderRadius, borderColor, boxShadow }) => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.height = "100vh"; // center vertically in preview

    const card = document.createElement("pixel-collapse-card");
    card.setAttribute("src", src);
    card.setAttribute("width", width);
    card.tileSize = tileSize;
    card.scaleFactor = scaleFactor;
    card.setAttribute("border-radius", borderRadius);
    card.setAttribute("border-color", borderColor);
    card.setAttribute("box-shadow", boxShadow);

    container.appendChild(card);
    return container;
};

export const Default = Template.bind({});
Default.args = {
    src: "https://picsum.photos/400/300",
    width: "400px",
    tileSize: 20,
    scaleFactor: 2,
    borderRadius: "16px",
    borderColor: "#ddd",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};
