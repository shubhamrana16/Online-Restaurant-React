 import  Type from '../Constants';



const initialLoginState ={ 
        isLoggIn: false,

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
 

 const loginReducer = (state = initialLoginState, action) =>{
     switch (action.type) {
         case  Type.login_Successful:
             return{
                isLoggIn: true,
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
