import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

const MIN_LENGTH = 50;
const MAX_LENGTH = 300;

const ratingValues = [5, 4, 3, 2, 1];

const setButtonDisabled = (commentLength, rating) => {
  const validLength = commentLength >= MIN_LENGTH && commentLength < MAX_LENGTH;
  return !(validLength && rating);
};

const initialState = {
  rating: null,
  comment: '',
};

export const useCommentForm = (props) => {
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

  return [
    ratingValues,
    data,
    buttonDisabled,
    handleFieldChange,
    handleSubmit,
  ];
};
