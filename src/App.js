import React from 'react';
import TransactionList from './components/transaction-list';
import Section from './components/section';
import Balance from './components/balance';
import ExchangeRate from './components/exchange-rate';
import AddTransactionForm from './components/add-transaction-form';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStylesProvider, Wrapper } from './App.style';

function App() {
  return (
    <Provider store={store}>
      <GlobalStylesProvider/>
        <Wrapper>
          <Section title='Current exchange rate'>
            <ExchangeRate />
          </Section>
          <Section title='Your balance'>
            <Balance />
          </Section>
          <Section title='Add transaction'>
            <AddTransactionForm />
          </Section>
          <Section title='Your transactions'>
            <TransactionList />
          </Section>
        </Wrapper>
    </Provider>
  );
}

export default App;
