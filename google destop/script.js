// Preserve and restore tagline text
const editableText = document.getElementById('editable-text');
if (localStorage.getItem('savedText')) {
  editableText.textContent = localStorage.getItem('savedText');
}
editableText.addEventListener('input', function () {
  localStorage.setItem('savedText', this.textContent);
});

// Theme Toggle
const themeButton = document.getElementById('toggle-theme');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Load theme from storage
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(savedTheme);

  // Mark visited links
  document.querySelectorAll('.app-link').forEach(link => {
    const name = link.dataset.name;
    if (localStorage.getItem(`visited-${name}`)) {
      link.classList.add('visited');
    }
    link.addEventListener('click', () => {
      localStorage.setItem(`visited-${name}`, 'true');
    });
  });
});

// Google search
function googleSearch() {
  const text = document.getElementById("search").value;
  const cleanQuery = text.replace(" ", "+");
  const url = 'https://www.google.com/search?q=' + cleanQuery;
  window.location.href = url;
}
