var btn = document.getElementById("getLocation");

btn.addEventListener('click', displayLocation);

function displayLocation() {
    fetch('https://api.ipify.org/?format=json')
        .then(response => {
            // console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data.ip);
            getCountry(data.ip);
        })
        .catch(err => console.log(err));

}





function getCountry(ip) {
    console.log(ip);
    fetch(`https://ip-api.com/json/${ip}`)
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            return data;
        })
        .catch(function(err) {
            console.log(err);
        });
}




// fetch(`https://api.icndb.com/jokes/random/${num.value}`)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             console.log(data);
//             let output = '';
//             let ul = document.createElement('ul');
//             ul.className = "collection with-header";
//             jokes.appendChild(ul);
//             console.log(ul);
//             let sno = 1;
//             data.value.forEach(function(data) {
//                 let li = document.createElement("li");
//                 li.className = "collection-item";
//                 li.innerHTML = `${sno++}. ${data.joke}`;
//                 ul.appendChild(li);
//                 console.log(ul);
//             });
//             num.value = ''
//         })
//         .catch(function(err) {
//             console.log("Error: something went wrong")
//         });
// }