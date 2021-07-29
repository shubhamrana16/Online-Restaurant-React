 import axios from 'axios';
import  Type from '../Constants';
 


 export const loginAction = ( loginInfo,history)=>{
     console.log(loginInfo);
      return async (dispatch)=>{
          try{
              const result = await axios.post("http://localhost:8080/authenticate",loginInfo);
              console.log(result);
                dispatch({
                    type:Type.login_Successful, 
                    payload:result
                });
                
                    history.push("/Welcome")
                

          }
          catch(error){
              console.log(error);
              dispatch({
                type:Type.login_Successful, 
                payload:{}
              })
              alert("You are not register..! Please  Sign Up")

          }
      }


      

    } 
    


export default loginAction;
 

 