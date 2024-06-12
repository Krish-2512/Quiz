import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import "./Result.css"



const Result = ({name, score}) => {
const navigate = useNavigate();

  useEffect(()=>{
    

    if(!name){
      
    navigate('/');
    }
  
  },[name, navigate])
  return (
    <div className ='result'>
       <span className='title' style={{marginBottom:100, color:'brown'}}> Hey,{name} Your result:-
       </span>
      <span className='title'> Final score:{score} 
      </span>
      <Button
      variant="contained"
      color='secondary'
      size='large'
      style={{alignSelf:'center',marginTop:20}}
      href='/'
       >

   Go to Home
      </Button>
      <h4 className='title' style={{marginTop:30, color:'red'}}>Happy Quizzing!
      </h4>

    </div>
  )
}

export default Result
