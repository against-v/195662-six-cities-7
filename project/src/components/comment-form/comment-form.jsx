import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createComment} from '../../store/api-actions';
import {useParams} from 'react-router-dom';
import {ActionCreator} from '../../store/action';

const MIN_LENGTH = 50;
const MAX_LENGTH = 300;

const ratingValues = [5, 4, 3, 2, 1];

function CommentForm(props) {
  const {
    onSubmit,
    formIsLoading,
    setFormDisabled,
  } = props;

  const {id} = useParams();

  const initialState = {
    rating: null,
    comment: '',
  };

  const [data, setData] = useState({...initialState});

  const handleFieldChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });

  };

  const setButtonDisabled = () => {
    const commentLength = data.comment.length;
    const validLength = commentLength >= MIN_LENGTH && commentLength < MAX_LENGTH;
    return !(validLength && data.rating);
  };
  const buttonDisabled = setButtonDisabled();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormDisabled();
    onSubmit(id, data);
  };

  useEffect(() => {

    if (!formIsLoading) {
      setData({...initialState});
    }
  }, [formIsLoading]);

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
});

const mapStateToProps = (state) => ({
  formIsLoading: state.commentFormIsLoading,
});

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setFormDisabled: PropTypes.func.isRequired,
  formIsLoading: PropTypes.bool.isRequired,
};

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
