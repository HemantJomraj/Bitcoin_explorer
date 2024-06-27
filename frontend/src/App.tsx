import React from 'react';
import styled from 'styled-components';
import BlockHeight from './components/BlockHeight';
import MarketPrice from './components/MarketPrice';
import TransactionCount from './components/TransactionCount';
import HashRate from './components/HashRate';
import HistoricalBlockHeights from './components/HistoricalBlockHeights';
import HistoricalTransactionCounts from './components/HistoricalTransactionCounts';
import HistoricalHashRates from './components/HistoricalHashRates';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #1a1a1a;
  color: #fff;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Section = styled.div`
  width: 80%;
  max-width: 1200px;
  margin-bottom: 40px;
`;

const Card = styled.div`
  background: #2c2c2c;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ChartTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Title>Bitcoin Explorer</Title>
      <Section>
        <Card>
          <ChartTitle>Current Block Height</ChartTitle>
          <BlockHeight />
        </Card>
        <Card>
          <ChartTitle>Market Price</ChartTitle>
          <MarketPrice />
        </Card>
        <Card>
          <ChartTitle>Transaction Count</ChartTitle>
          <TransactionCount />
        </Card>
        <Card>
          <ChartTitle>Hash Rate</ChartTitle>
          <HashRate />
        </Card>
        <Card>
          <ChartTitle>Historical Block Heights</ChartTitle>
          <HistoricalBlockHeights />
        </Card>
        <Card>
          <ChartTitle>Historical Transaction Counts</ChartTitle>
          <HistoricalTransactionCounts />
        </Card>
        <Card>
          <ChartTitle>Historical Hash Rates</ChartTitle>
          <HistoricalHashRates />
        </Card>
      </Section>
    </Container>
  );
};

export default App;
