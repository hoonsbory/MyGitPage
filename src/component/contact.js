import React, { Component } from 'react'
import emailjs from "emailjs-com"
export default class contact extends Component {
    
    render() {
        function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('tonymkcv', 'template_3YUmNpTi', e.target, 'user_tbMVZhZNhbJbK8s6CoGH3')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
          }
        return (
            <div>
                <section className="et-slide" id="contact" style={{marginBottom : '70px'}}>
                <div className="skillDiv">
                    <h3 id="skillSub"><span style={{fontSize : "1rem"}}>Contact</span></h3>
                    </div>
                    <h3>이메일보내기</h3>
                    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
 
                </section>
            </div>
        )
    }
}
