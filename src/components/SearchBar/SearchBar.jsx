import React from 'react'
import { InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import './SearchBar.css';
const SearchBar = () => {
    return (
        <div className="search-box">
            <InputGroup>
                <FormControl type="text" />
                <InputGroup.Addon>
                    <Glyphicon glyph="search" />
                </InputGroup.Addon>
            </InputGroup>
        </div>
    )
}

export default SearchBar
