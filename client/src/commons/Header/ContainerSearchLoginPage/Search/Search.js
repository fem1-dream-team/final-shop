import React from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const Search = (props) => {
	const submitSearch = (e) => {
		e.preventDefault()
		const q = e.target.q.value
		// alert(q)
		props.history.push(`/search?q=${q}`)
	};

	const searchInput = React.createRef()

	const onIconClick = () => {
		searchInput.current.focus()
	}

	return (
		<div className="d6">
			{/* <form method="GET" action="/search"> */}
			<form onSubmit={submitSearch}>
				<input type="text" name= "q" ref={searchInput} placeholder="Search..."/>
				<SearchIcon onClick={onIconClick}/>
			</form>
		</div>
	)
}

export default connect(() => { {} }, {})(withRouter(Search))
