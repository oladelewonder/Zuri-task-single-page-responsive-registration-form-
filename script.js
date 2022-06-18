const email = document.querySelector('#email');
const submit=document.querySelector('#submit');
const firstname=document.querySelector('#firstname')


/*submit.addEventListener('click',()=>{
    if(email.validity.typeMismatch){
        email.setCustomValidity('Looks like this is not an email');
    }
    else{
        email.setCustomValidity('');
    };
  
 var input = document.getElementById('firstname');

if(input.value.length == 0){
    document.write("<p>cannot be empty</p>");}   
    
})*/

function validation(){
  if(email.validity.typeMismatch || firstname.validity.value.length == 0){
        email.setCustomValidity('Looks like this is not an email')
        firstname.setCustomValidity('cannot be empty')  ;
    }
    else{
        email.setCustomValidity('');
    };
  
} 
}

  /* I am still a beginner in javascript i still don't know
how to apply all the tutorials i have watched into real task*/