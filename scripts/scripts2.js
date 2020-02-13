// Information on parsing Query Parameters https://davidwalsh.name/query-string-javascript

const urlParams = new URLSearchParams(window.location.search);
const showParams = document.querySelector('#showParams');

const values = urlParams.values();
for (value of values) {
  showParams.innerHTML = value;
}
