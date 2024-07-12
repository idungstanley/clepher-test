import { SearchReq } from "@/app/types/index.interface";
import requestNew from "@/app/utils/requestNew";
import { useQuery } from "@tanstack/react-query";

const basePath = "https://finnhub.io/api/v1";

export const searchSymbol = async (query: string) => {
    const data = await requestNew<SearchReq>({
        url: `/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    });
    return data;
};

export const fetchStockDetails = async (stockSymbol) => {
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return await response.json();
};

export const fetchQuote = async (stockSymbol) => {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return await response.json();
};

export const fetchHistoricalData = async (
    stockSymbol,
    resolution,
    from,
    to
) => {
    const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return await response.json();
};