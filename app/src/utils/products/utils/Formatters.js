import { icons } from "../../constants/images/Icons";

export const getIconComponent = (siteName) => {
  const siteIcons = {
    "amazon.com": icons.Amazon,
    "bol.com": icons.Bolcom,
    "coolblue.nl": icons.Coolblue,
    // Add more mappings as needed
  };

  return siteIcons[siteName] || null;
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

export const formatDateTime = (dateTime) => {
  const date = new Date(dateTime);
  const formattedDate = date.toLocaleDateString("en-GB").replace(/\//g, "-");
  const formattedTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${formattedDate} ${formattedTime}`;
};
