/**
 * blogsData.js
 * Centralised data for the Blogs page.
 * All image assets are served from the local public/blogs folder.
 */

// ------- Hero -------
export const heroBgImage = "/blogs/hero-bg.png";

export const heroPost = {
  category: "Product Education",
  title:
    "ATM vs. IP68: Deciphering the Water Resistance Standards of Your Smartwatch",
  excerpt:
    "You bought a waterproof Smartwatch, but do you know exactly how much pressure it can handle? How do the ATM (Atmospheric Pressure) and IP68 (Ingress Protection) standards differ? Don't let a misunderstanding ruin your watch. Read our detailed guide now to protect your device during a swim or in the rain...",
  date: "Nov 15, 2026",
  readMoreLink: "/blogs/atm-vs-ip68",
};

// ------- Trending -------
export const trendingPosts = [
  {
    id: "t1",
    image: "/blogs/trend-1.png",
    category: "Sports Performance",
    title:
      "Which Strap is Best for Marathon Running and Long-Distance Cycling?",
    excerpt:
      "Compare strap materials for high-intensity, prolonged exercise: Nylon Loop (ultra-light, breathable), Sport Silicone (sweatproof, easy to clean), and Trail Loop (durable, quick adjustment)...",
    date: "Nov 15, 2025",
    readMoreLink: "/blogs/strap-marathon",
    size: "large",
  },
  {
    id: "t2",
    image: "/blogs/trend-2.png",
    category: "Sports Performance",
    title:
      "Transform Your Smartwatch into a Bike Computer: Handlebar Mount Guide",
    excerpt: "",
    date: "Nov 15, 2025",
    readMoreLink: "/blogs/bike-computer",
    size: "small",
  },
];

// ------- For You -------
export const forYouPosts = [
  {
    id: "fy1",
    image: "/blogs/foryou-1.png",
    category: "Tips & Tricks",
    title:
      "4 Simple Steps to Change Your Smartwatch Band at Home in 30 Seconds",
    excerpt:
      "Do you have many straps but hesitate to change them for fear of scratching your watch? The truth is, changing a Quick Release band is incredibly simple...",
    date: "Nov 15, 2026",
    side: "left",
  },
  {
    id: "fy2",
    image: "/blogs/foryou-2.png",
    category: "Lifestyle",
    title:
      "Smartwatches at Formal Events: How to Transform Your Sport Watch into a Dress Watch",
    excerpt:
      "Don't let your sport watch (like a Garmin Fenix or Apple Watch) clash with your suit! The secret lies in the accessories....",
    date: "Nov 10, 2025",
    side: "right",
  },
  {
    id: "fy3",
    image: "/blogs/foryou-3.png",
    category: "Lifestyle",
    title:
      "Smartwatch Color Palette 2025: The Strap Color Trends You Can't Miss",
    excerpt:
      "Introduce 5 color straps predicted to be the hot trends of the year (e.g., Sage Green, Lavender, Titanium Grey)....",
    date: "Nov 10, 2025",
    side: "right",
  },
];

// ------- Latest Blogs -------
export const latestPosts = [
  {
    id: "lb1",
    image: "/blogs/blog-tall.png",
    category: "Product Review",
    title:
      "The Secret to Extending Smartwatch Battery Life When Tracking Your 10-Hour Route",
    date: "Nov 15, 2026",
    textOnImage: false,
    size: "tall",
  },
  {
    id: "lb2",
    image: "/blogs/blog-mid1.png",
    category: "Lifestyle",
    title:
      "Smartwatch Color Palette 2025: The Strap Color Trends You Can't Miss",
    date: "Nov 15, 2026",
    textOnImage: false,
    size: "small",
  },
  {
    id: "lb3",
    image: "/blogs/blog-right1.png",
    category: "Product Review",
    title: "Apple Watch vs. Garmin Approach: Which Watch is Best for Golfers?",
    date: "Nov 15, 2026",
    textOnImage: true,
    size: "small",
  },
  {
    id: "lb4",
    image: "/blogs/blog-right2.png",
    category: "Lifestyle",
    title:
      "Camping Style: Turning Nylon Straps into Professional Outdoor Accessories",
    date: "Nov 15, 2026",
    textOnImage: true,
    size: "small",
  },
  {
    id: "lb5",
    image: "/blogs/blog-mid2.png",
    category: "Lifestyle",
    title:
      "Camping Style: Turning Nylon Straps into Professional Outdoor Accessories",
    date: "Nov 15, 2026",
    textOnImage: true,
    size: "small",
  },
];
