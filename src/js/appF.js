//formularz


function checkForm() {
    var nameF = document.getElementById('name');
    var nameFv= nameF.value;
    var surnameF = document.getElementById('surname')
    var surnameFv= surnameF.value;
    var emailF = document.getElementById('email');
    var emailFv= emailF.value;
    var phoneF = document.getElementById('phone');
    var phoneFv = phoneF.value;
    var textarF = document.getElementById('textar');
    var textarFv = textarF.value;
    var textarCh = document.getElementsByClassName('textcheck')[0];
    var capF = document.getElementById('cap');
    var capFv = capF.value;
    
    var companyF = document.getElementById('company');
  
    if (nameFv === '') {
     nameF.setAttribute('placeholder', 'Write name');
    }
    else{
        if(surnameFv === ''){
            surnameF.setAttribute('placeholder', 'Write surname');
        }
        else {
            if ((phoneFv === '') & (emailFv === '')) {
              phoneF.setAttribute('placeholder', 'Write phone number');
              emailF.setAttribute('placeholder', 'Write e-mail');
            }
            else {
                if(textarFv === ''){
                    textarCh.innerHTML = 'Write message';
                }
                    else{
                        nameF.value = '';
                        surnameF.value = '';
                        phoneF.value = '';
                        emailF.value= '';
                        companyF.value = '';
                        textarF.value = '';
                        textarCh.value = '';
                       
                        nameF.setAttribute('placeholder', 'First name');
                        surnameF.setAttribute('placeholder', 'Last name');
                        phoneF.setAttribute('placeholder', 'Telephone');
                        emailF.setAttribute('placeholder', 'Email');
                        }




                    }
                }
        
              
              
            }
    }

    var btnSend = document.getElementsByClassName('cont__form__btn')[0];
  
  btnSend.addEventListener('click', checkForm);