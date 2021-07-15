import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createComment} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';
import {useCommentForm} from '../../hooks/use-comment-form/useCommentForm';

function CommentForm(props) {
  const {
    formIsLoading,
    error,
  } = props;

  const [
    ratingValues,
    data,
    buttonDisabled,
    handleFieldChange,
    handleSubmit,
  ] = useCommentForm(props);

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
        <button className="reviews__submit form__submit button" type="submit" disabled={buttonDisabled || formIsLoading}>Submit</button>
      </div>
      {error &&
      <p
        style={{
          color: 'red',
          marginBottom: 0,
        }}
      >
        {error}
      </p>}

    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, data) {
    dispatch(createComment(id, data));
  },
  setFormDisabled() {
    dispatch(ActionCreator.setCommentFormIsLoading(true));
  },
  resetError() {
    dispatch(ActionCreator.setCommentFormError(null));
  },
});

const mapStateToProps = (state) => ({
  formIsLoading: state.commentFormIsLoading,
  error: state.commentFormError,
});

CommentForm.propTypes = {
  formIsLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
