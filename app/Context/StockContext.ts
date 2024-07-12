import React, { createContext } from "react";
import { StockContextType } from "../types/index.interface";

const StockContext = createContext<StockContextType>({
    stockSymbol: "",
    setStockSymbol: () => ({})
});

export default StockContext;