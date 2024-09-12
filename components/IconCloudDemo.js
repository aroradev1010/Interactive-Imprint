import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "c",
  "cplusplus",
  "typescript",
  "javascript",
  "java",
  "react",
  "flutter",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "firebase",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "mysql",
  "figma",
  "prismic",
  "netlify",
  "mongodb",
  "python",
  "framer",
  "render",
  "jquery",
  "redux",
  "tailwindcss",
  "threedotjs",
  "vite",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] xl:max-w-[45rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
