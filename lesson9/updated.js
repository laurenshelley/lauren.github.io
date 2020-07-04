
const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
};
document.getElementById('updated').textContent = new Date(document.lastModified).toLocaleDateString('en-us',
    options);