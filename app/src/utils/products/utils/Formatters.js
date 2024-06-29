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

export const generateChartData = (prices, selectedData) => {
  const filteredPrices = prices.filter((price) => {
    const priceDate = new Date(price.date);
    const today = new Date();

    switch (selectedData) {
      case "1M":
        return priceDate >= new Date(today.setMonth(today.getMonth() - 1));
      case "1Y":
        return (
          priceDate >= new Date(today.setFullYear(today.getFullYear() - 1))
        );
      case "All":
      default:
        return true;
    }
  });

  return {
    labels: filteredPrices.map((price) =>
      new Date(price.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Price",
        data: filteredPrices.map((price) => price.price),
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  };
};
