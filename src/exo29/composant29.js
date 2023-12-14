import React from 'react'

function ExempleCondition(){
    const login="eXoaKalAs";
    const password="PassWord";
    const User = {
        login : "eXo",
        password : "lAs"

    };

    return(
        <div>
            <div>
                Bonjour je suis {login}
            </div>
            
            <div>
                Mon password est {password}
            </div>
            <div>
                Le login de mon objet est {User.login}
            </div>
            <div>
                Le pass de mon objet est {User.password}
            </div>
        </div>
    );
};

export default ExempleCondition;