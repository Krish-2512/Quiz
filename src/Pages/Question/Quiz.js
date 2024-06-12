import React,{useEffect,useState} from 'react'
import { CircularProgress } from '@mui/material';
import "./Quiz.css";
import Question from '../../components/Questions/Question';
import { useNavigate } from 'react-router-dom';



const Quiz = ({name, score, questions, setQuestions, setScore}) => {
  const [options,setOptions] = useState();
  const [currquestions,setCurrquestions] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // Initialize with 5 minutes (300 seconds)
  const navigate = useNavigate();

  
  const speak = () => {
    if (questions[currquestions]) {
      const msg = new SpeechSynthesisUtterance(questions[currquestions].question);
      window.speechSynthesis.speak(msg);
    }
  }

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate('/quiz/result', { state: { name, score } }); 
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, navigate, name, score]);
  



  useEffect(()=>{
    console.log(questions);

setOptions(questions && handleShuffle([questions[currquestions]?.correct_answer,
...questions[currquestions]?.incorrect_answers,
]))


  },[questions,currquestions])

  console.log(options);

  const handleShuffle =(options)=>{return options.sort(()=>Math.random()-0.5);
  }
  
  return (
    <div className='quiz'>
    <span className="subtitle">Welcome,{name}</span>
    <button id='btn' style={{backgroundColor:'blue',color:'black',borderRadius:5}} onClick={speak}>Voice</button>

    {
      questions ? (
<>
<div className="quizinfo">
  <h3 style={{color:'blue'}}>{questions[currquestions].category}</h3>
  <h3 style={{color:'orange'}}>Score: {score}</h3>
  <h3 style={{color:'red'}}>
              Time Left: {Math.floor(timeLeft / 60)}:
              {timeLeft % 60 < 10 ? '0' : ''}
              {timeLeft % 60}
            </h3>


</div>
<Question
currquestions={currquestions}
setCurrquestions={setCurrquestions}
questions={questions}
options={options}
correct={questions[currquestions]?.correct_answer} 
score={score}
setScore={setScore}
setQuestions={setQuestions}
/>
</>
       ):(
<CircularProgress style={{margin:100, color:'inherit'}}size='150' 
thickness={1}

/>
       )
    }
      
    
    </div>
  )
  
}

export default Quiz
