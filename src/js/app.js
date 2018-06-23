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
        // document.getElementById('output').innerHTML = arr;

    } else {
        console.log(`Status ${this.status}`);
    }
})