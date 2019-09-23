import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
  }
}));

export default function DependencyCard(props) {
  const [button, setButton] = React.useState(true);
  const classes = useStyles();
 
  const onAddRemoveClickEvent = (event)=> {
    props.handleSelection && props.handleSelection(event.currentTarget.id,props.category);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
            button ?
            (<Fab size="small" id={props.label} color="primary" aria-label="add" className={classes.fab} onClick={onAddRemoveClickEvent}>
            <AddIcon />
          </Fab>) :
          ( <Fab size="small" id={props.label} aria-label="remove" className={classes.fab} onClick={onAddRemoveClickEvent}>
           <RemoveCircleIcon />
           </Fab>)
        }
        title={props.label}
      />
    
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}