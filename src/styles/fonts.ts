import localFont from "next/font/local";

const roboto = localFont({
  src: [
    {
      path: "../../public/assets/fonts/roboto-mono/RobotoMono-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/roboto-mono/RobotoMono-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

export { roboto };
