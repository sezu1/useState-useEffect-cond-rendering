
import React from 'react';
import {MainPage} from "../../pages/mainPage/MainPage";
import {ErrorPage} from "../../pages/errorPage/ErrorPage";

let userName = prompt ('Как вас зовут?')
let userLastName = prompt('Как ваша фамилия?')

export function User({}) {
    const user2 = {name: userName, lastName: userLastName}
    return (
        <div>
            <h1>User Page</h1>
            <MainPage user={user2}/>
            <ErrorPage user={user2}/>
        </div>
    );
}

