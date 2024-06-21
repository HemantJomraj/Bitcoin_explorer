import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const HashRateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const HashRateValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #00ff00;
  margin-top: 10px;
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 1.5rem;
`;

const formatHashRate = (hashRate: number) => {
  if (hashRate >= 1e18) {
    return `${(hashRate / 1e18).toFixed(2)} EH/s`;
  } else if (hashRate >= 1e12) {
    return `${(hashRate / 1e12).toFixed(2)} TH/s`;
  } else if (hashRate >= 1e9) {
    return `${(hashRate / 1e9).toFixed(2)} GH/s`;
  } else if (hashRate >= 1e6) {
    return `${(hashRate / 1e6).toFixed(2)} MH/s`;
  } else {
    return `${hashRate} H/s`;
  }
};

const HashRate: React.FC = () => {
  const [hashRate, setHashRate] = useState<number | null>(null);

  useEffect(() => {
    const fetchHashRate = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/hash-rate');
        console.log('Fetched hash rate response:', response.data);
        setHashRate(response.data.hash_rate);
      } catch (error) {
        console.error('Error fetching hash rate:', error);
      }
    };

    fetchHashRate();
    const interval = setInterval(fetchHashRate, 10000); // Refresh every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <HashRateContainer>
      <Title>Hash Rate</Title>
      {hashRate !== null ? (
        <HashRateValue>{formatHashRate(hashRate)}</HashRateValue>
      ) : (
        <div>Loading...</div>
      )}
    </HashRateContainer>
  );
};

export default HashRate;
