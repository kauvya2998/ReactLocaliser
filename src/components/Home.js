import React, {useState} from 'react'
import '../App.css';
import {
  Link
} from "react-router-dom"
//import Balance from '../components/Balance'
//import Transfer from '../components/Transfer'

//9841543273
function Home(props) {
    const bgArray=[
      'https://m.economictimes.com/thumb/msid-71487585,width-1200,height-900,resizemode-4,imgsize-169788/bank-getty.jpg',
      'https://www.incimages.com/uploaded_files/image/1920x1080/getty_158673029_9707279704500119_78594.jpg'
    ]
    const [bg,setBg]=useState(bgArray[0])
  

    const changePic = (action) => {
      
        for(let i=0; i<bgArray.length;i++)
        {
          if(bg===bgArray[i]){
            if(action===1){
              setBg(bgArray[(i+1)%bgArray.length])
            }
            else{
              if(i!==0)
              setBg(bgArray[i-1])
              else
              setBg(bgArray[bgArray.length-1])
            }
          }
        }
      
    }
      

    return (
        <>
        <div className="intro">
          <p className="iline">Find the nearest branch and open up an account!!!</p> 
          <p className="iline">Add safety to you bucket list</p> 
        </div>
        <div className="row">
          <div className="column" style={{backgroundColor:'#f0ece1',width:'35%'}}>
           {props.userName?
           <div>
             <p className="homeIntro" style={{fontFamily:'Sofia'}}>
             findYOURSELF Bank assures safety and peace !
             <br />
             What are you waiting for?
             <br />
             Hurry Up!
             <br />
             Create an account and /or login and enjpy e-banking!!!
             <br />
             <Link to='/balance'><p>View Balance</p></Link>
             <br />
             <Link to='/transfer'><p>Fund Transfer</p></Link>         
           </p>
           </div>
           :
           <p className="homeIntro" style={{fontFamily:'Sofia'}}>
             <br />
             <br />
            findYOURSELF Bank assures safety and peace !
             <br />
             <br />
             What are you waiting for?
             <br />
             <br />
             Hurry Up!
             <br />
             <br />
             Create an account and /or login and enjpy e-banking!!!
             <br />       
           </p>
             }
          </div>
          <div className="column" style={{backgroundColor:'#deddd9',width:'65%'}}>
             <img src={bg} alt="Sorry :(" height="353px" width="100%"  />
             <p className="prev" onClick={()=>changePic(-1)} > &#10094; </p>
             <p className="next" onClick={()=>changePic(1)} > &#10095; </p>
          </div>
</div>
{!props.islogged ?<p className="copyrights">Copyrights:Kauvya Krishna Kumar</p>:null}

        </>
    )
}

export default Home
