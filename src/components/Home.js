import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './style.css'
const Home = () => {
	const [users, setUser] = useState([]);

	useEffect(() => {
		loadUsers();
	}, []);

	const loadUsers = async () => {
		const result = await axios.get("http://localhost:3333/users");
		setUser(result.data);
	};

	const deleteUser = async (id) => {
		await axios.delete(`http://localhost:3333/users/${id}`);
		loadUsers();
	};

	return (
		<div className='homemain'>
			<table class="table border shadow">
				<thead class="thead-dark">
					<tr>
						<th scope="col">#</th>
						<th scope="col">Name</th>
						<th scope="col">User Name</th>
						<th scope="col">Email</th>
						<th scope="col">Operations</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<tr>
							<th scope="row">{index + 1}</th>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>{user.email}</td>
							<td>
								<Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
								<Link
									class="btn btn-outline-primary mr-2"
									to={`/users/edit/${user.id}`}
								>
									Edit
								</Link>
								<Link
									class="btn btn-danger"
									onClick={() => deleteUser(user.id)}
								>
									Delete
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Home;
