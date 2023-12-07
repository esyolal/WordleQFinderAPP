const date = new Date();
const yil = date.getFullYear();
const ay = date.getMonth() + 1;
const gun = String(date.getDate()).padStart(2, '0');

const bugun = yil + "-" + (ay < 10 ? "0" : "") + ay + "-" + (gun < 10 ? "0" : "") + gun;
console.log(bugun);
const jsonURL = `https://www.nytimes.com/svc/wordle/v2/${bugun}.json`;
fetch(jsonURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
console.log('Solution:',data.solution);
  })
  .catch(error => {
    console.error('Hata:', error);
  });