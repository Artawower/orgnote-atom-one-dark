export default {
  onMounted: async (api) => {
    api.ui.applyTheme({
      blue: "#61afef",
      red: "#e06c75",
      bg: "#282c34",
      bgAlt: "#21252b",
      fg: "#abb2bf",
      white: "#dbe1ec",
      green: "#98c379",
      orange: "#d19a66",
      yellow: "#e5c07b",
      violet: "#c678dd",
      cyan: "#56b6c2",
      base6: "white",
      base7: "rgba(99, 110, 123, 0.4)",
    });
  },
};

export const manifest = {
  category: "theme",
  name: "Atom One Dark Theme2",
  apiVersion: "0.13.4",
  version: "0.0.1",
  description: "Atom One Dark theme for OrgNote!",
  keywords: ["ui", "theme"], //
  sourceUrl: "https://github.com/artawower/orgnote-atom-one-dark",
  sourceType: 'git',
};
