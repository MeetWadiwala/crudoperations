import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import '../style.css'
const EditUser = () => {
	let history = useHistory();
	const { id } = useParams();
	const [user, setUser] = useState({
		name: "",
		username: "",
		email: "",
		phone: "",
	});
	const { name, username, email, phone } = user;

	useEffect(() => {
		loadUser();
	}, []);

	const onInputChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		await Axios.put(`http://localhost:3333/users/${id}`, user);
		history.push("/");
	};

	const loadUser = async () => {
		const result = await Axios.get(`http://localhost:3333/users/${id}`);
		setUser(result.data);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div class="form-group m-2">
					<div className="editusermain">
						<h2 className="text-center mb-4">Edit user</h2>
						<input
							type="text"
							class="form-control"
							id="exampleInputEmail1"
							placeholder="Enter name"
							name="name"
							value={name}
							onChange={onInputChange}
						/>
						<input
							type="text"
							class="form-control"
							id="exampleInputEmail1"
							placeholder="Enter username"
							name="username"
							value={username}
							onChange={onInputChange}
						/>
						<input
							type="email"
							class="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							name="email"
							value={email}
							onChange={onInputChange}
						/>
						<input
							type="phone"
							class="form-control"
							id="exampleInputEmail1"
							placeholder="Enter phone number"
							name="phone"
							value={phone}
							onChange={onInputChange}
						/>
						<button type="submit" class="btn btn-warning">
							update user
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditUser;
