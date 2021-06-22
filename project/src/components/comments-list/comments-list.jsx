import React from 'react';
import PropTypes from 'prop-types';

import commentProp from '../comment/comment.prop';

import CommentForm from '../comment-form/comment-form';
import Comment from '../comment/comment';

function CommentsList({comments}) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            data={comment}
          />
        ))}
      </ul>
      <CommentForm/>
    </section>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(commentProp).isRequired,
};

export default CommentsList;
