import localFont from "next/font/local";

export const libration = localFont({
  src: [
    {
      path: "fonts/LiberationSerif-Bold.ttf",
      style: "normal",
      weight: "bold",
    },
    {
      path: "fonts/LiberationSerif-BoldItalic.ttf",
      style: "italic",
      weight: "bold",
    },
    {
      path: "fonts/LiberationSerif-Italic.ttf",
      style: "italic",
      weight: "400",
    },
    {
      path: "fonts/LiberationSerif-Regular.ttf",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--font-libration",
});


export const titilliumWeb = localFont({
  src: [
    {
      path: "fonts/TitilliumWeb-Black.ttf",
      style: "normal",
      weight: "900",
    },
    {
      path: "fonts/TitilliumWeb-Bold.ttf",
      style: "normal",
      weight: "bold",
    },
    {
      path: "fonts/TitilliumWeb-BoldItalic.ttf",
      style: "italic",
      weight: "bold",
    },
    {
      path: "fonts/TitilliumWeb-ExtraLight.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "fonts/TitilliumWeb-ExtraLightItalic.ttf",
      style: "italic",
      weight: "400",
    },
    {
      path: "fonts/TitilliumWeb-Italic.ttf",
      style: "italic",
      weight: "400",
    },
    {
      path: "fonts/TitilliumWeb-Light.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "fonts/TitilliumWeb-Light.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "fonts/TitilliumWeb-LightItalic.ttf",
      style: "italic",
      weight: "400",
    },
    {
      path: "fonts/TitilliumWeb-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "fonts/TitilliumWeb-SemiBold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "fonts/TitilliumWeb-SemiBoldItalic.ttf",
      style: "italic",
      weight: "700",
    },
  ],
  variable: "--font-titillium",
});