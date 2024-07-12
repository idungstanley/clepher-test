export interface ThemeContextValue {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}

export interface StockContextType {
    stockSymbol: string;
    setStockSymbol: (symbol: string) => void;
}

export interface ResultsProps {
    symbol: string;
    description: string;
}

export interface SearchResultsProps {
    results: BestMatches[];
}

export interface OverviewProps {
    symbol: string;
    price: string;
    change: number;
    changePercent: string;
    currency: string;
}

export interface ChartFilterProps {
    text: string;
    active: boolean;
    onClick: () => void;
}

export interface SearchReq {
    bestMatches: BestMatches[]
}

export interface BestMatches {
    symbol: string;
    name: string;
    type: string;
    region: string;
    marketOpen: string;
    marketClose: string;
    timezone: string;
    currency: string;
    matchScore: string;
}