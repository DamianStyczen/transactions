import React from 'react';
import TransactionList from './components/transaction-list';
import Section from './components/section';
import Balance from './components/balance';
import ExchangeRate from './components/exchange-rate';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStylesProvider, Wrapper } from './App.style';
import Modal from './components/modal';
import BiggestTransaction from './components/biggest-transaction';

function App() {
  return (
    <Provider store={store}>
      <GlobalStylesProvider />
      <Wrapper>
        <Section title='Current exchange rate' small>
          <ExchangeRate />
        </Section>
        <Section title='Your balance' small>
          <Balance />
        </Section>
        <Section title='Your transactions'>
          <TransactionList />
        </Section>
        <Section title='Your biggest transaction'>
          <BiggestTransaction />
        </Section>
        <Modal />
      </Wrapper>
    </Provider>
  );
}

export default App;
