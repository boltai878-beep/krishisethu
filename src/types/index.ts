export interface User {
  id: string;
  name: string;
  phone: string;
  type: 'farmer' | 'trader' | 'admin';
  location: string;
  verified: boolean;
  avatar?: string;
}

export interface Produce {
  id: string;
  farmerId: string;
  name: string;
  variety: string;
  quantity: number;
  unit: 'kg' | 'quintal' | 'ton';
  basePrice: number;
  currentPrice: number;
  images: string[];
  description: string;
  location: string;
  harvestDate: string;
  status: 'active' | 'bidding' | 'sold' | 'expired';
  bids: Bid[];
  verified?: boolean;
}

export interface Bid {
  id: string;
  traderId: string;
  traderName: string;
  amount: number;
  quantity: number;
  message?: string;
  timestamp: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface Transaction {
  id: string;
  produceId: string;
  farmerId: string;
  traderId: string;
  amount: number;
  quantity: number;
  status: 'pending' | 'deal_accepted' | 'produce_collected' | 'payment_initiated' | 'payment_completed' | 'completed';
  timeline: TransactionStep[];
}

export interface TransactionStep {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  completed: boolean;
}

export interface MarketPrice {
  id: string;
  produce: string;
  mandi: string;
  price: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  lastUpdated: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface GovernmentScheme {
  id: string;
  title: string;
  description: string;
  category: 'subsidy' | 'loan' | 'insurance' | 'training';
  eligibility: string[];
  benefits: string;
  applicationLink: string;
  image: string;
}