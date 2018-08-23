let request = new XMLHttpRequest();

request.open('GET', 'http://127.0.0.1:8081/process_get?first_name=Felipe&last_name=Valencia', true);
request.onload = function () {

    // Begin accessing JSON data here
    let data = JSON.parse(this.response);
    let first_name = data.first;
    let last_name = data.last;

    console.log(first_name);

    console.log(last_name);

    document.getElementById("first").innerHTML += first_name;
    document.getElementById("last").innerHTML += last_name;



};

request.send();