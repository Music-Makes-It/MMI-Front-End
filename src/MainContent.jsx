import React, {Component} from "react"; 
export default class MainContent extends Component {
    render() {
      return (
        <React.Fragment>
  <div className="heading1">Explore 
  <p> A Social Enterprise that moves music deeper into our community</p>
    <a classButton="button" href="./Product" role="button">Wear It</a>
</div>


{/* Merch updates form */}
    <div className="MerchUpdateForm">
      <h1>Sign up to get updates on newly released Merch</h1>
      <form>
      <fieldset>
         <label>
           <p>First Name</p>
           <input name="First Name" />
         </label>
         <label>
           <p>Last Name</p>
           <input name="Last Name" />
         </label>
         <label>
           <p>Email</p>
           <input name="Email" />
         </label>

       </fieldset>
       <a classButton="button" role="button">Submit</a>
      </form>
    </div>
  </React.Fragment>
  )
      }
    }
    
  






      




