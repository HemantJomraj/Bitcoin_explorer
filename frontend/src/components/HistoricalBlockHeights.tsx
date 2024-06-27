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

const HistoricalBlockHeights: React.FC = () => {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/block-heights');
        setData(response.data.map((item: { block_height: number }) => item.block_height));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h2>Historical Block Heights</h2>
      {data.length ? (
        data.map((height, index) => <Value key={index}>{height}</Value>)
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
};

export default HistoricalBlockHeights;
