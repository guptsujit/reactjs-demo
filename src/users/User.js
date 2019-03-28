import React, { Component } from 'react';
import StudentUser from './StudentUser';
import UserEmail from './UserEmail';
import {connect} from 'react-redux';
class User extends Component{
  state = {
     student : [
       {name:"Sujit",empid :2619},
        {name:"Aarohi",empid :2000},
         {name:"Preeti",empid :2430}
      ],
      title : {heading : "User List"},
      name : {firstname : "sujit"},
      email : {email : "sujit.kumar@irissoftware.com"}
  }; 

   updateEmpid = ()=>{
    var newStudentObj = this.state.student.map((student)=>{
       return {empid : student.empid-100,name :student.name };
      
    })  
    this.setState({
     student : newStudentObj
    })

  } 

  changeTitle = (newtitle)=>{
     this.setState({
     title :  {heading : newtitle}
    })
  }
  
  changeNameFormInput = (event)=>{
     this.setState({
     name :  {firstname : event.target.value}
    })
  }

  changeEmailId = (emailid)=>{
     this.setState({
     email :  {email : emailid}
    })
  }
 render(){

     return (
         <div>
        <p>Age : {this.props.age}</p>   
        <p>{this.props.title}</p>
        <p>{this.state.title.heading}</p>
        <p>{this.state.name.firstname}</p>
        <p>{this.state.email.email}</p>
        <br/>
        <button onClick={this.updateEmpid}>Change EmpId</button>
           <br/>
         <button onClick={()=>this.changeTitle("Employee List 2")}>Change title 1</button>
            <br/>
           <button onClick={this.changeTitle.bind(this,"Employee List")}>Change title 2</button>
              <br/>
                <button onClick={this.props.onAgeUp}>Age UP</button>
              <br/>
                <button onClick={this.props.onAgeDown}>Age Down</button>
              <br/>
          <input type="text" onChange={this.changeNameFormInput} value={this.state.name.firstname}/><br/>
        {
            this.state.student.map((student)=>{
               
              return <StudentUser empid = {student.empid} >{student.name}</StudentUser>  
            })
        }
        <UserEmail changeEmailIdFromChildButton = {this.changeEmailId.bind(this,"sujitgupta@gmail.com")} {...this.props}></UserEmail>
           </div>
     )
 }
}

function mapDispatchToProps(dispach){
  return {
    // dispatching plain actions
    onAgeUp: () => dispach({ type: 'AGE_UP' }),
    onAgeDown: () => dispach({ type: 'AGE_DOWN' }),
  }
}
//It is called every time the store state changes.
//It receives the entire store state, and should return an object of data this component needs.
function mapStateToProps(state) {
 return {age:state.age}
}


// Now connect above two functions to sore using connect functions
export default connect(mapStateToProps,mapDispatchToProps) (User);