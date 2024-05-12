import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchHistoryData } from '../reducers/data.slice';

const EventHistory = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHistoryData())
      .then((response) => {
        if (response?.payload?.status === 200) {
          setData(response.payload.data)
        }
        else {
          console.log('Event History API Error')
        }
      })
      .catch((err) => {
        console.log('Event History API Error', err)
      })
  }, [dispatch])
  
  const getStatus = (status) => {
    if (status === 'in_progress') {
      return (
        <div className='status_chip progress_chip'><span className='round'></span><span>In Progress</span></div>
      )
    }
    else if (status === 'failed') {
      return (
        <div className='status_chip failed_chip'><span className='round'></span><span>Failed</span></div>
      )
    }
    else if (status === 'successful') {
      return (
        <div className='status_chip success_chip'><span className='round'></span><span>Successful</span></div>
      )
    }

  }
  return (
    <TableContainer component={Paper} sx={{ padding: '24px', boxShadow: '1px 5px 4px -1px #0000000F, 1px 3px 4px 0px #0000000F'}}>
      <Typography className='title'>Event History</Typography>
      <Table>
        <TableHead>
          <TableRow >
            <TableCell sx={{ fontWeight: '600' }} className='table_header'>Event</TableCell>
            <TableCell sx={{ fontWeight: '600' }} className='table_header'>Version</TableCell>
            <TableCell sx={{ fontWeight: '600' }} className='table_header'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.event}</TableCell>
              <TableCell>{row.version}</TableCell>
              <TableCell>{getStatus(row.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventHistory;