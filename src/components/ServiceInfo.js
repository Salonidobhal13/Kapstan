import { Typography } from '@mui/material'
import React from 'react'

export default function ServiceInfo() {
  return (
    <div className='service_info' style={{padding:'16px', borderRadius:'12px', textAlign:'left',border: '1px solid #EBEBEB', boxShadow:'1px 5px 4px -1px #0000000F, 1px 3px 4px 0px #0000000F'}}>
        <Typography className='title'>Service Info</Typography>
        <div className='wrap' style={{display:'flex'}}>
            <div style={{display:'flex', flexDirection:'column'}}><span className='font_size_12 color_secondary'>Current Version</span><span  className='font_size_14'>In sync</span></div>
            <div style={{display:'flex', flexDirection:'column'}}><span className='font_size_12 color_secondary'>Desired Version</span><span  className='font_size_14'>1.2.1</span></div>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <button className='deploy_btn'>Deploy</button>
            <div className='font_size_12 color_secondary'>Last updated 5 hours ago</div>
        </div>

    </div>
  )
}
