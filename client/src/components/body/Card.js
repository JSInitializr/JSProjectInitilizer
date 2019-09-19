import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
    const [button, setButton] = React.useState(true);
  const classes = useStyles();

  function addDependencies() {
    setButton(!button);
  }
  return (
    <Card className={classes.card}>
      <CardHeader
        action={
            button ?
            (<Fab size="small"  color="primary" aria-label="add" className={classes.fab} onClick={addDependencies}>
            <AddIcon />
          </Fab>) :
          ( <Fab size="small" aria-label="remove" className={classes.fab} onClick={addDependencies}>
           <RemoveCircleIcon />
           </Fab>)
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}