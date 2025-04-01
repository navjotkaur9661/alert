// Function to get query parameters from URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name') || '',
        gender: params.get('gender') || '',
        age: params.get('age') || '',
        college: params.get('college') || '',
        country: params.get('country') || '',
        status: params.get('status') || '',
        id: params.get('id') || '#ALERT-' + Math.floor(Math.random() * 10000)
    };
}

// Function to update the time display
function updateLastSeenTime() {
    const startTime = new Date();
    
    setInterval(() => {
        const now = new Date();
        const secondsElapsed = Math.floor((now - startTime) / 1000);
        
        let timeText;
        if (secondsElapsed < 60) {
            timeText = `Last updated ${secondsElapsed} second${secondsElapsed === 1 ? '' : 's'} ago`;
        } else if (secondsElapsed < 3600) {
            const minutes = Math.floor(secondsElapsed / 60);
            timeText = `Last updated ${minutes} minute${minutes === 1 ? '' : 's'} ago`;
        } else if (secondsElapsed < 86400) {
            const hours = Math.floor(secondsElapsed / 3600);
            timeText = `Last updated ${hours} hour${hours === 1 ? '' : 's'} ago`;
        } else {
            const days = Math.floor(secondsElapsed / 86400);
            timeText = `Last updated ${days} day${days === 1 ? '' : 's'} ago`;
        }
        
        document.getElementById('last-updated').textContent = timeText;
    }, 1000);
}

// Function to bind data to HTML
function bindDataToHTML(params) {
    document.getElementById('profile-name').textContent = params.name;
    document.getElementById('name-value').textContent = params.name;
    document.getElementById('gender-value').textContent = params.gender;
    document.getElementById('age-value').textContent = params.age;
    document.getElementById('college-value').textContent = params.college;
    document.getElementById('country-value').textContent = params.country;
    document.getElementById('alert-status').textContent = params.status + ' Alert';
    document.getElementById('profile-id').textContent = params.id;
    
    // Update location button if coordinates are provided
    if (params.lat && params.lng) {
        const locationBtn = document.getElementById('location-btn');
        locationBtn.href = `https://www.google.com/maps?q=${params.lat},${params.lng}`;
        locationBtn.target = '_blank';
    }
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const params = getQueryParams();
    bindDataToHTML(params);
    updateLastSeenTime();
});