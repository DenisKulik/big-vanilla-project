import { ChangeEvent } from 'react';

export const User = () => {
    const deleteUser = () => alert('user has been deleted');
    const addUser = () => alert('user has been added');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => console.log(
        e.currentTarget.value);

    return (
        <div>
            John Smith
            <button onClick={ deleteUser }>delete</button>
            <button onClick={ addUser }>add</button>
            <br />
            <input onChange={ onChangeHandler } type="text"
                   placeholder={ 'search user' } />
        </div>
    );
};