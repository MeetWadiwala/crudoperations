import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../style.css'
const AddUser = () => {
	let history = useHistory();

	const [user, setUser] = useState({
		name: "",
		username: "",
		email: "",
		phone: "",
	});
	const { name, username, email, phone } = user;

	const onInputChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		await Axios.post("http://localhost:3333/users", user);
		history.push("/");
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
			<div className='addusermain'>
				<div class="form-group m-2">
                <h2 className='text-center mb-4'>Add a user</h2>
					<input
						type="text"
						class="form-control"
						id="exampleInputEmail1"
						placeholder="Enter name"
						name="name"
						value={name}
						onChange={onInputChange}
						required
					/>
					<input
						type="text"
						class="form-control"
						id="exampleInputEmail1"
						placeholder="Enter username"
						name="username"
						value={username}
						onChange={onInputChange}
						required
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
						required
					/>
					<input
						type="phone"
						class="form-control"
						id="exampleInputEmail1"
						placeholder="Enter phone number"
						name="phone"
						value={phone}
						onChange={onInputChange}
						required
					/>
				</div>

				<button type="submit" class="btn btn-primary">
					add user
				</button>
				</div>
			</form>
		</div>
	);
};

export default AddUser;
