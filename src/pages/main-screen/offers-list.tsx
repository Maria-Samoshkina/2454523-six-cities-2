/* eslint-disable no-console */
import { useState } from 'react';
import { Offers } from '../../types/offer';
import RentalOfferCard from './rental-offer-card';

type OffersListProps = {
  offers: Offers;
  onOffersListHover: (offerId:string) => void;
}

function OffersList (props : OffersListProps) : JSX.Element{
  const {offers, onOffersListHover } = props;

  const [activeOfferId, setActiveOfferId] = useState('');
  const handleMouseEnter = (offerId: string) => {
    setActiveOfferId(offerId);
    onOffersListHover(offerId);
    console.log(activeOfferId);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map ((offer) => (
        <RentalOfferCard offer = {offer}
          key = {offer.id}
          onMouseEnter={() => handleMouseEnter(offer.id)}
        />
      ))}
    </div>

  );
}

export default OffersList;
