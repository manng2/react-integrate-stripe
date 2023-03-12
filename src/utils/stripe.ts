import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_API_KEY } from './config';

export const stripePromise = loadStripe(STRIPE_API_KEY);
