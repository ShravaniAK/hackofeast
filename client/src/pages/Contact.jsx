import React from 'react'
import '../style.css';
const Contact = () => {
  return (
    <div className='container'>
      <div className='item'>
        <div className='contact'>
         
          <img
                 src="https://static.vecteezy.com/system/resources/previews/000/453/432/original/vector-contact-us-background.jpg"
                 alt="Contact Us Image"
                 className="w-full h-full md:max-w-sm rounded-lg shadow-md"
               />
        </div>
        <div className='submit-form'>
          <h4 className='third-text'>Contact Us</h4>
          <form action="">
            <div className='input-box'>
              <input type='text' className='input' required></input>
              <label for="">Name</label>
            </div>
            <div className='input-box'>
            <input type='email' className='input' required></input>
              <label for="">Email</label>
            </div>
            <div className='input-box'>
            <input type='tel' className='input' required></input>
              <label for="">Phone</label>
            </div>
            <div className='input-box'>
            <textarea name="" className="input" required id="message" cols="30" rows="10"/>
              <label for="">Message</label>
            </div>
            <input type="submit" className='btn' value="Submit"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
