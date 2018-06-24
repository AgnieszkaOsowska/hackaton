var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://kitan.pl/pb/data/news.json', true);
xhr.send();

xhr.addEventListener('load', function () {
    if (this.status === 200) {
        console.log('ok');
    }
})

xhr.addEventListener('error', function (e) {
    console.log('Error');
})

xhr.responseText;
xhr.responseXML;

xhr.addEventListener('load', function () {
    if (this.status === 200) {
        console.log('ok');
        var arr = JSON.parse(this.responseText);
        console.log(arr);
        if (arr.length > 2) {
            var array = arr.slice(0, -1);
        }
        console.log(array);
         document.getElementById('img1').src = (array[0].image.x1);
         document.getElementById('img2').src = (array[1].image.x1);
         document.getElementById('img3').src = (array[2].image.x1);

         document.getElementById('title1').innerHTML = (array[0].title);
         document.getElementById('title2').innerHTML = (array[1].title);
         document.getElementById('title3').innerHTML = (array[2].title);

         document.getElementById('description1').innerHTML = (array[0].description);
         document.getElementById('description2').innerHTML = (array[1].description);
         document.getElementById('description3').innerHTML = (array[2].description);

         document.getElementById('author1').innerHTML = (`Author: ${array[0].author}`);
         document.getElementById('author2').innerHTML = (`Author: ${array[1].author}`);
         document.getElementById('author3').innerHTML = (`Author: ${array[2].author}`);
    } else {
        console.log(`Status ${this.status}`);
    }
})



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

