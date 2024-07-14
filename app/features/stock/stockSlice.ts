import { BestMatches, GlobalQuote, QuoteItem, SearchItem } from '@/app/types/index.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
    searchResult: BestMatches[];
    quoteResult: GlobalQuote | null;
}

const initialState: InitialState = {
    searchResult: [],
    quoteResult: null
};

export const stockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers: {
        setSearchResult: (state, action: PayloadAction<SearchItem[]>) => {
            state.searchResult = action.payload.map((item) => ({
                symbol: item['1. symbol'],
                name: item['2. name'],
                type: item['3. type'],
                region: item['4. region'],
                marketOpen: item['5. marketOpen'],
                marketClose: item['6. marketClose'],
                timezone: item['7. timezone'],
                currency: item['8. currency'],
                matchScore: item['9. matchScore'],
            }));
        },
        setQuoteResult: (state, action: PayloadAction<QuoteItem | null>) => {
            if (!action.payload) {
                state.quoteResult = null;
                return;
            }
            state.quoteResult = {
                symbol: action.payload['01. symbol'],
                open: action.payload['02. open'],
                high: action.payload['03. high'],
                low: action.payload['04. low'],
                price: action.payload['05. price'],
                volume: action.payload['06. volume'],
                ltd: action.payload['07. latest trading day'],
                pc: action.payload['08. previous close'],
                change: action.payload['09. change'],
                cp: action.payload['10. change percent'],
            };
        },
    }
});

export const { setSearchResult, setQuoteResult } = stockSlice.actions;
export default stockSlice.reducer;
