export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  prices: [number, number][];
  market_caps: [number, number][];
  total_volume: number; 
  price_change_24h: number; 
  high_24h: number;
  low_24h: number;
}
