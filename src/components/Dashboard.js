import { Grid, Box } from '@mui/material';
import React, { useState } from 'react';
import EventHistory from './EventHistory';
import SystemMetrics from './NewChart';
import ServiceInfo from './ServiceInfo';
import tabs from '../assets/json/tabs.json'
import CustomImage from './CustomImage';
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     content: {
//       flexGrow: 1,
//       padding: theme.spacing(3),
//     },
//     toolbar: theme.mixins.toolbar,
//   })
// );

function Dashboard() {
  
 const [selectedTab, setSelectedTab] = useState(tabs.tabs[0])
const handleTabSelect = (item) => {
  setSelectedTab(item)
}
  return (
    <>
    <Box sx={{width:'100%', justifyContent:'flex-start', display:'flex', gap:'20px', margin:'16px 0px'}}>
    {tabs.tabs.map((item)=>{
      return(
        <div style={{display:'flex', alignItems:'center', gap:'4px'}}>
          <CustomImage src={item.img}/>
        <button  className={`title_buttons ${selectedTab.name === item.name ? 'title_buttons_selected' : ''}`} onClick={()=>{handleTabSelect(item)}}> {item.name}</button>
        </div>
      )
    })}</Box>
    <Grid container direction='column'>
          <Grid item xs={12} >
            <ServiceInfo/>
          </Grid>
          <Grid container  spacing={4} direction='row' sx={{marginTop:'24px'}}>
            <Grid item xs={6}>
              <SystemMetrics/>
            </Grid>
            <Grid item xs={6}>
              <EventHistory/>
            </Grid>
          </Grid>

        </Grid>
        </>
  );
}

export default Dashboard;