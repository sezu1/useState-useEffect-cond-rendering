import {useEffect, useState} from 'react';
import MainPages from "../mainpages/MainPages";
import ErrorsPage from "../errosPage/ErrorsPage";




const name = prompt ('what is your name?');
const lastname = prompt('what is your last name?');

export function UserPage() {
    const [user, setUser] = useState({
        name: "",
        lastname: ""
    });

    useEffect(() => {


        setUser({
            name,
            lastname
        })
    }, []);


    if (user.name === '' || user.lastname === ''){
        return <div>
            <h1>User Page</h1>
        </div>
    }

    else if(user.name.toLowerCase() === 'john' && user.lastname.toLowerCase() === 'johns'){
        return <MainPages name={user.name} lastName={user.lastname}/>
    }


    return (
        <ErrorsPage name={user.name} lastName={user.lastname}/>
    );

}

