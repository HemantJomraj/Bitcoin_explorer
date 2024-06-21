import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const BlockHeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlockHeightValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 10px;
`;

const BlockHeight: React.FC = () => {
  const [blockHeight, setBlockHeight] = useState<number | null>(null);

  useEffect(() => {
    const fetchBlockHeight = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/block-height');
        console.log('Fetched block height response:', response.data);
        setBlockHeight(response.data.block_height);
      } catch (error) {
        console.error('Error fetching block height:', error);
      }
    };

    fetchBlockHeight();
    const interval = setInterval(fetchBlockHeight, 10000); // Refresh every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <BlockHeightContainer>
      {blockHeight !== null ? (
        <BlockHeightValue>{blockHeight}</BlockHeightValue>
      ) : (
        <div>Loading...</div>
      )}
    </BlockHeightContainer>
  );
};

export default BlockHeight;
