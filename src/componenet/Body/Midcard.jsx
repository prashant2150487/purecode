
import { Box, Card, CardActionArea, CardContent,Typography } from '@mui/material'
import React from 'react'
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import GradingIcon from '@mui/icons-material/Grading';


function Midcard() {
  return (
    
      
      
    <Box sx={{display:"flex",flexDirection:"row",justifyContent:'space-between',mt:5,mb:1}}>
      <Card sx={{width:350,mb:1}}>
      <CardActionArea sx={{display:"flex",flexDirection:"row",}}>       
        <CardContent sx={{width:"50vw"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{pl:1}}>
            Sales
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{pl:1,pt:0}}>
            Today
          </Typography>
          <Typography gutterBottom variant="h4" component="div" sx={{textAlign:'center',mt:1}}>
            PLN 0.00
          </Typography>
        </CardContent>
        <CardContent>
          <MultilineChartIcon  sx={{width:70,height:100,color:'#2196f3',bgcolor:'#cfd8dc',borderRadius:2}}/>
        </CardContent>
      </CardActionArea>  
    </Card>  
    <Card sx={{width:350,mb:1}}>
      <CardActionArea sx={{display:"flex",flexDirection:"row",}}>       
        <CardContent sx={{width:"50vw"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{pl:1}}>
            Orders
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{pl:1}}>
            Today
          </Typography>
          <Typography gutterBottom variant="h4" component="div" sx={{mt:1,ml:21}}>
            0
          </Typography>
        </CardContent>
        <CardContent>
          <GradingIcon  sx={{width:70,height:100,color:'#2196f3',bgcolor:'#cfd8dc',borderRadius:2}}/>
        </CardContent>
      </CardActionArea>  
    </Card>
    </Box> 
       
  )
}

export default Midcard