import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import commentProp from '../comment/comment.prop';

import CommentForm from '../comment-form/comment-form';
import Comment from '../comment/comment';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selectors';

function CommentsList(props) {
  const {
    comments,
    commentsCount,
    isAuthorized,
  } = props;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsCount}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            data={comment}
          />
        ))}
      </ul>
      {isAuthorized && (
        <CommentForm/>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
});

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(commentProp).isRequired,
  commentsCount: PropTypes.number.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

export {CommentsList};
export default connect(mapStateToProps)(CommentsList);

