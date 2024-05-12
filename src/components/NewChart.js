import React, { useEffect, useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import Highcharts from 'highcharts';
import { useDispatch } from 'react-redux';
import { fetchCpuData, fetchMemoryData } from '../reducers/data.slice';

const SystemMetrics = () => {
  const dispatch = useDispatch();
  const [cpuData, setCpuData] = useState([])
  const [memoryData, setMemoryData] = useState([])
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    if (cpuData.length>0) {
      let options;
      let data = [{
        name: 'Tick-tac-toe',
        data: []
      },
      {
        name: 'App 2',
        data: []
      },
      {
        name: 'app 3',
        data: []
      }]
// eslint-disable-next-line
      cpuData.map((item) => {
        if (item.applicationId === "1") {
          data[0].data.push([parseInt(item.timestamp), parseFloat(item.cpuUtilization)])
        }
        else if (item.applicationId === "2") {
          data[1].data.push([parseInt(item.timestamp), parseFloat(item.cpuUtilization)])
        }
        else if (item.applicationId === "3") {
          data[2].data.push([parseInt(item.timestamp), parseFloat(item.cpuUtilization)])
        }
      })

      // Create the chart
      options = {
        title: {
          text: '',
        },
        xAxis: {
          type: 'datetime',
        },
        yAxis: {
          title: {
            text: 'CPU Utilization (%)',
          },
        },
        series: data,
      }
      Highcharts.chart('chart-container', options);
    }

  }, [cpuData])

  useEffect(() => {
    if(memoryData.length>0) {
      let options;
      let data = [{
        name: 'Tick-tac-toe',
        data: []
      },
      {
        name: 'App 2',
        data: []
      },
      {
        name: 'app 3',
        data: []
      }]
      // eslint-disable-next-line
      memoryData.map((item) => {
        if (item.applicationId === "1") {
          data[0].data.push([parseInt(item.timestamp), parseFloat(item.memoryUtilization)])
        }
        else if (item.applicationId === "2") {
          data[1].data.push([parseInt(item.timestamp), parseFloat(item.memoryUtilization)])
        }
        else if (item.applicationId === "3") {
          data[2].data.push([parseInt(item.timestamp), parseFloat(item.memoryUtilization)])
        }
      })

      options = {
        title: {
          text: '',
        },
        xAxis: {
          type: 'datetime',
        },
        yAxis: {
          title: {
            text: 'Memory Utilization (%)',
          },
        },
        series: data,
      }
      Highcharts.chart('chart2-container', options);
    }
  }, [memoryData])

  useEffect(() => {
    // Render the chart
    if (tabValue === 0) {
        dispatch(fetchCpuData())
          .then((response) => {
            if (response?.payload?.status === 200) {
              setCpuData(response.payload.data)
            }
            else {
              console.log('Cpu data API Error')
            }
          })
          .catch((err) => {
            console.log('Cpu data API Error', err)
          })
    }
    else {
        dispatch(fetchMemoryData())
          .then((response) => {
            if (response?.payload?.status === 200) {
              setMemoryData(response.payload.data)
            }
            else {
              console.log('Memory data API Error')
            }
          })
          .catch((err) => {
            console.log('Memory data API Error', err)
          })
      }
    
  }, [tabValue, dispatch])

  return (
    <Box sx={{ backgroundColor: '#fff', border: '1px solid #EBEBEB', boxShadow: '1px 5px 4px -1px #0000000F, 1px 3px 4px 0px #0000000F', borderRadius: '8px', padding: '24px' }}>
      <Typography className='title' style={{ textAlign: 'left' }}>System metrics</Typography>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        sx={{ width: '100%' }}
      >
        <Tab label="CPU" sx={{ width: '50%' }} />
        <Tab label="Memory" sx={{ width: '50%' }} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <Typography variant="h6">CPU</Typography>
        <div id="chart-container" style={{ width: '100%', height: '400px' }} />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Typography variant="h6">Memory</Typography>
        <div id="chart2-container" style={{ width: '100%', height: '400px' }} />
      </TabPanel>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default SystemMetrics;
