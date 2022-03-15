const nameJsonFile = 'users.json';
const url = `https://raw.githubusercontent.com/BibaBoba123/TechnicalSupport_Web/main/json/${nameJsonFile}`;


fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonResponse) {
    console.log(jsonResponse);
  });
