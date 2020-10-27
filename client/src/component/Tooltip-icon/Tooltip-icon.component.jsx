import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import {IconAdd} from './Tootip-icon.styles'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

function ToolTipIcon() {

    const useStyles = makeStyles((theme) => ({
        
        
        absolute: {
          position: 'fixed',
          bottom: theme.spacing(2),
          right: theme.spacing(5),
          color: '#fff',
          backgroundColor: '#4BA8CE'
        },
      }));
      const classes = useStyles();

    return (
        <Tooltip  arrow style={{fontSize: '1.3rem'}} title="Join Kelas Atau Buat Kelas Disini" aria-label="add" >
            <IconAdd className={classes.absolute} >
                <AddIcon />
            </IconAdd>
        </Tooltip>
      
    )
}

export default ToolTipIcon
 