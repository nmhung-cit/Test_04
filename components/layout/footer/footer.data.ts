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
        url: "/",
        name: "Careers",
      },
      { url: "/", name: "Company Details" },
      { url: "/", name: "Terms & Conditions" },
      { url: "/", name: "Help center" },
      { url: "/", name: "Privacy Policy" },
      { url: "/", name: "Affiliate" },
    ],
  },
  {
    title: "Products",
    content: [
      {
        url: "/",
        name: "NFT Marketplace",
      },
      { url: "/", name: "Slingshot" },
      { url: "/", name: "Swaps" },
      { url: "/", name: "NFT Launchpad" },
      { url: "/", name: "Runes Platform" },
      { url: "/", name: "Creator Dashboard" },
    ],
  },
  {
    title: "Resources",
    content: [
      {
        url: "/",
        name: "Support",
      },
      { url: "/", name: "API" },
      { url: "/", name: "Feature Requests" },
      { url: "/", name: "Trust & Safety" },
      { url: "/", name: "Sitemap" },
    ],
  },
  {
    title: "Contact Us",
    content: [
      {
        url: "/",
        name: "support@tech.email",
      },
      { url: "/", name: "affiliate@tech.com" },
      { url: "/", icon: "/images/logo/installapp.png" },
    ],
  },
];
