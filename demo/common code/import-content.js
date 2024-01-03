// import-content.js
export function importContent(url, containerId) {
fetch(url)
.then(response => response.text())
.then(content => {
const container = document.getElementById(containerId);
container.innerHTML = content;
})
.catch(error => console.error('Error fetching content:', error));
}