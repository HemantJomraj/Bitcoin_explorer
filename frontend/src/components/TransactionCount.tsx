import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    const interval = setInterval(fetchTransactionCount, 60000); // Fetch every 60 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Transaction Count</h2>
      {transactionCount !== null ? (
        <p>{transactionCount}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TransactionCount;
