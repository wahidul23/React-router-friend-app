import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FreindDetail = () => {
    const {id} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <p>This details of {id}</p>

            <h3>Name:{friend.name}</h3>

            <h4>{friend.email}</h4>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FreindDetail;