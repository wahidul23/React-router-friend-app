import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {name, email, id} = props.friend;
    return (
        <div className="friendStyle">
            <h4>Name:{name}</h4>
            <h5>E-mail:{email}</h5>
            <p>id: <Link to={`/friend/${id}`}>Details of friend{id}</Link> </p>
        </div>
    );
};

export default Friend;