$.ajax({
  url: "https://swapi.dev/api/people/",
  method: "GET",
})
  .then((response) => {
    console.log(response);
    createCard(response);
    $.ajax({
      url: response.next,
      method: "GET",
    }).then((res) => {
      console.log(res);
      createCard(res)
    });
  })
  .fail((err) => {
    console.log("UH OH: " + err);
  });

function createCard(data) {
    let names = [];
    for (i = 0; i < data.results.length; i++) {
        names.push(data.results[i].name)
    }
    let nameString = names.toString()
  var div = $("<div>");
  div.attr("class", "card").attr("style", "width: 20rem");
  div.html(
    '<div class="card-body">' +
      '<h5 class="card-title">People in Star Wars</h5>' +
      '<h6 class="card-subtitle mb-2 text-muted">Names: </h6>' +
      '<p class="card-text">' + nameString + '</p>'
  );
  $('body').append(div)
}
