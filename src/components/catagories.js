import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkingStatus } from '../redux/catagories/catagorieSlice';

function Categories() {
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    dispatch(checkingStatus());
  };

  const categories = useSelector((state) => state.categories);

  return (
    <div className="book-card m-3 display-flex">
      <button className="btn-check-status" type="button" onClick={checkStatusHandler}>Check status</button>
      <h2 className="categories-default-text">{categories}</h2>
    </div>
  );
}

export default Categories;
