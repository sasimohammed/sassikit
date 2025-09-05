import "../components/basic/dash_board.js"; // adjust path if needed

export default {
    title: "Components/Basic/Dashboard",
    argTypes: {
        "bg-color": { control: "color", defaultValue: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
        "text-color": { control: "color", defaultValue: "#ffffff" },
        "hover-color": { control: "color", defaultValue: "#faba1b" },
        "bg-hover": { control: "color", defaultValue: "rgba(255, 255, 255, 0.1)" },
        "sidebar-width": { control: "text", defaultValue: "250px" },
        "sidebar-bg": { control: "color", defaultValue: "linear-gradient(180deg, #2c3e50 0%, #1a2530 100%)" },
        "sidebar-hover": { control: "color", defaultValue: "rgba(255, 255, 255, 0.05)" },
        "sidebar-gap": { control: "text", defaultValue: "10px" },
        "sidebar-radius": { control: "text", defaultValue: "0 20px 20px 0" },
        "sidebar-padding": { control: "text", defaultValue: "2rem 0" },
        "item-color": { control: "color", defaultValue: "rgba(255, 255, 255, 0.8)" },
        "item-hover-color": { control: "color", defaultValue: "#ffffff" },
        "icon-size": { control: "text", defaultValue: "1.2rem" },
        "item-padding": { control: "text", defaultValue: "12px 20px" },
        "item-transition": { control: "text", defaultValue: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)" },
    },
};

const Template = (args) => `
  <dash-board
    bg-color="${args["bg-color"]}"
    text-color="${args["text-color"]}"
    hover-color="${args["hover-color"]}"
    bg-hover="${args["bg-hover"]}"
    sidebar-width="${args["sidebar-width"]}"
    sidebar-bg="${args["sidebar-bg"]}"
    sidebar-hover="${args["sidebar-hover"]}"
    sidebar-gap="${args["sidebar-gap"]}"
    sidebar-radius="${args["sidebar-radius"]}"
    sidebar-padding="${args["sidebar-padding"]}"
    item-color="${args["item-color"]}"
    item-hover-color="${args["item-hover-color"]}"
    icon-size="${args["icon-size"]}"
    item-padding="${args["item-padding"]}"
    item-transition="${args["item-transition"]}"
  >
    <!-- Logo -->
    <span slot="logo-icon">🚀</span>
    <span slot="logo">MyApp</span>

    <!-- Top Nav Links -->
    <a slot="links" href="#">Home</a>
    <a slot="links" href="#">About</a>
    <a slot="links" href="#">Contact</a>

    <!-- Sidebar Items -->
    <a slot="sidebar-item" data-target="overview"><i>📊</i><span>Overview</span></a>
    <a slot="sidebar-item" data-target="reports"><i>📑</i><span>Reports</span></a>
    <a slot="sidebar-item" data-target="settings"><i>⚙️</i><span>Settings</span></a>

    <!-- Dashboard Content -->
    <div slot="content" data-section="overview">
      <h2>Overview</h2>
      <p>This is the overview section of the dashboard.</p>
    </div>

    <div slot="content" data-section="reports">
      <h2>Reports</h2>
      <p>This is where reports will be displayed.</p>
    </div>

    <div slot="content" data-section="settings">
      <h2>Settings</h2>
      <p>Manage your application settings here.</p>
    </div>
  </dash-board>
`;

export const Default = Template.bind({});
Default.args = {
    "bg-color": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "text-color": "#ffffff",
    "hover-color": "#faba1b",
    "bg-hover": "rgba(255, 255, 255, 0.1)",
    "sidebar-width": "250px",
    "sidebar-bg": "linear-gradient(180deg, #2c3e50 0%, #1a2530 100%)",
    "sidebar-hover": "rgba(255, 255, 255, 0.05)",
    "sidebar-gap": "10px",
    "sidebar-radius": "0 20px 20px 0",
    "sidebar-padding": "2rem 0",
    "item-color": "rgba(255, 255, 255, 0.8)",
    "item-hover-color": "#ffffff",
    "icon-size": "1.2rem",
    "item-padding": "12px 20px",
    "item-transition": "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
};
