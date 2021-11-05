import { Button, TextField,TableHead,TableCell,TableRow,Table,TableBody, Typography } from '@material-ui/core'
//import React, { useState } from 'react'
import useForm from './Read'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Movie = () => {  
    
var [value,setValue]=useForm({movieName:"",actorName:"",actressName:"",director:"",releasedYear:"",camera:"",producer:"",language:""})

var [read,setread]=useForm({movieName:""})

var [movieData,changeData]=useState([])



const readView=()=>{

    console.log(value)

    axios.get("http://localhost:8080/view").then((Response)=>{
        console.log(Response.data)
        }
    )
}


const readFn=()=>{

    console.log(value)

    axios.post("http://localhost:8084/add",value).then((Response)=>{
        console.log(Response.data)
        }
    )
}

const readSearch=()=>{
    
    console.log(read)

    axios.post("http://localhost:8084/search",read).then((Response)=>{
        console.log(Response.data)
       
   changeData(
    movieData=Response.data
    )})}

const readDelete=()=>{
    console.log(read)

    axios.post("http://localhost:8084/delete",read).then((Response)=>{
        console.log(Response.data) 

}
    )
}

    return (
        <div>

<Button onClick={readView} fullWidth color="primary" variant="contained"> VIEW ALL </Button>            

            
<TextField
    name="movieName"
    onChange={setValue}
    value={value.movieName}
    margin="normal"
    label="Movie Name"
    variant="outlined" 
    fullWidth  />

   
<TextField
    name="actorName"
    onChange={setValue}
    value={value.actorName}
    margin="normal"
    label="Actor Name"
    variant="outlined" 
    fullWidth  /> 


      
<TextField
    name="actressName"
    onChange={setValue}
    value={value.actressName}
    margin="normal"
    label="Actress Name"
    variant="outlined" 
    fullWidth  /> 

<TextField
    name="director"
    onChange={setValue}
    value={value.director}
    margin="normal"
    label="Movie Director"
    variant="outlined" 
    fullWidth  /> 


<TextField
    name="releasedYear"
    onChange={setValue}
    value={value.releasedYear}
    margin="normal"
    label="Movie Released Year"
    variant="outlined" 
    fullWidth  /> 


<TextField
    name="camera"
    onChange={setValue}
    value={value.camera}
    margin="normal"
    label="Movie Camera Man"
    variant="outlined" 
    fullWidth  /> 

<TextField
    name="producer"
    onChange={setValue}
    value={value.producer}
    margin="normal"
    label="Movie Producer"
    variant="outlined" 
    fullWidth  /> 


<TextField
    name="language"
    onChange={setValue}
    value={value.language}
    margin="normal"
    label="Language"
    variant="outlined" 
    fullWidth  /> 


   <Button onClick={readFn} fullWidth color="primary" variant="contained"> SUBMIT </Button>

<Typography variant="h5">Search Movie</Typography>
   <TextField
    name="movieName"
    onChange={setread}
    value={read.movieName}
    margin="normal"
    label="Movie Name"
    variant="outlined" 
    fullWidth  />


<Button onClick={readSearch} fullWidth color="primary" variant="contained"> SEARCH </Button>   
 

    
<Table style={{ marginTop:2}}>
     <TableHead>
         <TableRow>
             <TableCell> Movie Name </TableCell>
             <TableCell> Actor Name </TableCell>
             <TableCell> Actress Name </TableCell>
             <TableCell> Director </TableCell>
             <TableCell> Released Year </TableCell>
             <TableCell> Camera </TableCell>
             <TableCell> Producer </TableCell>
             <TableCell> Language </TableCell>
         </TableRow>
     </TableHead>

     <TableBody>

 {movieData.map((read,index)=>{
return <TableRow> 
<TableCell> {read.movieName} </TableCell>
<TableCell> {read.actorName} </TableCell>
<TableCell> {read.actressName} </TableCell>
<TableCell> {read.director} </TableCell>
<TableCell> {read.releasedYear} </TableCell>
<TableCell> {read.camera} </TableCell>
<TableCell> {read.producer} </TableCell>
<TableCell> {read.language} </TableCell>
<TableCell> <Button onClick={readDelete} variant="contained" color="primary"> DELETE </Button> </TableCell>

</TableRow>

  } )}

     </TableBody>


 </Table>       

        </div>
    )
}

export default Movie