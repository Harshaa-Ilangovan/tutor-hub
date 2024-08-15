document.addEventListener('DOMContentLoaded', () => {
    const toggleMenu = document.getElementById('toggle-menu');
    const navLinks = document.querySelector('.nav-links');

    toggleMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('keydown', function(event) {
    const key = event.key;
    switch (key) {
        case 'Enter':
            // Handle Enter key
            handleEnterKey();
            break;
        case ' ':
            // Handle Space key (e.g., play/pause media)
            handleSpaceKey();
            break;
        case 'ArrowDown':
            // Handle Down Arrow key (e.g., scroll down)
            handleArrowDownKey();
            break;
        case 'ArrowUp':
            // Handle Up Arrow key (e.g., scroll up)
            handleArrowUpKey();
            break;
        case 'ArrowLeft':
            // Handle Left Arrow key (e.g., navigate back)
            handleArrowLeftKey();
            break;
        case 'ArrowRight':
            // Handle Right Arrow key (e.g., navigate forward)
            handleArrowRightKey();
            break;
        case 'Home':
            // Handle Home key (e.g., scroll to top)
            handleHomeKey();
            break;
        case 'End':
            // Handle End key (e.g., scroll to bottom)
            handleEndKey();
            break;
        default:
            break;
    }
});

function handleEnterKey() {
    // Example: Simulate click on a focused element
    const focusedElement = document.activeElement;
    if (focusedElement && focusedElement.tagName === 'A') {
        focusedElement.click();
    }
}

function handleSpaceKey() {
    // Example: Toggle play/pause of media or trigger a button
    const focusedElement = document.activeElement;
    if (focusedElement && focusedElement.tagName === 'BUTTON') {
        focusedElement.click();
    }
}

function handleArrowDownKey() {
    // Example: Scroll down the page or move focus to the next element
    window.scrollBy(0, 100);
}

function handleArrowUpKey() {
    // Example: Scroll up the page or move focus to the previous element
    window.scrollBy(0, -100);
}

function handleArrowLeftKey() {
    // Example: Navigate to the previous page or image in a gallery
    // Add your specific logic here
}

function handleArrowRightKey() {
    // Example: Navigate to the next page or image in a gallery
    // Add your specific logic here
}

function handleHomeKey() {
    // Example: Scroll to the top of the page
    window.scrollTo(0, 0);
}

function handleEndKey() {
    // Example: Scroll to the bottom of the page
    window.scrollTo(0, document.body.scrollHeight);
}
document.addEventListener('DOMContentLoaded', () => {
    const showLoginButton = document.getElementById('show-login');
    const loginContainer = document.getElementById('login-container');

    showLoginButton.addEventListener('click', () => {
        if (loginContainer.style.display === 'none' || loginContainer.style.display === '') {
            loginContainer.style.display = 'block';
        } else {
            loginContainer.style.display = 'none';
        }
    });
});

