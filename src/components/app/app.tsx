import MainScreen from '../../pages/main-screen/main-screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import FavoriteScreen from '../../pages/favorite-screen/favorite-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { DetailedOffers, Offers } from '../../types/offer';
import { Reviews } from '../../types/review';

type AppProps = {
  offers:Offers;
  detailedOffers: DetailedOffers;
  reviews: Reviews;
  neighboringOffers: Offers;
}

function App ({offers, detailedOffers, reviews, neighboringOffers}: AppProps): JSX.Element {

  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main}>
            <Route index element = {<MainScreen offers = {offers} />}/>
            <Route path = {AppRoute.Favorites} element = {
              <PrivateRoute autorizationStatus={AuthorizationStatus.Auth}>
                <FavoriteScreen offers = {offers}/>
              </PrivateRoute>
            }
            />
            <Route path = {AppRoute.Login} element = {<LoginScreen/>}/>
            <Route path={`${AppRoute.Offer}/:offerId`} element={
              <OfferScreen
                detailedOffers = {detailedOffers}
                reviews={reviews}
                neighboringOffers = {neighboringOffers}
              />
            }
            />

          </Route>
          <Route path='*' element ={<NotFoundScreen/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );

}

export default App;
