import path from "path";

export default {
  getSiteData: () => require("./data.json"),
  plugins: [
    [
      "react-static-plugin-sass",
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
  ],
};
