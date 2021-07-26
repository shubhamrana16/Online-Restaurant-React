 import  actionType from '../Constants';
 


 export const RegistrationSuccessful = (userInfo)=>{
    return {
        type: actionType.Registration_Successful,
        payload:userInfo
    } 
    
}


export const RegistrationFail = (error)=>{
    return {
        type: actionType.Registration_Successful,
        payload:error
    } 
    
}

 