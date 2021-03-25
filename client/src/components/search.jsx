import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import RepoCard from './RepoCard';
const { Octokit } = require('@octokit/rest');

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: 300,
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}));

export default function Search() {
	const classes = useStyles();
	const octokit = new Octokit();

	const [userName, setuserName] = useState('');
	const [repoName, setrepoName] = useState('');
	const [repoData, setrepoData] = useState('');

	const fetchRepoDetails = () => {
		octokit.repos
			.get({
				owner: userName,
				// type: 'public',
				repo: repoName,
			})
			.then(({ data }) => {
				console.log(data);
        setrepoData(data)
			});
	};

	return (
		<React.Fragment>
			<Paper className={classes.root}>
				<InputBase
					className={classes.input}
					placeholder="User"
					inputProps={{ 'aria-label': 'query' }}
					value={userName}
					onChange={(e) => setuserName(e.target.value)}
				/>
				<Divider className={classes.divider} orientation="vertical" />
				<InputBase
					className={classes.input}
					placeholder="Repo"
					inputProps={{ 'aria-label': 'query2' }}
					value={repoName}
					onChange={(e) => setrepoName(e.target.value)}
				/>
				<IconButton
					type="button"
					className={classes.iconButton}
					aria-label="search"
					onClick={() => fetchRepoDetails()}
				>
					<SearchIcon />
				</IconButton>
			</Paper>
			<RepoCard name={repoData?.name}/>
		</React.Fragment>
	);
}
