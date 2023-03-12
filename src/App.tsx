import { useEffect, useState } from 'react';
import './App.css';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './components/CheckoutForm';
import { stripePromise } from './utils/stripe';
import { Appearance, StripeElementsOptions } from '@stripe/stripe-js';
import { Products } from './components/Products';
import { Price } from './components/Price';

function App() {
  const [clientSecret, setClientSecret] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const amount = (
    selectedProducts.reduce(
      (accumulator, current) => accumulator + current.price,
      0
    ) / 100
  ).toFixed(2);
  const appearance: Appearance = {
    theme: 'stripe',
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  function createPaymentIntent(): void {
    fetch('http://localhost:3000/payment/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: selectedProducts }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }

  return (
    <div className="App">
      {clientSecret ? (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm total={amount} />
        </Elements>
      ) : (
        <>
          <div className="cart">
            🛒 Your cart: <Price value={amount} />
          </div>
          <Products
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
          <div className="btn-confirm">
            <button onClick={() => createPaymentIntent()}>Confirm</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
