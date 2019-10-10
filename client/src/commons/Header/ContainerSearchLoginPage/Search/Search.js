import React from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getSearchProducts} from '../../../../actions/productsActions';

const Search = (props) => {
	const submitSearch = (e) => {
		e.preventDefault()
		const q = e.target.q.value

		props.getSearchProducts(`/search?q=${q}`)
		props.history.push(`/search?q=${q}`)
	};

	const searchInput = React.createRef()

	const onIconClick = () => {
		searchInput.current.focus()
	}

	return (
		<div className="d6">
			<form onSubmit={submitSearch}>
				<input type="text" name= "q" ref={searchInput} placeholder="Search..."/>
				<SearchIcon onClick={onIconClick}/>
			</form>
		</div>
	)
};

const mapStateToProps = state => {
	return {}
};

export default connect(mapStateToProps, {getSearchProducts})(withRouter(Search))
