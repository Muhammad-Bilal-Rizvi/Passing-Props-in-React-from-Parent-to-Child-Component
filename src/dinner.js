import React from 'react';

function Dinner(props) {

    return(
        <div>
            <h2>Today we are serving {props.dishName}</h2>
            <h2>Today we are also serving sweet dish {props.sweetDish}</h2>
        </div>
    );
}

export default Dinner;