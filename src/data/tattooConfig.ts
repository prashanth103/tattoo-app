export const tattooConfig = {
  /*
   * Artist ownership
   * Change these lists whenever you want to move tattoos
   * between artists.
   */
  artistPortfolios: {
    "sai-sagar": [
      "portrait-001",
      "portrait-003",
      "portrait-005",
      "portrait-008",
      "colour-001",
      "colour-004",
      "big-scale-002",
      "big-scale-005",
      "medium-scale-001",
      "medium-scale-004",
      "minimal-001",
      "minimal-003",
    ],

    "monkey-d-luffy": [
      "portrait-002",
      "portrait-004",
      "portrait-006",
      "portrait-009",
      "coverup-001",
      "coverup-003",
      "arm-band-001",
      "arm-band-004",
      "colour-002",
      "big-scale-003",
      "medium-scale-002",
      "minimal-002",
    ],
  },

  /*
   * 3 strongest tattoos for Featured Work.
   */
  featured: [
    "big-scale-022",
    "colour-011",
    "big-scale-005",
  ],

  /*
   * One deliberately selected image for each style card.
   */
  styleFeatured: {
    portrait: "portrait-011",
    coverup: "coverup-003",
    "arm-band": "arm-band-019",
    "big-scale": "big-scale-016",
    colour: "colour-005",
    "medium-scale": "medium-scale-028",
    minimal: "minimal-001",
  },

  /*
   * 8 selected tattoos from different categories
   * for the homepage Gallery section.
   */
  galleryFeatured: [
    "portrait-005",
    "coverup-008",
    "arm-band-027",
    "big-scale-023",
    "colour-001",
    "medium-scale-003",
    "minimal-041",
    "portrait-013",
  ],

  /*
   * 3 strongest tattoos for Custom Tattoos.
   */
  customTattoos: [
    "custom-tattoo-001",
  ],
} as const;