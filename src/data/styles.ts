import type { Style } from "@/types";
import { tattooImages } from "@/data/tattooImages";
import { tattooConfig } from "@/data/tattooConfig";

const styleDefinitions: Array<{
  id: number;
  name: string;
  slug: keyof typeof tattooConfig.styleFeatured;
  description: string;
}> = [
    {
      id: 1,
      name: "Portrait",
      slug: "portrait",
      description:
        "Custom portrait tattoos created with detail and character.",
    },
    {
      id: 2,
      name: "Cover Up",
      slug: "coverup",
      description:
        "Thoughtfully designed tattoos that transform and cover existing work.",
    },
    {
      id: 3,
      name: "Band",
      slug: "arm-band",
      description:
        "Clean, balanced tattoo designs made to follow the shape of the body.",
    },
    {
      id: 4,
      name: "Big Scale",
      slug: "big-scale",
      description:
        "Large-scale tattoos designed with strong composition and detail.",
    },
    {
      id: 5,
      name: "Colour",
      slug: "colour",
      description:
        "Colour tattoos with bold tones, contrast, and detailed artwork.",
    },
    {
      id: 6,
      name: "Medium Scale",
      slug: "medium-scale",
      description:
        "Balanced tattoo designs suited for medium-sized placements.",
    },
    {
      id: 7,
      name: "Minimal",
      slug: "minimal",
      description:
        "Simple, clean tattoos using minimal lines and detail.",
    },
  ];

export const styles: Style[] = styleDefinitions.map((style) => {
  const categoryImages = tattooImages.filter(
    (tattoo) => tattoo.slug === style.slug
  );

  const featuredKey = tattooConfig.styleFeatured[style.slug];

  const featuredImage = tattooImages.find(
    (tattoo) => tattoo.key === featuredKey
  );

  return {
    ...style,
    image: featuredImage?.image ?? categoryImages[0]?.image ?? "",
    count: categoryImages.length,
  };
});