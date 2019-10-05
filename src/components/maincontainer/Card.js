import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import "./css/card.css"


export default function DependencyCard(props) {
  
  const onAddRemoveClickEvent = event => {
    props.handleSelection &&
      props.handleSelection(event.currentTarget.id, props.category);
  };

  return (
    <Card className="card">
      <CardHeader
        action={
          !props.isSelected ? (
            <Fab
              className="cardFab"
              id={props.label}
              aria-label="add"
              onClick={onAddRemoveClickEvent}
            >
              <AddIcon className="cardButton"/>
            </Fab>
          ) : (
            <Fab
              className="cardFab"
              id={props.label}
              aria-label="remove"
              onClick={onAddRemoveClickEvent}
            >
              <RemoveIcon className="cardButton"/>
            </Fab>
          )
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
