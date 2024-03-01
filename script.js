document.addEventListener("DOMContentLoaded", function() {
    var convertButton = document.getElementById("convertButton");
    if (convertButton) {
        convertButton.addEventListener("click", convert);
    } else {
        console.error("Button with ID 'convertButton' not found in the document.");
    }

    function convert() {
        var val1 = document.getElementById("val1").value;
        var curr1 = document.getElementById("currency1").value;
        var curr2 = document.getElementById("currency2").value;
        
        if (val1 != '') {
            const appId = "e5ef3b0f2706df68d1814557";
            var apiUrl = "https://v6.exchangerate-api.com/v6/" + appId + "/pair/" + curr1 + "/" + curr2;

            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    if (data.conversion_rate) {
                        document.getElementById("output").innerText = val1 * data.conversion_rate;
                    } else {
                        console.error('Conversion rate not found in response:', data);
                        alert('Conversion rate not found. Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error fetching exchange rates:', error);
                    alert('Error fetching exchange rates. Please try again later.');
                });
        } else {
            alert("Please enter a value");
        }
    }
});
