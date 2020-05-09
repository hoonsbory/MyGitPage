import React, { Component } from 'react'
import emailjs from "emailjs-com"
import '../css/contact.css'
export default class contact extends Component {
    
    render() {
        function sendEmail(e) {
            e.preventDefault();
            if(document.getElementById("message").value.length>600){
                alert("글자 수가 초과되었습니다.");
                return;
            }
        
            emailjs.sendForm('tonymkcv', 'template_3YUmNpTi', e.target, 'user_tbMVZhZNhbJbK8s6CoGH3')
              .then((result) => {
                  alert("성공적으로 전송되었습니다!")
              }, (error) => {
                  alert("전송에 실패했습니다.")
              });
          }
        function keyUp(){
            var content;
            content = document.getElementById("message").value;

            if(content.length>600){
                document.getElementById("countSpan").innerHTML = content.length;
                document.getElementById("countSpan").style.color = "red";
                // document.getElementById("submitbtn").setAttribute("disabled","true");
            }else{
                document.getElementById("countSpan").innerHTML = content.length;
                document.getElementById("countSpan").style.color = "black";
                // document.getElementById("submitbtn").removeAttribute("disabled");

            }
        }
        return (
            <div>
                <section className="et-slide" id="contact" style={{marginBottom : '70px'}}>
                <div className="skillDiv">
                    <h3 id="skillSub"><span style={{fontSize : "1rem"}}>Contact</span></h3>
                    </div>
                    <form className="contact-form" onSubmit={sendEmail}>
      <input  type="hidden" name="contact_number" />
      <label>이름</label>
      <input required="required" type="text" name="user_name" />
      <label>이메일</label>
      <input type="email" name="user_email" />
      <label>내용</label>
      <textarea required="required" id="message" name="message" onKeyUp={keyUp} />
      <div id="countword" style={{fontSize : "0.6rem"}}>글자 수 <span id="countSpan">0</span>/600</div>
      <input id="submitbtn" type="submit" value="보내기" />
    </form>
 
                </section>
            </div>
        )
    }
}
