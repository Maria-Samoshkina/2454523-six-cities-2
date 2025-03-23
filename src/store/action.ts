import { createAction } from '@reduxjs/toolkit';
import { City, DetailedOffer, Offers } from '../types/offer';
import { AppRoute, AuthorizationStatus } from '../const';
import { Review, Reviews } from '../types/review';

export const changeCity = createAction<City['name']>('mainScreen/changeCity');
export const fetchOffers = createAction<Offers>('OFFERS/fetchOffers');
export const fetchDetailedOffer = createAction<DetailedOffer>('OFFER/fetchDetailedOffer');
export const fetchNeighboringOffers = createAction<Offers>('NEAR_PLACES/fetchNeighboringOffers');
export const fetchReviews = createAction<Reviews>('REVIEWS/fetchReviews');
export const dropOffer = createAction('OFFER/dropOffer');
export const fetchFavorites = createAction('FAVORITES/fetchFavorites');
export const setDetailedOfferLoading = createAction<boolean>('OFFER/setOfferLoading');
export const changeSortOptions = createAction<string>('OFFERS/changeSortOptions');
export const setOffersDataLoadingStatus = createAction<boolean>('DATA/setOffersDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('USER/requireAuthorization');
export const setError = createAction<string|null>('ERROR/setError');
export const setUserEmail = createAction<string>('USER/setUserEmail');
export const redirectToRoute = createAction<AppRoute>('LOGIN/redirectToRoute');
export const addReview = createAction<Review>('DATA/addReview');
