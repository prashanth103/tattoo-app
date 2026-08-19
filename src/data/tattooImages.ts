import type { Tattoo } from "@/types";
import { tattooConfig } from "@/data/tattooConfig";

const imageModules = import.meta.glob("@/assets/images/*/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const categoryMap: Record<string, string> = {
  portrait: "Portrait",
  coverup: "Cover Up",
  "arm-band": "Band",
  "big-scale": "Big Scale",
  colour: "Colour",
  "medium-scale": "Medium Scale",
  minimal: "Minimal",
  "custom-tattoo": "Custom Tattoos",
};

const getAspect = (path: string): Tattoo["aspect"] => {
  if (path.includes("/landscape/")) return "landscape";
  if (path.includes("/square/")) return "square";

  return "portrait";
};

const getArtistId = (key: string): number => {
  const saiPortfolio: readonly string[] =
    tattooConfig.artistPortfolios["sai-sagar"];

  const luffyPortfolio: readonly string[] =
    tattooConfig.artistPortfolios["monkey-d-luffy"];

  if (saiPortfolio.includes(key)) {
    return 1;
  }

  if (luffyPortfolio.includes(key)) {
    return 2;
  }

  return 0;
};

export const tattooImages: Tattoo[] = Object.entries(imageModules)
  .map(([path, image], index) => {
    const match = path.match(/\/images\/([^/]+)\/([^/]+)\.webp$/);

    if (!match) return null;

    const [, folder, filename] = match;

    const category = categoryMap[folder];

    if (!category) return null;

    const key = filename;

    return {
      id: index + 1,
      key,
      title: `${category} Tattoo ${String(index + 1).padStart(3, "0")}`,
      category,
      slug: folder,
      filename,
      artistId: getArtistId(key),
      image,
      aspect: getAspect(path),
    };
  })
  .filter((tattoo): tattoo is Tattoo => tattoo !== null);