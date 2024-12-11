import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/actions';

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        dispatch(setSearchQuery(event.target.value));
    };

    return (
        <input
            type="text"
            placeholder="Search tasks..."
            onChange={handleSearch}
        />
    );
};

export default SearchBar;