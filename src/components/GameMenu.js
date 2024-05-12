import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { fetchApplicationData } from '../reducers/data.slice';

export default function GameMenu() {

    const [data, setData] = useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selection, setSelection] = React.useState(data[0])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApplicationData())
            .then((response) => {
                if (response?.payload?.status === 200) {
                    setData(response.payload.data)
                    setSelection(response.payload.data[0])
                }
                else {
                    console.log('Application API Error')
                }
            })
            .catch((err) => {
                console.log('Application API Error', err)
            })
    }, [dispatch])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (item) => {
        setSelection(item);
        handleClose();
    };




    return (
        <div>
            {selection && <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={anchorEl ? 'true' : undefined}
                onClick={handleClick}
            >
                {selection.name}
            </Button>}
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {data.length > 0 && data.map((item, index) => {
                    return <MenuItem key={item.id} onClick={(e) => handleSelect(item)}>{item?.name}</MenuItem>
                })}

            </Menu>
        </div>
    );
}