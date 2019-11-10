import React from 'react';
import TransactionList from './components/transaction-list';
import Section from './components/section';
import Balance from './components/balance';
import ExchangeRate from './components/exchange-rate';
import AddTransactionForm from './components/add-transaction-form';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  // const transactions = [
  //   {
  //     id: '1',
  //     label: 'transaction 1',
  //     value: 100,
  //     currency: 'EUR'
  //   },
  //   {
  //     id: '2',
  //     label: 'transaction 2',
  //     value: -50,
  //     currency: 'EUR'
  //   }
  // ];

  return (
    <Provider store={store}>
      <main>
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
      </main>
    </Provider>
  );
}

export default App;
