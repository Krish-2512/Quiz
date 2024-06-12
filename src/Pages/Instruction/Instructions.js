import React from 'react'
import './Instructions.css'
import { Button } from '@mui/material'










const Instructions = () => {
   

  return (
    <div className='Instructions' >
      <h1 style={{fontSize:40}}>
        Intructions Regarding The Quiz
      </h1>
      
      <div className='guidance'>
      <ul>
       <li  style={{fontSize:20, color:'red',margin:20}}>
       <h4>The quiz will contains 10 questions
       </h4>
       </li>
       <li style={{fontSize:20, color:'red',margin:20}}>
       <h4>The quiz will be based on the topic and its difficulty level that you choosen
       </h4>
       
       </li>
       <li style={{fontSize:20, color:'red',margin:20}}>
       <h4>There will be also a timer set at 5 minutes. In this 5 minutes you have complete the given quiz ,else your score will be evaluated 
       </h4>
       
       </li>

       <li style={{fontSize:20, color:'red',margin:20}}>
       <h4>There will also be a scoreboard which will on you correct attempts
       </h4>
       
       </li>
       <li style={{fontSize:20, color:'red',margin:20}}>
       <h4>There will be a final page which will be displayed showing your final score when you complete the quiz
       </h4>
       
       </li>

      </ul>


      </div>
      <Button
variant="contained"
color='secondary'
size='large'
style={{width:185}}
href='/'


>
Back to home
</Button>

    </div>
  )
}

export default Instructions
