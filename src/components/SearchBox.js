import React from 'react';

const SearchBox = ({searchField, searchChange}) =>{
    return(
        <React.Fragment>
            <div className='pa2'>
                <input className='pa3 ba bg-washed-red' 
                type='search' 
                placeholder='search robot'
                onChange={searchChange}
                />
            </div>
        </React.Fragment>
    )
}

export default SearchBox