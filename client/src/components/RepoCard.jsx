import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: '1rem'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function RepoCard({name, owner, forks, languages, network, open_issues, isPrivate, stars, subscribers, watchers}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="h2">
          {owner}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {languages}
        </Typography>
        <Typography variant="body2" component="p">
          <br />
          Stars: {stars}
          <br />
          Forks: {forks}
          <br />
          Subscribers: {subscribers}
          <br />
          Open Isssues: {open_issues}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
