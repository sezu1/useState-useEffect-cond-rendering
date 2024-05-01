
import React, {useEffect, useState} from 'react';

export function MainPage({user}) {
        const [names, setNames] = useState('');//const names = 0, const setNames() changes, useState-now

        useEffect(() => {
        if (user.name === 'John' && user.lastName === 'Johns') {
            setNames(`Добро пожаловать ${user.name} ${user.lastName}, мы тебя ждали`)
        }
        }, [user.name, user.lastName]);

        return (
            <div>
                <h1>Main Page</h1>
                <h2>{names}</h2>
            </div>
        );
}















{/*{*/}
{/*    user.name === 'John' && <h2>{user.name}</h2>*/}
{/*}*/}
{/*{*/}
{/*    user.lastName === 'Johns' && <h2>{user.lastName}</h2>*/}
{/*}*/}