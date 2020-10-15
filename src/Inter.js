import React, { useEffect, useState } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from './components/Navbar'
import {Switch,Route} from 'react-router-dom'
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

const Inter = () => {
	return (
		<div>
			<Navbar />
			<Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/users/add' component={AddUser}/>
                <Route exact path='/users/edit/:id' component={EditUser}/>
                <Route exact path='/users/:id' component={User}/>
            </Switch>
		</div>
	);
};

export default Inter;
