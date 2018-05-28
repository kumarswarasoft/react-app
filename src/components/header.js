import React, {Component} from 'react';
class Header extends Component{
    inputTextchange(event){
        console.log("hai");
    }
     render(){
 
        
         return(
             <header >
         
 
                 <div className="logo"
                 onclick= {()=>{console.log('logo is clicked')}}>Logo</div>
                 <input onchange={this.inputTextchange.bind(this)}/>
                 </header>
         )
     }
 
 }
  export default Header;