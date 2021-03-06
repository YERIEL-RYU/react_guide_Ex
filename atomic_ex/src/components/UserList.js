import React from 'react';

const UserList = (props) => {
    const userDetails = props.users.map((user, index)=> <li key={index}>{user.name}</li>)
    return (
        <ul>
            {userDetails}
        </ul>
    );
};

export default UserList;