import React, { useState } from 'react';

const verif = ({ login, password }) => {
    const couleur = login && password ? 'green' : 'transparent';

    return (
        <div style={{ backgroundColor: couleur, padding: '10px', marginTop: '10px' }}>
            
        </div>
    );
};

export default verif;