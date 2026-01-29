import { User, Produce, MarketPrice, Transaction, GovernmentScheme, Message } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'राम कुमार',
    phone: '+91-9876543210',
    type: 'farmer',
    location: 'Khadakwasla, Pune',
    verified: true
  },
  {
    id: '2',
    name: 'श्याम व्यापारी',
    phone: '+91-9876543211',
    type: 'trader',
    location: 'APMC Market, Pune',
    verified: true
  }
];

export const mockProduce: Produce[] = [
  {
    id: '1',
    farmerId: '1',
    name: 'गेहूं (Wheat)',
    variety: 'HD-2967',
    quantity: 100,
    unit: 'quintal',
    basePrice: 2200,
    currentPrice: 2200,
    images: ['https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg'],
    description: 'उच्च गुणवत्ता वाला गेहूं, अच्छी तरह से साफ किया गया',
    location: 'Khadakwasla, Pune',
    harvestDate: '2024-03-15',
    status: 'active',
    verified: true,
    bids: [
      {
        id: 'b1',
        traderId: '2',
        traderName: 'श्याम व्यापारी',
        amount: 2300,
        quantity: 50,
        message: 'अच्छी गुणवत्ता के लिए प्रीमियम मूल्य',
        timestamp: new Date().toISOString(),
        status: 'pending'
      }
    ]
  },
  {
    id: '2',
    farmerId: '1',
    name: 'धान (Rice)',
    variety: 'IR-64',
    quantity: 75,
    unit: 'quintal',
    basePrice: 1800,
    currentPrice: 1950,
    images: ['https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg'],
    description: 'बासमती चावल, लंबे दाने',
    location: 'Khadakwasla, Pune',
    harvestDate: '2024-03-10',
    status: 'active',
    verified: false,
    bids: []
  }
];

export const mockMarketPrices: MarketPrice[] = [
  {
    id: '1',
    produce: 'गेहूं (Wheat)',
    mandi: 'Pune APMC',
    price: 2250,
    change: 50,
    trend: 'up',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '2',
    produce: 'धान (Rice)',
    mandi: 'Pune APMC',
    price: 1900,
    change: -25,
    trend: 'down',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '3',
    produce: 'मक्का (Maize)',
    mandi: 'Mumbai APMC',
    price: 1650,
    change: 0,
    trend: 'stable',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '4',
    produce: 'आलू (Potato)',
    mandi: 'Delhi APMC',
    price: 800,
    change: 75,
    trend: 'up',
    lastUpdated: new Date().toISOString()
  }
];

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    produceId: '1',
    farmerId: '1',
    traderId: '2',
    amount: 115000,
    quantity: 50,
    status: 'payment_initiated',
    timeline: [
      {
        id: 't1',
        title: 'बोली स्वीकार की गई',
        description: 'किसान ने आपकी बोली स्वीकार की',
        timestamp: new Date().toISOString(),
        completed: true
      },
      {
        id: 't2',
        title: 'भुगतान पुष्टि',
        description: 'भुगतान प्रक्रिया में है',
        timestamp: '',
        completed: false
      }
    ]
  }
];

export const mockGovernmentSchemes: GovernmentScheme[] = [
  {
    id: '1',
    title: 'प्रधानमंत्री किसान सम्मान निधि',
    description: 'भारत सरकार की एक केंद्रीय क्षेत्रक योजना है जो छोटे और सीमांत किसानों को आय सहायता प्रदान करती है।',
    category: 'subsidy',
    eligibility: [
      '2 हेक्टेयर तक की खेती योग्य भूमि',
      'भारतीय नागरिक होना आवश्यक',
      'आधार कार्ड और बैंक खाता आवश्यक'
    ],
    benefits: 'प्रति वर्ष ₹6,000 की राशि तीन किस्तों में',
    applicationLink: 'https://pmkisan.gov.in',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg'
  },
  {
    id: '2',
    title: 'फसल बीमा योजना',
    description: 'प्राकृतिक आपदाओं से होने वाले नुकसान के खिलाफ किसानों को बीमा कवर प्रदान करती है।',
    category: 'insurance',
    eligibility: [
      'सभी किसान पात्र हैं',
      'अधिसूचित फसलों के लिए',
      'निर्धारित समय सीमा के भीतर आवेदन'
    ],
    benefits: 'फसल के नुकसान पर बीमा राशि का भुगतान',
    applicationLink: 'https://pmfby.gov.in',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg'
  }
];

export const mockMessages: Message[] = [
  {
    id: '1',
    senderId: '2',
    receiverId: '1',
    content: 'नमस्ते, आपका गेहूं कैसा है?',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    read: true
  },
  {
    id: '2',
    senderId: '1',
    receiverId: '2',
    content: 'बहुत अच्छा गेहूं है, क्या आप देखना चाहते हैं?',
    timestamp: new Date(Date.now() - 3000000).toISOString(),
    read: true
  },
  {
    id: '3',
    senderId: '2',
    receiverId: '1',
    content: 'हाँ, कल आऊंगा देखने।',
    timestamp: new Date(Date.now() - 1800000).toISOString(),
    read: false
  }
];