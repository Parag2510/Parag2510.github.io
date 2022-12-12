import React from 'react'

const emailer = () => {

  return (
    <div>
        <h1>Contact Form</h1>
        <from>
            <label>name</label>
            <input type="text" name="Your Name"  />

            <label>Email</label>
            <input type="email" name="Your Email"  />

            <label>Massage</label>
            <textarea  name="message" rows="4"  />
            <input type="submit" value="send"/>
        </from>
    </div>
  )
}

export default emailer