async function getDadJoke() {
  const url = 'https://icanhazdadjoke.com/';
  let h = new Headers({
    Accept: 'application/json',
    'User-Agent': 'Nathan Birch User Agent https://nathanbirch.github.io/',
  });
  const response = await fetch(url, { headers: h });
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('No dad jokes found: ' + response.status);
  }
}

function newJoke() {
  const dad_id = document.getElementById('dad-joke');
  dad_id.innerHTML = '';
  dad_id.classList.remove('small');
  const joke = getDadJoke()
    .then((j) => {
      let joke = j['joke'];
      dad_id.innerHTML = joke;
      if (joke.length > 85) {
        dad_id.classList.add('small');
      }
    })
    .catch((e) => {
      dad_id.innerHTML = e;
    });
}

window.addEventListener('load', (event) => {
  newJoke();
});
