import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Value = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
`;

const HistoricalHashRates: React.FC = () => {
  const [data, setData] = useState<{ hash_rate: number, created_at: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/hash-rates');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h2>Historical Hash Rates</h2>
      {data.length ? (
        data.map((item, index) => (
          <Value key={index}>{item.hash_rate} at {new Date(item.created_at).toLocaleString()}</Value>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
};

export default HistoricalHashRates;
