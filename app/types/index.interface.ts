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
    symbol?: string;
    price?: string;
    change?: number;
    changePercent?: string;
    currency: string;
}

export interface ChartFilterProps {
    text: string;
    active: boolean;
    onClick: () => void;
}

export interface SearchReq {
    bestMatches: SearchItem[];
}
export interface QuoteReq {
    "Global Quote": QuoteItem;
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
export interface GlobalQuote {
    symbol: string;
    open: string;
    high: string;
    low: string;
    price: string;
    volume: string;
    ltd: string;
    cp: string;
    change: number;
    pc: string;
}


export interface ChartConfigItem {
    resolution: string;
    days: number;
    weeks: number;
    months: number;
    years: number;
}

export type ChartConfig = {
    [key: string]: ChartConfigItem;
};

export type FilterOptions = '1D' | '1W' | '1M' | '1Y';


interface OptionData {
    contractID: string;
    symbol: string;
    expiration: string;
    strike: string;
    type: 'call' | 'put';
    last: string;
    mark: string;
    bid: string;
    bid_size: string;
    ask: string;
    ask_size: string;
    volume: string;
    open_interest: string;
    date: string;
    implied_volatility: string;
    delta: string;
    gamma: string;
    theta: string;
    vega: string;
    rho: string;
}

export interface HistoryDataReq {
    endpoint: string;
    message: string;
    data: OptionData[];
}

export interface SearchItem {
    "1. symbol": string;
    "2. name": string;
    "3. type": string;
    "4. region": string;
    "5. marketOpen": string;
    "6. marketClose": string;
    "7. timezone": string;
    "8. currency": string;
    "9. matchScore": string;
}
export interface QuoteItem {
    "01. symbol": string;
    "02. open": string;
    "03. high": string;
    "04. low": string;
    "05. price": string;
    "06. volume": string;
    "07. latest trading day": string;
    "08. previous close": string;
    "09. change": number;
    "10. change percent": string;
}

interface MetaData {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Time Zone": string;
}

interface WeeklyData {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. volume": string;
}

interface WeeklyTimeSeries {
    [date: string]: WeeklyData;
}

export interface WeeklyStockData {
    "Meta Data": MetaData;
    "Weekly Adjusted Time Series": WeeklyTimeSeries;
}

export interface ChartProps {
    x: string;
    y: string[];
}
