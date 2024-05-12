import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { paperClasses } from "@mui/material/Paper";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CustomImage from './CustomImage';
import sidebar_json from '../assets/json/sidebar.json';
import Dashboard from './Dashboard';
import GameMenu from './GameMenu';

const drawerWidth = 240;

// const openedMixin = (theme: Theme): CSSObject => ({
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: 'rgb(55, 20, 107)'
});

// const closedMixin = (theme: Theme): CSSObject => ({
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: 'rgb(55, 20, 107)',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  // })<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: 'rgb(55, 20, 107)',
    boxSizing: 'border-box',
    height: '100vh',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor:'#fff' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor:'#fff', color:'#000' }}>
        <Toolbar style={{paddingLeft:'0px'}}>
          <button
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            style={{padding:'16px 16px', backgroundColor:'#37146B', border:'none', ...(open && { display: 'none' }),}}
            edge="start"
          >
            <CustomImage style={{width:'32px', height:'32px'}} src={'images/kapstan-closed.svg'} />
          </button>
          <Typography variant="h9" noWrap component="div">
            Applications
          </Typography>
          <Box><GameMenu/></Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} style={{ backgroundColor: '#37146B' }}  
      sx={{
        [`& .${paperClasses.root}`]: {
          alignItems:'baseline'
        }
      }}>
        <DrawerHeader style={{ width: '100%!important' }}>
          <div className='open_drawer_header' onClick={handleDrawerClose}>
            <CustomImage src={'images/kapstan.svg'} />
          </div>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <CustomImage src={'images/apps.svg'} />
              </ListItemIcon>
              <ListItemText primary={"Applications"} sx={{ opacity: open ? 1 : 0 }} style={{color:'white'}}/>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List style={{}}>
          {sidebar_json.drawer_top.map((item, index) => (
            <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <CustomImage src={item.image} />
                </ListItemIcon>
                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} style={{color:'white'}}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {sidebar_json.drawer_bottom.map((item, index) => (
            <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <CustomImage src={item.image} />
                </ListItemIcon>
                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} style={{color:'white'}}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 , backgroundColor:'#F8F8F8'}}>
        <DrawerHeader />
        <Dashboard/>
      </Box>
    </Box>
  );
}

