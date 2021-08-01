import React from 'react';
import {useSelector} from 'react-redux';
import {useCommentForm} from '../../hooks/use-comment-form/use-comment-form';
import {getCommentFormIsLoading} from '../../store/offer/selectors';

function CommentForm() {
  const formIsLoading = useSelector(getCommentFormIsLoading);

  const [
    ratingValues,
    data,
    submitDisabled,
    handleFieldChange,
    handleSubmit,
  ] = useCommentForm({
    formIsLoading,
  });

  return (
    <form
      className="reviews__form form"
      action="#"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review"> Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingValues.map((val) => (
          <React.Fragment key={val}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={val}
              checked={data.rating === val}
              id={`${val}-stars`}
              type="radio"
              onChange={(e) => {
                handleFieldChange(e.target.name, val);
              }}
              disabled={formIsLoading}
            />
            <label
              htmlFor={`${val}-stars`}
              className="reviews__rating-label form__rating-label"
              title="perfect"
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={formIsLoading}
        value={data.comment}
        onChange={(e) => {
          handleFieldChange(e.target.name, e.target.value);
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={submitDisabled || formIsLoading}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
