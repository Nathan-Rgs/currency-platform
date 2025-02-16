export interface Coin {
  id: string;
  year: number;
  country: string;
  value: string;
  price: number;
  aifns: string;
  status: 'available' | 'sold';
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CoinFormData {
  year: number;
  country: string;
  value: string;
  price: number;
  aifns: string;
  status: 'available' | 'sold';
  imageUrl?: string;
}