import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers, detailedOffers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { neighboringOffers } from './mocks/neighboringOffers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers = {offers}
      detailedOffers = {detailedOffers}
      reviews = {reviews}
      neighboringOffers = {neighboringOffers}
    />
  </React.StrictMode>
);
