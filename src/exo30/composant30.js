import React from 'react'

function exo30() {

    const login = 'eXosErAtJrUnAs';
    const isConnected = true;

    const logins = ["eXo","eXodiaa","eXoPlo"];
    
    return(
        <div>
            {isConnected ? (
            <div>Vous etes {login}</div>
            ):(
            <div>
                <ul>
                {
                    logins.map(login => (
                        <li>{login}</li>
                    ))
                }
                </ul>
                Merci de vous connecter</div>
            )
    }
        </div>
    )
   
};

export default exo30;