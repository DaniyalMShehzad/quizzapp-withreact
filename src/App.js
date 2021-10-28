import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css';
import MenuAppBar from './navbar';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { keys } from '@mui/system';


function App() {
  const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    const questions=[
      {
        question:"Hyper Text Markup Language Stand For ?",
        options:["JavaScript", "XHTML","CSS", "HTML"],
        answer:"HTML",
      },
      {
        question:"Which language is used for styling web pages ?",
        options:["CSS", "JQuery", "CSS", "XML"],
        answer:"CSS",
      },
      {
        question:"Which is not a JavaScript Framework ?",
        options: ["Python Script", "JQuery","Django", "NodeJS"],
      answer:"Django",
    },
    {
      question:"Which is used for Connect To Database ?",
      options:["PHP", "HTML", "JS", "All"],
      answer:"PHP",
    },
    {
      question:"Saylani Mass IT training is about..",
      options:["Web Design", "Graphic Design", "SEO & Development", "All"],
      answer:"All"
    },
    {
      question:" Hypertext Preprocessor ?",
      options:["XML","PHP","HTP","JQuery"],
      answer:"PHP",
    },
  ]
  const[questionIndex,setQuestionIndex] =useState(0)
  const[Result,setResult] =useState(0)
  const[Marks,setMarks] =useState(0)
  
// setQuestionIndex((e)=>{
//   e.target.value()
// })
const nextQuestion=(()=>{
  if(questions.length -1 ==questionIndex){
    setResult(true)
  }
  else{
  setQuestionIndex(questionIndex+1)
  }
})
const change=(a,b)=>{
  if(a==b){
    setMarks(Marks+1)
  }
  nextQuestion()
}

return (
  <>
  {!Result?

    <div className="App">

      <MenuAppBar/>
        <Box  sx={{ width: '100%' }}>
          <div>
      {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 12 }}> */}
          <Typography variant="h3" sx={{ mr: 70 }}>
            {questions.map((e,i)=>{
              return (questionIndex===i)?(
              <Grid item xs={12}  key={i}>
              <h5>{e.question}</h5>
            </Grid>
            ):null
            })}
          </Typography>
          <div className="child">
          {questions.map((e,i)=>{
            return(questionIndex===i)?  (
              e.options.map((a,b)=>{
                return(
                  <Grid item xs={6} key={b}>
                       <Item><button className="btn" onClick={()=>change(e.answer,a)}>{a}</button></Item>
                    </Grid>
                )  
                  })
            ):null
          })}
          </div>
      {/* </Grid> */}
      </div>
    </Box>
    <Stack spacing={6} direction="row">
      <Button disabled onClick={nextQuestion} variant="contained">next</Button>
      {/* <Button onClick={()=>setResult(setResult,true)} variant="contained">Submit</Button> */}
      
    </Stack>
    </div>
    :
    // {correctAns.map((e,i)=>{

    // })}
    <div className="marks">
    <h1 setMarks >{Marks}</h1>
    </div>
}
  </>
  );
}

export default App;
