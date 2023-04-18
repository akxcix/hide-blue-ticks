// Function to hide blue ticks
function hideBlueTicks() {
    const blueTickIcons = document.querySelectorAll('svg[aria-label="Verified account"]');
    blueTickIcons.forEach(icon => {
        icon.style.display = 'none';
    });
}

// Hide blue ticks on initial load
hideBlueTicks();

// Observe DOM changes to hide blue ticks when new content is loaded
const observer = new MutationObserver(() => {
    hideBlueTicks();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Handle history push state to hide blue ticks on page navigation
const originalPushState = window.history.pushState;
window.history.pushState = function () {
    originalPushState.apply(this, arguments);
    setTimeout(() => {
        hideBlueTicks();
    }, 500);
};
