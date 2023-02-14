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
    const res2 = await axios.get(res.data.next);
    createCard(res2);
    const res3 = await axios.get(res2.data.next);
    createCard(res3);
  } catch (e) {
    console.log("ERROR", e);
  }
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com", config);
    console.log(res);
    showDadJoke(res);
  } catch (e) {
    console.log("ERROR:", e);
  }
};

const loadPage = async () => {
  try {
    await getStarWarsList();
    await getDadJoke();
  } catch (e) {
    console.log(e);
  }
};

loadPage();

var row = $("<div>").attr("class", "row");

function createCard(starData) {
  let names = [];
  for (i = 0; i < starData.data.results.length; i++) {
    names.push(starData.data.results[i].name);
  }
  let nameString = names.toString();
  const div = $("<div>");
  div.attr("class", "card col-4");
  div.html(
    '<div class="card-body">' +
      '<h5 class="card-title">People in Star Wars</h5>' +
      '<h6 class="card-subtitle mb-2 text-muted">Names: </h6>' +
      '<p class="card-text">' +
      nameString +
      "</p>"
  );
  row.append(div);
  $("body").append(row);
}

function showDadJoke(dadData) {
  const div = $("<div>");
  div.attr("class", "card col-12");
  div.html(
    '<div class="card-body">' +
      '<h5 class="card-title">Dad Joke</h5>' +
      '<p class="card-text">' +
      dadData.data.joke +
      "</p>"
  );
  row.append(div);
  $("body").append(row);
}
