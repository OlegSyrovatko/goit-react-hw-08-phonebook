import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Find } from './Filter.styled';

const Filter = () => {
  const filterDefault = useSelector(selectFilter);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    const val = e.currentTarget.value;
    setFilter(val);
    dispatch(setStatusFilter(val));
  };

  return (
    <Find>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter || filterDefault}
        onChange={handleChange}
      />
    </Find>
  );
};

export default Filter;
