var req = new XMLHttpRequest()
url = "https://restcountries.com/v3.1/all"
req.open("GET",url,true)
req.send()
req.onload = function(){
    countries_data=Object.values(JSON.parse(this.response));
    var cnames = []
    for(var i=0; i<countries_data.length; i++){
        cnames.push(countries_data[i].name.common)
    }
    for(var i=0; i<cnames.length; i++){
        header = document.createElement("h1")
        header.innerHTML = cnames[i]
        document.body.appendChild(header)
    }
}