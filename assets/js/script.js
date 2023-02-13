// $.ajax({
//   url: "https://swapi.dev/api/people/",
//   method: "GET",
// })
//   .then((response) => {
//     console.log(response);
//     createCard(response);
//     $.ajax({
//       url: response.next,
//       method: "GET",
//     }).then((res) => {
//       console.log(res);
//       createCard(res)
//     });
//   })
//   .fail((err) => {
//     console.log("UH OH: " + err);
//   });

// 1st REFACTOR
// axios.get("https://swapi.dev/api/people/")
// .then(res => {
//     console.log("Response:", res)
//     createCard(res)
// })
// .catch(e => {
//     console.log("ERROR", e)
// })

const getStarWarsList = async () => {
  try {
    const res = await axios.get("https://swapi.dev/api/people/");
    createCard(res);
    const page2 = res.data.next;
    const res2 = await axios.get(page2);
    createCard(res2)
    const page3 = res2.data.next;
    const res3 = await axios.get(page3);
    createCard(res3)

  } catch (e) {
    console.log("ERROR", e);
  }
};

getStarWarsList()

function createCard(starData) {
  let names = [];
  for (i = 0; i < starData.data.results.length; i++) {
    names.push(starData.data.results[i].name);
  }
  let nameString = names.toString();
  var div = $("<div>");
  div.attr("class", "card").attr("style", "width: 20rem");
  div.html(
    '<div class="card-body">' +
      '<h5 class="card-title">People in Star Wars</h5>' +
      '<h6 class="card-subtitle mb-2 text-muted">Names: </h6>' +
      '<p class="card-text">' +
      nameString +
      "</p>"
  );
  $("body").append(div);
}
