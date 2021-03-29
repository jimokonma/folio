function sendEmail(){
    let subject =   document.querySelector('#subject').value
    let email =  document.querySelector('#email').value
    let message =   document.querySelector('#message').value
    if(subject != '' && email !== '' && message !== ''){
       Email.send({
         SecureToken : "c53de826-553e-4e88-adc2-b4494160fd3c",
       To : 'jim.okonma@gmail.com',
     From : email,
     Subject : subject,
     Body : message
 }).then(
   message => alert(message)
   
   );
   subject = ''
   email = ''
   message = ''
}else{
    alert('Please enter all fields')
}
     }



// Home Animation
gsap.from('.logo,h1,h4,p',{duration: 2, y: 50, opacity: 0, stagger: .2})
gsap.from('#btn1',{duration: 1, delay: 1, x: 100, opacity: 0})
gsap.from('#btn2',{duration: .5, delay: 1.5, x: -100, opacity: 0})

// Portfolio Animation
gsap.from('.skillItem',{duration: 2, y: 50, opacity: 0, stagger: .2})

gsap.from('.logoimg',{duration: 2, y: 50, opacity: 0, stagger: .2})
