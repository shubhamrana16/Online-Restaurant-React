 import  Type from '../Constants';



const initialLoginState ={ 
    isLogin: false,

    user: {
        user_id:  0,
        name: "",
        userName: "",
        phoneNumber: "",
        password: "",
        userRoles: [],
    },
    jwtToken: ""
};
 

 const loginReducer = (state = initialLoginState, action,history) =>{
     switch (action.type) {
         case  Type.login_Successful:
             return{
                isLogin: true,
                state:action.payload

              
             };
             
        case Type.login_fail:
            return {
                state
            }    
     
         default:
            return state;
     }

      

     
     }
    
 

export default   loginReducer ;
