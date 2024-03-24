import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SavAct Docs",
  description: "Documentation about SavAct projects",
  base: "/docs/", // This is the base path of the website and need to be set for GitHub Pages https://savact.github.io/docs/
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      //   { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        items: [
          {
            text: "Fraud Protection",
            link: "/Payment/index",
            items: [],
          },
        ],
      },
      {
        items: [
          {
            text: "Financing Votes",
            link: "/Vote/index",
            items: [],
          },
        ],
      },
      {
        items: [
          {
            text: "SavWeb Browser",
            link: "/Browser/index",
            items: [
              { text: "File Upload", link: "Browser/FileUpload" },
              { text: "File Download", link: "Browser/FileDownload" },
              { text: "Naming Scheme", link: "Browser/NamingScheme" },
              { text: "Browser Requests", link: "Browser/BrowserRequests" },
              { text: "Dev Environment", link: "Browser/DevEnvironment" },
            ],
          },
        ],
      },

      //   {
      //     items: [
      //       {
      //         text: "VitePress Examples",
      //         items: [
      //           { text: "Markdown Examples", link: "/markdown-examples" },
      //           { text: "Runtime API Examples", link: "/api-examples" },
      //         ],
      //       },
      //     ],
      //   },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/SavAct" }],
  },
});
