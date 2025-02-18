import {useState} from 'react'
import {Javafun, Sqlfun,Communicationfun} from './Subject';
import './styles.css'


function App() {
  
 const [subject, setsubject] = useState(null);
  
 function renderPage(){
  switch(subject){
    case 'JAVA':
      return<Java/>
    case 'SQL':
        return<Sql/>
    case 'COMMUNICATION':
      return<Communication/>  
      default:
        return<h1> </h1> 
  }
 }


 


 

  return (
    <div className="App"> 
      <button onClick={()=>setsubject('JAVA')}>Java</button><br></br><br></br>
      <button onClick={()=>setsubject('SQL')}>Sql</button><br></br><br></br>
      <button onClick={()=>setsubject('COMMUNICATION')}>Communication</button><br></br><br></br>
      {renderPage()}

    </div>
        
);

}

function Java(){
  
  return(
    <>Java Component
    <Javafun/>
    </>
  )
}
function Sql(){
  return(
    <>Sql Component
    <Sqlfun/>
    </>
  )
}

function Communication(){
  return(
    <>Communication Component
    <Communicationfun />
   
    </>
  )
}


export default App;
