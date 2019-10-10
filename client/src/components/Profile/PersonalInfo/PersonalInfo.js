import React, {Fragment, useState} from 'react';
import classes from './PersonalInfo.module.css';
import {connect} from 'react-redux';
import EditPersonalInfo from './EditPersinalInfo/EditPersinalInfo';
import { saveEditedUser } from '../../../actions/profileActions'
import PersonalData from './PersonalData/PersonalData';

const PersonalInfo = (props) => {
	const [editProfile, setEditProfile] = useState(false);
	const onSubmit = (formData) => {
		props.saveEditedUser(formData);
		setEditProfile(false);
	}
	return (
		<div className={classes.personalWrap}>
			{editProfile
				? <Fragment>
					<EditPersonalInfo
						onSubmit={onSubmit}
					/>
					<button className={classes.button} onClick={() => setEditProfile(false) }> Cancel</button>
				</Fragment>
				:				<Fragment>
					<PersonalData/>
					<button className={classes.button} onClick={() => setEditProfile(true) }> Edit profile</button>

				</Fragment>
			}
		</div>
	)
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps, { saveEditedUser })(PersonalInfo);