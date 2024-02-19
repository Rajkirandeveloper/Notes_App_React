import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NotesApp = () => {
    const [inputValue,setInputValue]=useState("")
    const [submittedValue,setSubmittedValues]=useState([])
    function onHandleChnage(event){
        // console.log(event.target.value)
        setInputValue(event.target.value)
        
        

    }
    function HandleSubmit(event){
        event.preventDefault()
        // console.log("submitted")
        setSubmittedValues([...submittedValue,inputValue])
        console.log(submittedValue)
        setInputValue("")

    }
  return (

    
    <div>
    <form onSubmit={HandleSubmit}>
    <input  onChange={onHandleChnage}  placeholder='please enter your notes'/>
    <Button variant="success">Success</Button>{' '}</form>


    {
        submittedValue.map((task)=>{
            return (
                <Card bg={"success"}
                text={ 'dark' }
                style={{ width: '18rem' }}
               >
               
                <Card.Body>
                  
                  <Card.Text>
                    {task}
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            )
        })
    }


    
      
    </div>
  )
}

export default NotesApp
