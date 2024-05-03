import React from 'react';

function ErrorsPage({name, lastName}) {
    return (
        <div>
            вам сюда нельзя {name} {lastName}
        </div>
    );
}

export default ErrorsPage;