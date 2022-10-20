
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Autocomplete,Avatar,FormControl,OutlinedInput,TextField } from '@mui/material';

import Accordian from './Accordian';
import Basecard from './Basecard';
import Activity from './Activity';
import Midcard from './Midcard';
import { blue } from '@mui/material/colors';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';


const drawerWidth = 270;
const top100Films=()=>
    [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 }
    ];
    const arr=[<GridViewOutlinedIcon/>,<BusinessCenterOutlinedIcon/>,<ShoppingCartOutlinedIcon/>,<PermIdentityOutlinedIcon/>,<LocalOfferOutlinedIcon/>,<FileOpenOutlinedIcon/>,<WidgetsOutlinedIcon/>,<GTranslateOutlinedIcon/>,<Brightness7OutlinedIcon/>]
function Main() {
  return (
    <Box sx={{ display: 'flex' ,backgroundColor:'whitesmoke'}} >
      <CssBaseline />
      <AppBar position="fixed" elevation={0} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}>
        <Toolbar sx={{backgroundColor:'whitesmoke'}}>
          <ElectricBoltOutlinedIcon sx={{ml:135,color:"black",mr:2}}/>
          <Autocomplete
            // disablePortal
            id="combo-box-demo"
            size='small'
            options={top100Films()}
            sx={{ width: 150 ,mr:2,bgcolor:"white",color:'black'}}
            renderInput={(params) => <TextField {...params} label="Channel-PLN" />}
          />
          <Avatar size='small' sx={{bgcolor:blue[500],mr:1}}>AD</Avatar> 
          <FormControl size='small' sx={{ width: '25ch',mr:1,bgcolor:"white",color:'black' }}>           
            <OutlinedInput placeholder="admin@example.com"></OutlinedInput>         
          </FormControl>
        </Toolbar>       
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto',backgroundColor:'whitesmoke' }}>
          <Typography  variant='h4' sx={{fontWeigth:'bold',m:2}}>S</Typography>
          <List>
            {['Home', 'Catalog', 'Orders', 'Customers','Discounts','Pages','Apps','Translations','Configuration'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{mb:1}}>
                <ListItemButton sx={{fontWeigth:'bold'}}>
                  <ListItemIcon>
                    {arr[index]}
                  </ListItemIcon>
                  <ListItemText  primary={text}  style={{ fontWeight:900 }}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>         
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 4 ,ml:4,mr:4}}>
        <Toolbar />
        <Typography gutterBottom variant="h4"  component="div" fontSize={35} sx={{fontWeight:'bold',mb:1}}>
          Hello there, admin@example.com
        </Typography>
        <Typography variant="h3"  component="div" fontSize={15}>
          Here is some information we gathered about your store
        </Typography>  
         
        <Box component="div">
          <Midcard/>
        </Box>
        <Box component="div">
          <Accordian/>
        </Box> 
        <Box component="div">
          <Basecard/>
        </Box>

      </Box>
      <Box component="div" sx={{mt:25}}>
        <Toolbar>
          <Activity/>
        </Toolbar>
        
      </Box>
      
      
    </Box>

  )
}

export default Main