const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Initialize button position
let buttonX = 0;
let buttonY = 0;

// Function to move the No button away from cursor
function moveButtonAway(event) {
    const buttonRect = noBtn.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    // Calculate distance and direction
    const deltaX = mouseX - buttonCenterX;
    const deltaY = mouseY - buttonCenterY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // Only move if cursor is close to the button (within 200px)
    if (distance < 200 && distance > 0) {
        // Calculate movement direction (away from cursor)
        const moveDistance = (200 - distance) / 2; // Move faster when closer
        const moveX = (-deltaX / distance) * moveDistance;
        const moveY = (-deltaY / distance) * moveDistance;
        
        // Update position
        buttonX += moveX;
        buttonY += moveY;
        
        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Keep button within reasonable bounds (centered area)
        const maxOffset = Math.min(viewportWidth, viewportHeight) * 0.3;
        buttonX = Math.max(-maxOffset, Math.min(maxOffset, buttonX));
        buttonY = Math.max(-maxOffset, Math.min(maxOffset, buttonY));
        
        // Apply new position using transform for better performance
        noBtn.style.transform = `translate(${buttonX}px, ${buttonY}px)`;
    }
}

// Handle Yes button click
yesBtn.addEventListener('click', () => {
    window.location.href = 'yay.html';
});

// Add mousemove listener with throttling
let lastMoveTime = 0;
document.addEventListener('mousemove', (event) => {
    const now = Date.now();
    if (now - lastMoveTime > 16) { // ~60fps
        moveButtonAway(event);
        lastMoveTime = now;
    }
});
