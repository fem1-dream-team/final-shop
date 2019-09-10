import React from 'react'
// import Link from '@material-ui/core/Link'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export const Categories = () => {
	const classes = useStyles();

	return (
		<div style={{backgroundColor: '#e6ccff'}}>
			<h1 style={{textAlign: 'center'}}>FIRST CATEGORIES EXMPL</h1>
			<Grid container spacing={3}>

				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<Link to={'/profile'}>
							<React.Fragment>
								<CssBaseline />
								<Container fixed>
									<Typography component="div" style={{ backgroundImage: 'url("http://qnimate.com/wp-content/uploads/2014/03/images2.jpg")', height: '50vh', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}} />

									<div>

									</div>
								</Container>
							</React.Fragment>

						</Link>
					</Paper>
				</Grid>

				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<Link to={'/profile'}>
							<React.Fragment>
								<CssBaseline />
								<Container fixed>
									<Typography component="div" style={{ backgroundImage: 'url("http://qnimate.com/wp-content/uploads/2014/03/images2.jpg")', height: '50vh', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}} />

									<div>

									</div>
								</Container>
							</React.Fragment>

						</Link>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<Link to={'/profile'}>
							<React.Fragment>
								<CssBaseline />
								<Container fixed>
									<Typography component="div" style={{ backgroundImage: 'url("http://qnimate.com/wp-content/uploads/2014/03/images2.jpg")', height: '50vh', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}} />

									<div>

									</div>
								</Container>
							</React.Fragment>

						</Link>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<Link to={'/profile'}>
							<React.Fragment>
								<CssBaseline />
								<Container fixed>
									<Typography component="div" style={{ backgroundImage: 'url("http://qnimate.com/wp-content/uploads/2014/03/images2.jpg")', height: '50vh', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}} />

									<div>

									</div>
								</Container>
							</React.Fragment>

						</Link>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<Link to={'/profile'}>
							<React.Fragment>
								<CssBaseline />
								<Container fixed>
									<Typography component="div" style={{ backgroundImage: 'url("http://qnimate.com/wp-content/uploads/2014/03/images2.jpg")', height: '50vh', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}} />

									<div>

									</div>
								</Container>
							</React.Fragment>

						</Link>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<Link to={'/profile'}>
							<React.Fragment>
								<CssBaseline />
								<Container fixed>
									<Typography component="div" style={{ backgroundImage: 'url("http://qnimate.com/wp-content/uploads/2014/03/images2.jpg")', height: '50vh', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}} />

									<div>

									</div>
								</Container>
							</React.Fragment>

						</Link>
					</Paper>
				</Grid>
			</Grid>

		</div>
	)
}