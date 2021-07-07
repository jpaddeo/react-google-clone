import React from 'react'
import './Search.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import SearchComponent from '../components/SearchComponent';

function Search() {
    const [{ term }, disptach] = useStateValue();
    const { data } = useGoogleSearch(term);
    //const data = Response;
    return (
        <div className="SearchPage">
            <div className="SearchPage__header">
                <Link to="/">
                    <img className="SearchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="" />
                </Link>
                <div className="SearchPage__headerBody">
                    <SearchComponent hideButtons />
                    <div className="SearchPage__options">
                        <div className="SearchPage__optionsLeft">
                            <div className="SearchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="SearchPage__option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="SearchPage__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="SearchPage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="SearchPage__option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="SearchPage__option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="SearchPage__optionsRight">
                            <div className="SearchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="SearchPage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className="SearchPage__results">
                    <p className="SearchPage__resultsCount">About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>
                    {data?.items.map(item =>
                        <div className='SearchPage__result'>
                            <a className='SearchPage__resultLink'href={item.link}>
                                {item.pagemap?.cse_image?.length && item.pagemap?.cse_image[0]?.src && (
                                    <img className='SearchPage__resultImage' src={item.pagemap?.cse_image?.length && item.pagemap?.cse_image[0]?.src} alt={item.link}/>
                                )}
                                {item.displayLink}
                                </a>
                            <a className='SearchPage__resultTitle' href={item.link}><h2>{item.title}</h2></a>
                            <p className='SearchPage__resultSnippet'>{item.snippet}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Search