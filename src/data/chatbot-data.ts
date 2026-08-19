import type { ChatbotConfig } from "@/types/chatbot";
import { CONTACT } from "@/constants/contact";

const chatbotData: ChatbotConfig = {
  botName: "Samava",

  // ── Welcome ──────────────────────────────────────────────────────────
  welcomeMessage: [
    {
      type: "text",
      content: `Hey! 👋 Welcome to ${CONTACT.address.name}. How can we help you today?`,
    },
  ],
  welcomeQuickReplies: [
    { label: "📅 Book a Tattoo", intentId: "booking" },
    { label: "💰 Pricing", intentId: "pricing" },
    { label: "🎨 Styles", intentId: "styles" },
    { label: "🖼️ Portfolio", intentId: "portfolio" },
    { label: "🕐 Studio Hours", intentId: "hours" },
    { label: "📍 Location", intentId: "location" },
    { label: "🩹 Aftercare", intentId: "aftercare" },
  ],

  // ── Fallback ─────────────────────────────────────────────────────────
  fallbackResponses: [
    [
      {
        type: "text",
        content:
          "I'm not sure I can answer that one! For anything specific, our team is happy to help on WhatsApp.",
      },
      {
        type: "button",
        label: "💬 Chat on WhatsApp",
        action: "whatsapp",
        value: "Hi, I have a question about Samava Tattoo Studio.",
      },
    ],
    [
      {
        type: "text",
        content:
          "Hmm, I don't have an answer for that. Let me connect you with our team — they can help!",
      },
      {
        type: "button",
        label: "💬 WhatsApp Us",
        action: "whatsapp",
        value: "Hi, I need help with something.",
      },
    ],
  ],
  fallbackQuickReplies: [
    { label: "📋 Main Menu", intentId: "greeting" },
    { label: "📞 Contact Us", intentId: "contact" },
  ],

  // ── Intents ──────────────────────────────────────────────────────────
  intents: [
    // ─── Greeting ───────────────────────────────────────────────────
    {
      id: "greeting",
      keywords: ["hi", "hello", "hey", "sup", "yo", "start", "menu", "help", "main menu"],
      responses: [
        [{ type: "text", content: "Hey there! 👋 What can I help you with?" }],
        [{ type: "text", content: "Hi! Welcome to Samava Tattoo Studio. How can I help?" }],
      ],
      quickReplies: [
        { label: "📅 Book a Tattoo", intentId: "booking" },
        { label: "💰 Pricing", intentId: "pricing" },
        { label: "🎨 Styles", intentId: "styles" },
        { label: "🖼️ Portfolio", intentId: "portfolio" },
        { label: "🕐 Studio Hours", intentId: "hours" },
        { label: "📍 Location", intentId: "location" },
        { label: "🩹 Aftercare", intentId: "aftercare" },
      ],
    },

    // ─── Booking ────────────────────────────────────────────────────
    {
      id: "booking",
      keywords: [
        "book",
        "appointment",
        "consultation",
        "session",
        "schedule",
        "reserve",
        "slot",
        "available",
        "availability",
        "walk-in",
        "walkin",
      ],
      responses: [
        [
          { type: "text", content: "We'd love to get you booked in! 🙌" },
          {
            type: "text",
            content:
              "The best way to start is to share your tattoo idea with us on WhatsApp. We'll discuss the design, size, placement, and find a time that works for you.",
          },
          {
            type: "button",
            label: "💬 Book on WhatsApp",
            action: "whatsapp",
            value: "Hi, I'd like to book a tattoo consultation.",
          },
          {
            type: "button",
            label: "📞 Call Us",
            action: "call",
            value: `tel:${CONTACT.phoneFormatted}`,
          },
        ],
      ],
      quickReplies: [
        { label: "💰 Pricing", intentId: "pricing" },
        { label: "🎨 See Styles", intentId: "styles" },
        { label: "📋 Main Menu", intentId: "greeting" },
      ],
    },

    // ─── Pricing (human-handoff) ────────────────────────────────────
    {
      id: "pricing",
      keywords: [
        "price",
        "cost",
        "rate",
        "how much",
        "charge",
        "fee",
        "budget",
        "expensive",
        "cheap",
        "money",
        "pricing",
        "quote",
      ],
      responses: [
        [
          {
            type: "text",
            content:
              "Tattoo pricing depends on the size, style, placement, and complexity of the design. Every tattoo is unique, so we provide personalized quotes.",
          },
          {
            type: "text",
            content:
              "Share your idea with us on WhatsApp and we'll give you an accurate estimate! 💬",
          },
          {
            type: "button",
            label: "💬 Get a Quote on WhatsApp",
            action: "whatsapp",
            value: "Hi, I'd like to know the pricing for a tattoo.",
          },
        ],
      ],
      quickReplies: [
        { label: "📅 Book a Tattoo", intentId: "booking" },
        { label: "🎨 See Styles", intentId: "styles" },
        { label: "📋 Main Menu", intentId: "greeting" },
      ],
    },

    // ─── Styles ─────────────────────────────────────────────────────
    {
      id: "styles",
      keywords: [
        "style",
        "styles",
        "realism",
        "minimal",
        "colour",
        "color",
        "portrait",
        "cover up",
        "coverup",
        "band",
        "big scale",
        "medium scale",
        "fine line",
        "blackwork",
        "geometric",
        "anime",
        "type",
        "kind",
      ],
      responses: [
        [
          {
            type: "text",
            content:
              "We work across a wide range of tattoo styles! Here are some of our specialities:",
          },
          {
            type: "list",
            title: "Tattoo Styles",
            items: [
              "🎨 Portrait — Realistic faces and figures",
              "📷 Realism — Photographic depth and detail",
              "🌈 Colour — Vibrant, saturated colour work",
              "🖤 Big Scale — Large statement pieces",
              "🔄 Cover Up — Transform old tattoos",
              "✨ Minimal — Clean, simple designs",
              "📐 Medium Scale — Mid-size detailed work",
              "〰️ Band — Armband and wristband designs",
            ],
          },
          { type: "link", label: "Browse All Styles →", url: "/styles" },
        ],
      ],
      quickReplies: [
        { label: "🖼️ See Portfolio", intentId: "portfolio" },
        { label: "📅 Book a Tattoo", intentId: "booking" },
        { label: "📋 Main Menu", intentId: "greeting" },
      ],
    },

    // ─── Aftercare ──────────────────────────────────────────────────
    {
      id: "aftercare",
      keywords: [
        "aftercare",
        "heal",
        "healing",
        "care",
        "wash",
        "moisturize",
        "lotion",
        "cream",
        "scab",
        "peel",
        "infection",
        "swollen",
        "red",
        "itchy",
        "itch",
      ],
      responses: [
        [
          {
            type: "text",
            content:
              "Great question! Proper aftercare is key to a beautiful tattoo. Here's what we recommend:",
          },
          {
            type: "list",
            title: "Tattoo Aftercare Guide",
            items: [
              "Keep the wrap on for 2–4 hours after your session",
              "Gently wash with lukewarm water and fragrance-free soap",
              "Pat dry — never rub",
              "Apply a thin layer of recommended aftercare ointment",
              "Moisturize 2–3 times daily for the first 2 weeks",
              "Avoid direct sunlight, swimming, and soaking for 2–3 weeks",
              "Don't scratch or pick at scabs — let them fall off naturally",
              "Wear loose clothing over the tattooed area",
            ],
          },
          {
            type: "text",
            content: "If you notice anything unusual during healing, reach out to us right away!",
          },
          {
            type: "button",
            label: "💬 Ask About Healing",
            action: "whatsapp",
            value: "Hi, I have a question about tattoo aftercare.",
          },
        ],
      ],
      quickReplies: [
        { label: "😬 Does It Hurt?", intentId: "pain" },
        { label: "📅 Book a Tattoo", intentId: "booking" },
        { label: "📋 Main Menu", intentId: "greeting" },
      ],
    },

    // ─── Hours ──────────────────────────────────────────────────────
    {
      id: "hours",
      keywords: [
        "hours",
        "open",
        "timing",
        "timings",
        "when",
        "close",
        "schedule",
        "working hours",
        "time",
      ],
      responses: [
        [
          { type: "text", content: `We're open daily! 🕐` },
          { type: "text", content: `⏰ Studio Hours: ${CONTACT.hours}` },
          { type: "text", content: `📍 ${CONTACT.address.name}, ${CONTACT.address.short}` },
          {
            type: "text",
            content:
              "We recommend booking an appointment in advance, but feel free to walk in during studio hours!",
          },
        ],
      ],
      quickReplies: [
        { label: "📍 Location", intentId: "location" },
        { label: "📅 Book a Tattoo", intentId: "booking" },
        { label: "📋 Main Menu", intentId: "greeting" },
      ],
    },

    // ─── Location ───────────────────────────────────────────────────
    {
      id: "location",
      keywords: [
        "where",
        "location",
        "address",
        "directions",
        "map",
        "find",
        "reach",
        "how to reach",
        "route",
        "madhapur",
        "hyderabad",
      ],
      responses: [
        [
          { type: "text", content: "Here's where you'll find us! 📍" },
          {
            type: "text",
            content: `${CONTACT.address.name}\n${CONTACT.address.street}, ${CONTACT.address.city}\n${CONTACT.address.state}, ${CONTACT.address.country}`,
          },
          {
            type: "link",
            label: "📍 Open in Google Maps",
            url: "https://maps.google.com/?q=Samava+Tattoo+Studio+Madhapur+Hyderabad",
            external: true,
          },
        ],
      ],
      quickReplies: [
        { label: "🕐 Studio Hours", intentId: "hours" },
        { label: "📅 Book a Tattoo", intentId: "booking" },
        { label: "📋 Main Menu", intentId: "greeting" },
      ],
    },

    // ─── Contact ────────────────────────────────────────────────────
    {
      id: "contact",
      keywords: ["contact", "phone", "email", "call", "reach", "number", "whatsapp", "connect"],
      responses: [
        [
          { type: "text", content: "You can reach us through any of these channels! 📱" },
          { type: "text", content: `📞 Phone: ${CONTACT.phone}\n📧 Email: ${CONTACT.email}` },
          {
            type: "button",
            label: "💬 WhatsApp",
            action: "whatsapp",
            value: "Hi, I'd like to get in touch with Samava Tattoo Studio.",
          },
          {
            type: "button",
            label: "📞 Call Now",
            action: "call",
            value: `tel:${CONTACT.phoneFormatted}`,
          },
          { type: "link", label: "📸 Instagram", url: CONTACT.socials.instagram, external: true },
        ],
      ],
      quickReplies: [
        { label: "📅 Book a Tattoo", intentId: "booking" },
        { label: "📋 Main Menu", intentId: "greeting" },
      ],
    },

    // ─── Artists ────────────────────────────────────────────────────
    {
      id: "artists",
      keywords: ["artist", "artists", "who", "team", "member", "tattooer", "tattooist", "staff"],
      responses: [
        [
          {
            type: "text",
            content:
              "Our studio has talented artists who specialize in a range of styles. Each artist brings their own unique approach to custom tattoo work.",
          },
          {
            type: "text",
            content:
              "Check out their profiles and portfolios to find the right fit for your tattoo idea! 🎨",
          },
          { type: "link", label: "👩‍🎨 Meet the Artists →", url: "/artists" },
        ],
      ],
      quickReplies: [
        { label: "🖼️ See Portfolio", intentId: "portfolio" },
        { label: "📅 Book a Tattoo", intentId: "booking" },
        { label: "📋 Main Menu", intentId: "greeting" },
      ],
    },

    // ─── Portfolio ──────────────────────────────────────────────────
    {
      id: "portfolio",
      keywords: [
        "portfolio",
        "gallery",
        "work",
        "tattoo",
        "tattoos",
        "photo",
        "photos",
        "pictures",
        "previous",
        "examples",
        "sample",
      ],
      responses: [
        [
          {
            type: "text",
            content:
              "Check out our gallery to see the work our artists have done! From realism to minimal — it's all in there. 🖼️",
          },
          { type: "link", label: "🖼️ View Gallery →", url: "/gallery" },
        ],
      ],
      quickReplies: [
        { label: "🎨 See Styles", intentId: "styles" },
        { label: "📅 Book a Tattoo", intentId: "booking" },
        { label: "📋 Main Menu", intentId: "greeting" },
      ],
    },

    // ─── Cover-Up (human-handoff) ───────────────────────────────────
    {
      id: "cover-up",
      keywords: ["cover up", "coverup", "cover-up", "old tattoo", "redo", "fix tattoo", "rework"],
      responses: [
        [
          {
            type: "text",
            content:
              "We do cover-up tattoos! 🔄 The best approach depends on the size, colour, and placement of your existing tattoo.",
          },
          {
            type: "text",
            content:
              "Send us a photo of your current tattoo on WhatsApp and we'll discuss the best cover-up options for you.",
          },
          {
            type: "button",
            label: "💬 Send Photo on WhatsApp",
            action: "whatsapp",
            value: "Hi, I'd like to discuss a cover-up tattoo. Here's my current tattoo:",
          },
        ],
      ],
      quickReplies: [
        { label: "🎨 See Styles", intentId: "styles" },
        { label: "📋 Main Menu", intentId: "greeting" },
      ],
    },

    // ─── Pain ───────────────────────────────────────────────────────
    {
      id: "pain",
      keywords: [
        "pain",
        "hurt",
        "painful",
        "does it hurt",
        "pain level",
        "tolerant",
        "sensitive",
        "uncomfortable",
      ],
      responses: [
        [
          {
            type: "text",
            content:
              "Great question! 😊 Pain varies from person to person and depends on the tattoo's placement.",
          },
          {
            type: "list",
            title: "Pain Levels by Area",
            items: [
              "🟢 Low pain — Outer arm, thigh, calf, shoulder",
              "🟡 Moderate — Inner arm, back, chest",
              "🔴 Higher pain — Ribs, spine, neck, hands, feet",
            ],
          },
          {
            type: "text",
            content:
              "Most people describe it as a scratching or buzzing sensation. Our artists work at a comfortable pace and you can take breaks anytime!",
          },
        ],
      ],
      quickReplies: [
        { label: "🩹 Aftercare Tips", intentId: "aftercare" },
        { label: "📅 Book a Tattoo", intentId: "booking" },
        { label: "📋 Main Menu", intentId: "greeting" },
      ],
    },

    // ─── First Tattoo ───────────────────────────────────────────────
    {
      id: "first-tattoo",
      keywords: [
        "first tattoo",
        "first time",
        "never",
        "beginner",
        "new to",
        "nervous",
        "scared",
        "worried",
        "anxious",
        "virgin",
      ],
      responses: [
        [
          {
            type: "text",
            content:
              "Getting your first tattoo is exciting! Here are some tips to make it a great experience: 🌟",
          },
          {
            type: "list",
            title: "First Tattoo Tips",
            items: [
              "Start with a design you truly love — it doesn't have to be big",
              "Choose a less sensitive area (arm, shoulder, thigh) for your first piece",
              "Eat well and stay hydrated before your appointment",
              "Wear comfortable clothing that gives easy access to the tattoo area",
              "Don't hesitate to ask questions during your consultation",
              "Trust your artist — they'll guide you through the whole process",
            ],
          },
          {
            type: "text",
            content:
              "Our artists are great with first-timers. We'll make sure you feel comfortable every step of the way! 💪",
          },
        ],
      ],
      quickReplies: [
        { label: "😬 Does It Hurt?", intentId: "pain" },
        { label: "💰 Pricing", intentId: "pricing" },
        { label: "📅 Book a Tattoo", intentId: "booking" },
        { label: "📋 Main Menu", intentId: "greeting" },
      ],
    },

    // ─── Custom Design (human-handoff) ──────────────────────────────
    {
      id: "custom-design",
      keywords: [
        "custom",
        "design",
        "my idea",
        "reference",
        "sketch",
        "draw",
        "create",
        "unique",
        "original",
        "personalized",
      ],
      responses: [
        [
          {
            type: "text",
            content:
              "We specialize in custom tattoo designs! ✏️ Every piece we create starts with your idea.",
          },
          {
            type: "text",
            content:
              "Share your concept, reference images, or even a rough sketch with us on WhatsApp. We'll discuss the design, placement, and details together.",
          },
          {
            type: "button",
            label: "💬 Share Your Idea",
            action: "whatsapp",
            value: "Hi, I have a custom tattoo idea I'd like to discuss.",
          },
        ],
      ],
      quickReplies: [
        { label: "🎨 See Styles", intentId: "styles" },
        { label: "🖼️ Portfolio", intentId: "portfolio" },
        { label: "📋 Main Menu", intentId: "greeting" },
      ],
    },

    // ─── Reschedule / Cancel (human-handoff) ────────────────────────
    {
      id: "reschedule",
      keywords: [
        "reschedule",
        "cancel",
        "change date",
        "move appointment",
        "postpone",
        "delay",
        "different day",
        "cancellation",
      ],
      responses: [
        [
          {
            type: "text",
            content:
              "Need to reschedule or cancel? No worries — just reach out to us directly and we'll sort it out. 📅",
          },
          {
            type: "button",
            label: "💬 Message on WhatsApp",
            action: "whatsapp",
            value: "Hi, I need to reschedule/cancel my tattoo appointment.",
          },
          {
            type: "button",
            label: "📞 Call Us",
            action: "call",
            value: `tel:${CONTACT.phoneFormatted}`,
          },
        ],
      ],
      quickReplies: [
        { label: "📅 Book a Tattoo", intentId: "booking" },
        { label: "📋 Main Menu", intentId: "greeting" },
      ],
    },

    // ─── Thanks ─────────────────────────────────────────────────────
    {
      id: "thanks",
      keywords: [
        "thanks",
        "thank you",
        "thx",
        "ty",
        "appreciate",
        "cheers",
        "great",
        "perfect",
        "awesome",
        "cool",
        "nice",
      ],
      responses: [
        [
          {
            type: "text",
            content: "You're welcome! 😊 Let us know if there's anything else we can help with.",
          },
        ],
        [{ type: "text", content: "Happy to help! Feel free to ask anything else. 🙌" }],
        [{ type: "text", content: "Anytime! We're here if you need us. ✨" }],
      ],
      quickReplies: [
        { label: "📅 Book a Tattoo", intentId: "booking" },
        { label: "📋 Main Menu", intentId: "greeting" },
      ],
    },

    // ─── Bye ────────────────────────────────────────────────────────
    {
      id: "bye",
      keywords: ["bye", "goodbye", "see you", "later", "cya", "take care"],
      responses: [
        [
          {
            type: "text",
            content: "See you soon! 👋 Can't wait to help you with your next tattoo.",
          },
        ],
        [{ type: "text", content: "Bye! Feel free to come back anytime. We're always here. 😊" }],
      ],
      quickReplies: [{ label: "📅 Book a Tattoo", intentId: "booking" }],
    },
  ],
};

export default chatbotData;
