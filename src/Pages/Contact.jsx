import React from 'react'
import Header from '../Components/Header'
import '../Pages/Contact.css'



const Contact = () => {
  return (
    <div>
      <Header />
      
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Contact