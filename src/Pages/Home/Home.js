

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import { TextField, MenuItem, Button } from "@mui/material";
import Categories from '../../Data/Categories';
import Errormsg from '../../components/Error/Errormsg';


const Home = ({ name, setName,getQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate(); 

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      getQuestions(category, difficulty);
      navigate('/quiz'); 
    };
   
  };

  const handleinstruct =()=>{
    navigate('/instruction')
  }

  return (
    <div className='content'>
      <div className='settings'>
        <img src="/quiz.svg" className="banner" alt="quiz img" />
        <h3 style={{ fontSize: 30 , color:'orange'}}>Quiz Login Details</h3>
        <div className="settings_select">
          {error && <Errormsg>Please fill all the fields</Errormsg>}
          <TextField
            style={{ marginBottom: 25 }}
            id='outlined'
            label="Enter your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.value} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key='Easy' value="easy">
              Easy
            </MenuItem>
            <MenuItem key='Medium' value="medium">
              Medium
            </MenuItem>
            <MenuItem key='Hard' value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button variant='contained' color='primary' size='large' onClick={handleSubmit}>
            Start Quiz
          </Button>
          <Button variant='contained' color='secondary' size='large' style={{marginTop:20}} onClick={handleinstruct}>
            Instructions
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
