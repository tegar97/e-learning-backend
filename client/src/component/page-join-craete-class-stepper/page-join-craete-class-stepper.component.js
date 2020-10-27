import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import CodeClass from '../code-class-form/code-class.component';
import CreateClass from '../create-class/create-class.component';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
        {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  TabStyle : {
    borderBottom : '1px solid var(--color-primary)'
  }
}));

const  PageJoinAndCreateClass = ({history}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'var(--color-primary)'}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Gabung Kelas" {...a11yProps(0)} />
          <Tab  label="Buat Kelas" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel  as="div" value={value} index={0}>
        <Container maxWidth="sm">
            <CodeClass history={history}/>
        </Container>
      </TabPanel>
      <TabPanel  as="div" value={value} index={1}>
        <Container maxWidth="sm">
            <CreateClass/>

        </Container>
      </TabPanel>
      
    </div>
  );
}

export default PageJoinAndCreateClass