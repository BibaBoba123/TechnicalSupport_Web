const url = 'https://raw.githubusercontent.com/BibaBoba123/TechnicalSupport_Web/main/test.json';

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonResponse) {
    console.log(jsonResponse);
  });
