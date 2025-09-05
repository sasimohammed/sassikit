import "../components/basic/magic_nav.js";

export default {
    title: "Components/Basic/MagicNav",
    argTypes: {
        navBg: { control: "color", defaultValue: "#ffffff" },
        pageBg: { control: "color", defaultValue: "#000000" },
        indicatorColor: { control: "color", defaultValue: "purple" },
        indicatorBorderColor: { control: "color", defaultValue: "#000000" },
        textColor: { control: "color", defaultValue: "black" },
        activeTextColor: { control: "color", defaultValue: "black" },
        hoverTextColor: { control: "color", defaultValue: "purple" },
        iconColor: { control: "color", defaultValue: "black" },
        activeIconColor: { control: "color", defaultValue: "black" },
    },
};

const Template = ({
                      navBg,
                      pageBg,
                      indicatorColor,
                      indicatorBorderColor,
                      textColor,
                      activeTextColor,
                      hoverTextColor,
                      iconColor,
                      activeIconColor,
                  }) => `
  <magic-nav
    nav-bg="${navBg}"
    page-bg="${pageBg}"
    indicator-color="${indicatorColor}"
    indicator-border-color="${indicatorBorderColor}"
    text-color="${textColor}"
    active-text-color="${activeTextColor}"
    hover-text-color="${hoverTextColor}"
    icon-color="${iconColor}"
    active-icon-color="${activeIconColor}"
  >
    <!-- Navigation Links -->
    <a slot="links" data-target="tab1">
      <i class="icon">🏠</i>
      <span>Home</span>
    </a>
    <a slot="links" data-target="tab2">
      <i class="icon">📄</i>
      <span>About</span>
    </a>
    <a slot="links" data-target="tab3">
      <i class="icon">⚙️</i>
      <span>Settings</span>
    </a>

    <!-- Content Sections -->
    <div slot="content" id="tab1">
      <h2 style="color:white;">Home Content</h2>
      <p style="color:white;">Welcome to the home page.</p>
    </div>
    <div slot="content" id="tab2">
      <h2 style="color:white;">About Content</h2>
      <p style="color:white;">Here is some information about us.</p>
    </div>
    <div slot="content" id="tab3">
      <h2 style="color:white;">Settings Content</h2>
      <p style="color:white;">Adjust your preferences here.</p>
    </div>
  </magic-nav>
`;

export const Default = Template.bind({});
Default.args = {
    navBg: "#ffffff",
    pageBg: "#000000",
    indicatorColor: "purple",

    textColor: "black",
    activeTextColor: "black",
    hoverTextColor: "purple",
    iconColor: "black",
    activeIconColor: "black",
};
