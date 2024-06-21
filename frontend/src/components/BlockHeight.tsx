import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlockHeight: React.FC = () => {
  const [blockHeight, setBlockHeight] = useState<number | null>(null);

  useEffect(() => {
    const fetchBlockHeight = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/block-height');
        setBlockHeight(response.data.block_height);
      } catch (error) {
        console.error('Error fetching block height:', error);
      }
    };

    fetchBlockHeight(); // Fetch the initial block height
    const interval = setInterval(fetchBlockHeight, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div>
      <h2>Current Block Height</h2>
      {blockHeight !== null ? (
        <p>{blockHeight}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlockHeight;