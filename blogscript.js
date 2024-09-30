function toggleDescription(id) {
    var element = document.getElementById(id);
    element.classList.toggle('hidden');
}
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    const targetUrl = this.getAttribute('href');
    // Load the content dynamically here (e.g., via fetch)
    // Or update the URL without reloading (history.pushState)
  });
});
formElement.addEventListener('submit', function(event) {
  event.preventDefault();
});

