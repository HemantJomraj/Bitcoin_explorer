import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const HashRate: React.FC = () => {
  const [hashRate, setHashRate] = useState<number[]>([]);
  const [timestamps, setTimestamps] = useState<string[]>([]);

  useEffect(() => {
    const fetchHashRate = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/hash-rate');
        setHashRate(prev => [...prev, response.data.hash_rate]);
        setTimestamps(prev => [...prev, new Date().toLocaleTimeString()]);
      } catch (error) {
        console.error('Error fetching hash rate:', error);
      }
    };

    const interval = setInterval(fetchHashRate, 5000); // Fetch every 5 seconds
    fetchHashRate(); // Fetch initial data

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: timestamps,
    datasets: [
      {
        label: 'Hash Rate (TH/s)',
        data: hashRate,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  return (
    <div>
      <h2>Hash Rate</h2>
      <Line data={data} />
    </div>
  );
};

export default HashRate;
