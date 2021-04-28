import React from 'react';

const Card = ({name,email,id}) => {
    return (
        <React.Fragment>
            <div className='tc bg-washed-red dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Card;