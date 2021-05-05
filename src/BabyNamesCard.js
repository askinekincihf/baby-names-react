import React from 'react';

const BabyNamesCard = ({ babyName }) => {
    return (
        <div>
            <p className={babyName.sex === "f" ? "name-female" : "name-male"}>{babyName.name}</p>
        </div>
    )
}

export default BabyNamesCard;
