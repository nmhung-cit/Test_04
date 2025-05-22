export interface IContent {
  url: string;
  name?: string;
  icon?: string;
}

export interface Idata {
  title: string;
  content: IContent[];
}

export const data: Idata[] = [
  {
    title: "About Us",
    content: [
      {
        url: "/about",
        name: "Careers",
      },
      { url: "/Company", name: "Company Details" },
      { url: "/Terms", name: "Terms & Conditions" },
      { url: "/Help", name: "Help center" },
      { url: "/Privacy", name: "Privacy Policy" },
      { url: "/Affiliate", name: "Affiliate" },
    ],
  },
  {
    title: "Products",
    content: [
      {
        url: "/Marketplace",
        name: "NFT Marketplace",
      },
      { url: "/Slingshot", name: "Slingshot" },
      { url: "/Swaps", name: "Swaps" },
      { url: "/Launchpad", name: "NFT Launchpad" },
      { url: "/Runes", name: "Runes Platform" },
      { url: "/Creator", name: "Creator Dashboard" },
    ],
  },
  {
    title: "Resources",
    content: [
      {
        url: "/Support",
        name: "Support",
      },
      { url: "/API", name: "API" },
      { url: "/Feature", name: "Feature Requests" },
      { url: "/Trust", name: "Trust & Safety" },
      { url: "/Sitemap", name: "Sitemap" },
    ],
  },
  {
    title: "Contact Us",
    content: [
      {
        url: "/Support",
        name: "support@tech.email",
      },
      { url: "/affiliate", name: "affiliate@tech.com" },
      { url: "/install", icon: "/images/logo/installapp.png" },
    ],
  },
];
