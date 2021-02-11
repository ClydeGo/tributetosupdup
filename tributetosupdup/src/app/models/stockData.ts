export interface IstockData {
    id: string,
    symbol: string,
    company: string,
    marketCap: string,
    price: string,
    lastTweeted: string
}

export class stockData implements IstockData {
    id = '';
    symbol = '';
    company = '';
    marketCap = '';
    price = '';
    lastTweeted = '';
}