// Auto Dark Mode Based on Time of Day
function setInitialTheme() {
    const currentHour = new Date().getHours();
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
    
    if (isDarkModeEnabled || (currentHour >= 19 || currentHour < 7)) {
        document.body.classList.add('dark-mode');
        document.getElementById('toggleDarkMode').classList.add('dark');
    } else {
        document.body.classList.add('light-mode');
    }
}
setInitialTheme();

// Dark Mode Toggle
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
toggleDarkModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    toggleDarkModeButton.classList.toggle('dark');  // Ensure the button changes appearance

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});

// Preserve Dark Mode on Reload
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('toggleDarkMode').classList.add('dark');
}
