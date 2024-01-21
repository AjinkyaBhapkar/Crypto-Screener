const axios = require("axios");

const getBinanceData = {
  getTickers: async () => {
    try {
      const { data } = await axios.get(
        `https://fapi.binance.com/fapi/v1/ticker/price`
      );
      const allTickers = data;
      return allTickers;
    } catch (error) {
      console.log("ERROR helper getTickers");
      console.log(error);
    }
  },
  filterValidTickers: (tickers) => {
    try {
      const validTickers = tickers.filter(
        (d) => d.symbol.includes("USDT") && !d.symbol.includes("_")
      );
      return validTickers;
    } catch (error) {
      console.log("ERROR helper filterValidTickers");
      console.log(error);
    }
  },
  getTickerData: async (ticker, timeFrame, limit) => {
    try {
      const { data } = await axios.get(
        `https://fapi.binance.com/fapi/v1/klines?symbol=${ticker}&interval=${timeFrame}&limit=${limit}`
      );
      const tickerData = data;
      return tickerData;
    } catch (error) {
      console.log("ERROR helper getTickerData");
      console.log(error);
    }
  },
};

module.exports = getBinanceData;
