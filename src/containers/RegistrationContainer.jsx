import { connect } from "react-redux";
import Registration from "../components/authentication/Registration";

const mapStateToProps = (nextRegistrationState)=>{
    return(
        {
            user:nextRegistrationState,
        }
       
    );
}



const mapDispatchToProps = (Dispatch) =>{
    return(
        {
            registerHandler: (registerState)=>{
               // Dispatch()
               console.log({registerState});
            }
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Registration)