
import {useEffect, useState} from 'react';

export function ErrorPage({user}) {

    const [errorName, setErrorName] = useState('');

    useEffect(() => {
        if(user.name !== 'John' && user.lastName !== 'Johns') {
            setErrorName(`Тебе сюда нельзя - ${user.name} ${user.lastName}`);
        }
        }, [user.name, user.lastName]);

        return (
            <div>
                <h2>{errorName}</h2>
            </div>
        );
}

