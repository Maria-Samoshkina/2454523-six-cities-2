import { useAppSelector } from '../../hooks';
import ReviewForm from './review-form';
import ReviewItem from './review-item';
import { AuthorizationStatus} from '../../const';


function ReviewsList(): JSX.Element {

  const reviews = useAppSelector((state)=> state.reviews);
  const autorizationStatus = useAppSelector((state)=> state.authorizationStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>

      {autorizationStatus === AuthorizationStatus.Auth && <ReviewForm /> }
    </section>
  );
}

export default ReviewsList;
