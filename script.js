const el = document.getElementById('convertButton');
if (el) {
  el.addEventListener('convert', swapper, false);
}

function convert() {
    var val1 = document.getElementById("val1").value;
    var curr1 = document.getElementById("currency1").value;
    var curr2 = document.getElementById("currency2").value;
    if (val1 != '') {
        const appId = "e5ef3b0f2706df68d1814557"

        apiUrl = "https://v6.exchangerate-api.com/v6/" + appId + "/pair/" + curr1 + "/" + curr2;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(data["conversion_rate"]);
                document.getElementById("output").innerText = val1 * data["conversion_rate"]
            })
            .catch(error => {
                console.error('Error fetching exchange rates:', error);
            });
    }
    
}
