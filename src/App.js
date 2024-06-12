
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Result from './Pages/Result/Result';
import Quiz from './Pages/Question/Quiz';
import React, { useState } from 'react';
import axios from 'axios';
import Instructions from './Pages/Instruction/Instructions';
function App() {
  const [name,setName]=useState("");
  const [questions,setQuestions]=useState();
  const[score,setScore]=useState(0);


const getQuestions= async (category="",difficulty="")=>{
const{data}=await axios.get(`https://opentdb.com/api.php?amount=10${
  category&&`&category=${category}`
}${difficulty &&`&difficulty=${difficulty}`}&type=multiple`);
// console.log(data);
setQuestions(data.results);
};

  return (

    <BrowserRouter>
    <div className="App"style={{backgroundImage:"url(./image.png)"}}>
      <Header/>
<Routes>
<Route path='/' element={<Home name={name} setName={setName}  getQuestions={getQuestions}/>}/>
<Route path='/instruction' element={<Instructions/>}/>
<Route path='/quiz' element={<Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions}/>}/>
<Route path='/quiz/result' element={<Result  
name={name}  score={score}


/>}/>



</Routes>





    </div>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
