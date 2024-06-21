import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const TransactionCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TransactionCountValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 10px;
`;

const TransactionCount: React.FC = () => {
  const [transactionCount, setTransactionCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchTransactionCount = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/transaction-count');
        setTransactionCount(response.data.transaction_count);
      } catch (error) {
        console.error('Error fetching transaction count:', error);
      }
    };

    fetchTransactionCount();
    const interval = setInterval(fetchTransactionCount, 10000); // Refresh every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <TransactionCountContainer>
      {transactionCount !== null ? (
        <TransactionCountValue>{transactionCount}</TransactionCountValue>
      ) : (
        <div>Loading...</div>
      )}
    </TransactionCountContainer>
  );
};

export default TransactionCount;
