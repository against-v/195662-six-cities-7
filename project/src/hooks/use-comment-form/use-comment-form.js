import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createComment} from '../../store/api-actions';
import {setCommentFormError, setCommentFormIsLoading} from '../../store/action';
import {getCommentFormError} from '../../store/offer/selectors';

const MIN_LENGTH = 50;
const MAX_LENGTH = 300;

const RATING_VALUES = [5, 4, 3, 2, 1];

const getSubmitDisabledStatus = (commentLength, rating) => {
  const validLength = commentLength >= MIN_LENGTH && commentLength < MAX_LENGTH;
  return !(validLength && rating);
};

const initialState = {
  rating: null,
  comment: '',
};

export const useCommentForm = (props) => {
  const {
    formIsLoading,
  } = props;

  const {id} = useParams();
  const [data, setData] = useState({...initialState});
  const dispatch = useDispatch();
  const error = useSelector(getCommentFormError);

  const onSubmit = (commentData) => {
    dispatch(createComment(id, commentData));
  };
  const setFormDisabled = () => {
    dispatch(setCommentFormIsLoading(true));
  };
  const resetError = () => {
    dispatch(setCommentFormError(null));
  };

  const handleFieldChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitDisabled = getSubmitDisabledStatus(data.comment.length, data.rating);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) {
      resetError();
    }
    setFormDisabled();
    onSubmit(data);
  };

  useEffect(() => {
    if (!formIsLoading && !error) {
      setData({...initialState});
    }
  }, [formIsLoading, error]);

  return [
    RATING_VALUES,
    data,
    submitDisabled,
    handleFieldChange,
    handleSubmit,
  ];
};
