import React from 'react'
import './Search.css'
import {makeStyles} from "@material-ui/core";

export const Search = (props) => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<form method="GET" action="/search">
				<input type="text" name="q" placeholder="Search..."/>
			</form>
			<Icon className={classes.searchIcon}/>
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'blue'
	},
	searchIcon: {
		position: 'static',
		margin: '0 20px',
		height: 25
	},
	welcomeWrapper: {
		display: 'flex'
	}
}))

const Icon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			enableBackground="new 0 0 16 16"
			version="1.1"
			viewBox="0 0 16 16"
			xmlSpace="preserve"
		>
			<path
				d="M15.7 14.3l-3.105-3.105A6.966 6.966 0 0014 7a7 7 0 10-7 7 6.96 6.96 0 004.194-1.405L14.3 15.7c.184.184.38.3.7.3a1 1 0 001-1 .926.926 0 00-.3-.7zM2 7c0-2.762 2.238-5 5-5s5 2.238 5 5-2.238 5-5 5-5-2.238-5-5z"/>
		</svg>
	);
}