document.addEventListener('DOMContentLoaded', function () {
  const body = document.querySelector('body');
  const btn = document.querySelector('.btn');
  const icon = document.querySelector('.btn__icon');

  // Function to store the dark mode preference
  function storeTheme(value) {
      localStorage.setItem('darkmode', value);
  }

  // Function to initialize the theme based on localStorage or time of day
  function initializeTheme() {
      const darkMode = localStorage.getItem('darkmode');
      const currentHour = new Date().getHours();

      if (darkMode === 'true' || (currentHour >= 19 || currentHour < 7)) {
          body.classList.add('darkmode');
          body.classList.remove('lightmode');
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
      } else {
          body.classList.add('lightmode');
          body.classList.remove('darkmode');
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
      }
  }

  // Call the function to initialize the theme when the page loads
  initializeTheme();

  // Add event listener to the theme toggle button
  btn.addEventListener('click', () => {
      const isDarkMode = body.classList.toggle('darkmode');
      body.classList.toggle('lightmode');

      // Toggle the icon
      if (isDarkMode) {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
      } else {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
      }

      // Store the theme preference
      storeTheme(isDarkMode);
  });
});
