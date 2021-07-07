import React, { useState } from 'react'
import './SearchComponent.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function SearchComponent({ hideButtons = false }) {
    const [{ }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory();

    const search = e => {
        e.preventDefault();
        console.log("Search hit");
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        });
        history.push('/search');
    }
    return (
        <div>
            <form className="Search">
                <div className="Search__input">
                    <SearchIcon className="Search__inputIcon" />
                    <input value={input} onChange={e => setInput(e.target.value)} />
                    <MicIcon />
                </div>
                {!hideButtons ? (
                    <div className="Search__buttons">
                        <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                        <Button variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                ) : (
                    <div className="Search__buttons">
                        <Button className="Search__buttonHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                        <Button className="Search__buttonHidden" variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                )}

            </form>
        </div>
    )
}

export default SearchComponent
