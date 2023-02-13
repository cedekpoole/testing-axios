
$.ajax({
    url: "https://swapi.dev/api/planets/",
    method: "GET"
}).then(response => {
    console.log(response)
})