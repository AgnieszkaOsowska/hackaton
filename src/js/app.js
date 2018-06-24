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