//access all html tag 
const button_form=document.querySelector('#form-button');
const username=document.querySelector('#name');
const email=document.querySelector('#email');
const phone_number=document.querySelector('#phone_number');
const message=document.querySelector('#message');
const wrong=document.querySelector('#wrong');
const print=document.querySelector('#print-message');
let wrong_message='';

//add listner to contact me form
button_form.addEventListener('click', ()=> {
    const length_name=username.value.length;
    const find_email=email.value;
    const before=find_email.substr(0,find_email.indexOf('@'));
    const after=find_email.substr(find_email.indexOf('@')+1);
    const form_phone=phone_number.value;
    const length_message = message.value.length;

        //check the length of fullname
        if(length_name<5){
            wrong.style.display='block';
            wrong_message+='Length of full name less than 5 \n ';
        }

        //check the format of entered email
        if(before.length < 3 && after.length < 5){
            wrong.style.display='block';
            wrong_message+='Length before @ less than 3 or length after @ less than 5 \n ';
        }

        //check the format of entered phone number
        if(form_phone[4] == ' ' || form_phone[4] == 0){
            wrong.style.display='block';
            wrong_message+='Invalid phone number form \n ';
        }

        if(form_phone[4] == 3){
            if (form_phone.substr(form_phone.indexOf('1')+1).length !=7){
                wrong.style.display='block';
                wrong_message+='Length of phone number is different than 7 \n ';
            }
        }

        if(form_phone[4] != 3){
            if (form_phone.substr(form_phone.indexOf('1')+1).length !=8){
                wrong.style.display='block';
                wrong_message+='Length of phone number is different than 8 \n ';
            }
        }

        //check the length of message
        if(length_message < 100){
            wrong.style.display='block';
            wrong_message+='Length of message less than 100 \n ';
        }

        print.innerText=wrong_message;          
})