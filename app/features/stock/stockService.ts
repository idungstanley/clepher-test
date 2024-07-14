import { DetailsProps } from "@/app/components/Details";
import { QuoteReq, SearchReq, WeeklyStockData } from "@/app/types/index.interface";
import requestNew from "@/app/utils/requestNew";

export const searchSymbol = async (query: string) => {
    const data = await requestNew<SearchReq>({
        url: `/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    });
    return data;
};

export const fetchStockDetails = async (stockSymbol: string) => {
    const data = await requestNew<DetailsProps>({
        url: `/query?function=OVERVIEW&symbol=${stockSymbol}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    });
    return data;
};

export const fetchQuote = async (stockSymbol: string) => {
    const data = await requestNew<QuoteReq>({
        url: `/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    });
    return data;
};

export const fetchWeeklyAdjustedData = async (stockSymbol: string) => {
    const data = await requestNew<WeeklyStockData>({
        url: `/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${stockSymbol}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    });
    return data;

};