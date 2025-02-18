
import './styles.css';
import Question from './Question'


export function Javafun() {
  function Calculatejava(event){
     
    let j1=event.target.j1.value;
    let j2=event.target.j2.value;
    let j3=event.target.j3.value;
    let j4=event.target.j4.value;
    let j5=event.target.j5.value;
    
    let javamarks=0;
    
  
    if(j1==='James Gosling'){
      javamarks++;
    }
    if(j2==='Use of Pointers'){
      javamarks++;
    }
    if(j3==='.js'){
      javamarks++;
    }
    if(j4==='Compilation'){
      javamarks++;
    }
    if(j5==='OutOFMemoryError'){
      javamarks++;
    }
    alert('Total marks :'+javamarks)
  }
  return (
    <div className='Javaclass container'>
        <form onSubmit={Calculatejava}>
   <Question
   qnum="j1"
   que="1.Who invented Java Programming?"
   opA="Guido van Rossum"
   opB="James Gosling"
   opC="Dennis Ritchie"
   opD="Bjarne Stroustrup"
   />
    
    <Question
    qnum="j2"
    que="2.Which of the following is not java feature?"
    opA="Object-Oriented"
    opB="Use of Pointers"
    opC="Portable"
    opD="Dynamic and Extensible" />

    <Question
    qnum="j3"
    que="3.What is the extension of java code files?"
    opA=".js"
    opB=".txt"
    opC=".class"
    opD=".java" />

    <Question
    qnum="j4"
    que="4.Which of the following is not an OOPS concept in java"
    opA="Polymorphism"
    opB="Inheritence"
    opC="Compilation"
    opD="Encapsulation" />

    <Question
    qnum="j5"
    que="5.Which exception is thrown when java is out of memory?"
    opA="MemoryError"
    opB="OutOFMemoryError"
    opC="MemoryOutOfBoundsException" 
    opD="MemoryFullException"/>
    <input type='submit' value='submit'/>
  </form>
    </div>
  )
}

export function Sqlfun(){

  function Calculatesql(event){
 
  let s1=event.target.s1.value;
  let s2=event.target.s2.value;
  let s3=event.target.s3.value;
  let s4=event.target.s4.value;
  let s5=event.target.s5.value;
  
  let sqlmarks=0;
  
  if(s1==='Structured Query Language')
  {
    sqlmarks++;
  }
  if(s2==='*'){
    sqlmarks++;
  }
  if(s3==='Update'){
    sqlmarks++;
  }
  if(s4==='Insert, Update, Delete'){
    sqlmarks++;
  }
  if(s5==='UPDATE'){
    sqlmarks++;
  }

  alert('Total marks :'+sqlmarks)
  }
  return(
   <div className='Sqlclass container'>
    <form onSubmit={Calculatesql}>
    <Question
    qnum="s1"
    que="1.What is the full form of SQL"
    opA="Simple Query Language" 
    opB="Structured Query Language"
    opC="Structured Queuing Lexicon"
    opD="Structured Queuing Language" />

  <Question
  qnum="s2"
  que="2.---- symbol used to see every column of the table"
  opA="/"
  opB="--"
  opC="*"  
  opD="!" />

  <Question
  qnum="s3"
  que="3.Which commond is used to change data in a table"
  opA="Update"
  opB="Insert"
  opC="Browse"
  opD="None" />

  <Question
  qnum="s4"
  que="4.Which of the following represents the three basic SQL DML commonds?"
  opA="Drop, Update, Delete"
  opB="Insert, Alter, Delete"
  opC="Insert, Update, Create"
  opD="Insert, Update, Delete" />

  <Question
  qnum="s5"
  que="5.SQL command used to modify attribute values of one or more selected type is :"
  opA="MODIFY"
  opB="UPDATE"
  opC="INSERT"
  opD="ALTER" />
<input type='submit' value='sumit'></input>
</form>
  </div>

  )
}

export function Communicationfun(){

  function calculate(event){

    let m1=event.target.q1.value;
    let m2=event.target.q2.value;
    let m3=event.target.q3.value;
    let m4=event.target.q4.value;
    let m5=event.target.q5.value;

    let marks=0;
    if(m1==='Meditation'){
      marks++;
    }
    if(m2==='Ebay'){
      marks++;
    }
    if(m3==='Order'){
      marks++;
    }
    if(m4==='November 16'){
      marks++;
    }
    if(m5==='Times of India'){
      marks++;
    }
    
    
    alert('Total marks :'+marks)
  }

  return(
  <div className='Communicationclass container'>
    <form onSubmit={calculate}>
    <Question
    qnum="q1"
    que="1.In the Buddhist thought ,mindfullness is built into the process of:"
    opA="Meditation"
    opB="Social interaction"
    opC="Artistic creation"
    opD="Political debate" 
    
     />

    <Question
    qnum="q2"
    que="2.Which of the following is not a social network"
    opA="Linkedin"
    opB="Instagram"
    opC="Twitter"
    opD="Ebay" />

    <Question
    qnum="q3"
    que="3.The concept of entropy as used in communication is related to"
    opA="Virtual reality"
    opB="Marketplace"
    opC="Order"
    opD="Communicative language" />

    <Question
    qnum="q4"
    que="4.Every year press council of india celebrates the national press day on :"
    opA="January 30"
    opB="November 9"
    opC="October 15"
    opD="November 16" />

    <Question
    qnum="q5"
    que="5.Which newspaper logo bears Let Truth prevail?"
    opA="The Statesman"
    opB="Times of India"
    opC="The Tribute"
    opD="The Hindu" />
   <input type='submit' value='submit'/>
   </form>
  </div>

  )
}


 
 
 
 
 