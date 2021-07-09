import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createComment} from '../../store/api-actions';
import {useParams} from 'react-router-dom';
import {ActionCreator} from '../../store/action';

const MIN_LENGTH = 50;
const MAX_LENGTH = 300;

const ratingValues = [5, 4, 3, 2, 1];

const initialState = {
  rating: null,
  comment: '',
};

const setButtonDisabled = (commentLength, rating) => {
  const validLength = commentLength >= MIN_LENGTH && commentLength < MAX_LENGTH;
  return !(validLength && rating);
};

function CommentForm(props) {
  const {
    onSubmit,
    formIsLoading,
    setFormDisabled,
    error,
    resetError,
  } = props;

  const {id} = useParams();

  const [data, setData] = useState({...initialState});

  const handleFieldChange = (name, value) => {
    // if (error) {
    //   resetError();
    // }
    setData({
      ...data,
      [name]: value,
    });
  };

  const buttonDisabled = setButtonDisabled(data.comment.length, data.rating);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) {
      resetError();
    }
    setFormDisabled();
    onSubmit(id, data);
  };

  useEffect(() => {
    if (!formIsLoading && !error) {
      setData({...initialState});
    }
  }, [formIsLoading, error]);

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
  onSubmit: PropTypes.func.isRequired,
  setFormDisabled: PropTypes.func.isRequired,
  formIsLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  resetError: PropTypes.func,
};

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
