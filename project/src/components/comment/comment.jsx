import React from 'react';

import Rating from '../rating/rating';

import commentProp from './comment.prop';

const adaptDate = (originalDate) => {
  const newDate = new Date(originalDate);
  return newDate.toLocaleString('en', {
    month: 'long',
    year: 'numeric',
  });
};

function Comment(props) {
  const {data} = props;
  const {comment, date, rating, user} = data;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <Rating
            className="reviews__stars"
            rating={rating}
          />
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>{adaptDate(date)}</time>
      </div>
    </li>
  );
}

Comment.propTypes = {
  data: commentProp,
};

export default Comment;
