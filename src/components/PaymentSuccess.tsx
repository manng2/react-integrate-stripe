import { useNavigate } from 'react-router-dom';

export function PaymentSuccess() {
  const navigate = useNavigate();
  return (
    <div className="payment-success">
      <div className="message">Payment successful</div>
      <button onClick={() => navigate('/')}>Back to home page</button>
    </div>
  );
}
