import React from 'react';
import { BallBeat } from 'react-pure-loaders';
import Typography from "@material-ui/core/Typography";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:`rgba(0, 0, 0, 0.7)`,
  },
  paper: {
    backgroundColor: 'transparent',
    border: '0px transparent',
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function SimpleModal(props) {

  const classes = useStyles();
  
  if(props.show){
    return (
      <span>
        <Modal style={{outline: 0}}
          disableAutoFocus={true}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={true}
        >
          <div style={{outline:'none'}} in={true}>
            <span className={classes.paper}>
              <span>
            <Typography
                style={{ margin: "0 0px 0px 0px", color:'white'}}
                variant="h5"
                gutterBottom
              >
                preparing project...
             </Typography>
             <BallBeat style={{marginTop:'30px'}}
                color={'white'}
                loading={true}
              />
             </span>
             <span>
              
              </span>
            </span>
          </div>
        </Modal>
      </span>
    );
  }

  if (props.show) {
   
  } else {
    return (
      <div>
      </div>
    );
  }


}
