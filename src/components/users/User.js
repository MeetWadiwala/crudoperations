import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import '../style.css'
const User = () => {
	const [user, setUser] = useState({
		name: "",
		username: "",
		email: "",
		phone: "",
	});

	const { id } = useParams();

	useEffect(() => {
		loadUser();
	},[]);

	const loadUser = async () => {
		const res = await axios.get(`http://localhost:3333/users/${id}`);
		setUser(res.data);
	};
	return <div className='usermain'>
        
        <h1 className="display-4">User Id: {id}</h1>
        <hr/>
        <ul className='list-group'>
            <li className='list-group-item'>name: {user.name}</li>
            <li className='list-group-item'>user name: {user.username}</li>
            <li className='list-group-item'>email: {user.email}</li>
            <li className='list-group-item'>phone: {user.phone}</li>
        </ul>
		<Link className='btn btn-primary mt-3' to='/'>
            back to home
        </Link>
    </div>;
};

export default User;
