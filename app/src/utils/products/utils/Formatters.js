import { icons } from "../../constants/images/Icons";

/**
 * Returns the icon component based on the site name.
 * @param {string} siteName - The name of the site.
 * @returns {React.Component|null} The icon component for the site, or null if not found.
 */
export const getIconComponent = (siteName) => {
  const siteIcons = {
    "amazon.com": icons.Amazon,
    "bol.com": icons.Bolcom,
    "coolblue.nl": icons.Coolblue,
  };

  return siteIcons[siteName] || null;
};

/**
 * Formats the given price into a currency string. Format: €X,XXX.XX
 *
 * @param {number} price - The price to be formatted.
 * @returns {string} The formatted price as a currency string.
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

/**
 * Formats a given date and time into a specific format. Format: DD-MM-YYYY HH:MM
 *
 * @param {string} dateTime - The date and time to be formatted.
 * @returns {string} The formatted date and time.
 */
export const formatDateTime = (dateTime) => {
  const date = new Date(dateTime);
  const formattedDate = date.toLocaleDateString("en-GB").replace(/\//g, "-");
  const formattedTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${formattedDate} ${formattedTime}`;
};

/**
 * Generates chart data based on the given prices and selected data.
 *
 * @param {Array} prices - The array of prices.
 * @param {string} selectedData - The selected data option ("1M", "1Y", or "All").
 * @returns {Object} The chart data object.
 */
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
