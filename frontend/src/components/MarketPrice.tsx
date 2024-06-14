// frontend/src/components/MarketPrice.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const MarketPrice: React.FC = () => {
  const [marketPrice, setMarketPrice] = useState<number[]>([]);
  const [timestamps, setTimestamps] = useState<string[]>([]);

  useEffect(() => {
    const fetchMarketPrice = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/market-price');
        setMarketPrice(prev => [...prev, response.data.market_price]);
        setTimestamps(prev => [...prev, new Date().toLocaleTimeString()]);
      } catch (error) {
        console.error('Error fetching market price:', error);
      }
    };

    const interval = setInterval(fetchMarketPrice, 5000);
    fetchMarketPrice(); // Fetch initial data

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: timestamps,
    datasets: [
      {
        label: 'Market Price (USD)',
        data: marketPrice,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  return (
    <div>
      <h2>Market Price</h2>
      <Line data={data} />
    </div>
  );
};

export default MarketPrice;
