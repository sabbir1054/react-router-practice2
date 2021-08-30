import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend]  = useState({});


    useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setFriend(data));
    },[])
    
    return (
        <div>
            <h1>Name: {friend.name}</h1>
            <h3>Email: {friend.email}</h3>
            <h3>Phone: { friend.phone}</h3>
        </div>
    );
};

export default FriendDetails;

