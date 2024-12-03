// Array of all available games (add as many games as needed)
const allGames = [
    {
        imgSrc: "https://ziphytech.com.ng/images/ppsspp-gold.webp",
        title: "PPSSPP Gold APK Download For Android (Latest Version)",
        link: "https://ziphytech.com.ng/ppsspp-gold"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/zarchiver.webp",
        title: "ZArchiver Pro APK Download For Android",
        link: "https://ziphytech.com.ng/zarchiver"
    },
   
    
    // Add more games as needed...
];


const gamesPerPage = 10;  // Limit to 6 games per page
let currentPage = 1;  // Start from page 1

// Function to shuffle an array (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to render the current page of popular downloads
function renderPopularDownloads() {
    const listContainer = document.getElementById('popular-downloads-list');
    listContainer.innerHTML = '';  // Clear previous content

    // Shuffle games and slice to get the first 6 randomly
    const shuffledGames = shuffleArray([...allGames]);
    const currentGames = shuffledGames.slice(0, gamesPerPage);

    // Iterate through the current games and create list items
    currentGames.forEach(game => {
        // Create list item element
        const listItem = document.createElement('li');

        // Create image element
        const img = document.createElement('img');
        img.src = game.imgSrc;
        img.alt = game.title;

        // Create anchor element
        const link = document.createElement('a');
        link.href = game.link;
        link.textContent = game.title;

        // Append image and anchor to the list item
        listItem.appendChild(img);
        listItem.appendChild(link);

        // Append the list item to the ul element
        listContainer.appendChild(listItem);
    });

    updatePaginationControls();  // Update pagination controls
}

// Function to update pagination controls (can still be used for future pages)
function updatePaginationControls() {
    const paginationContainer = document.getElementById('pagination-controls');
    paginationContainer.innerHTML = '';  // Clear previous pagination

    // Currently, random games are displayed per page. Add buttons as needed.
    // Example: If you want pagination for random games, this can be extended here.
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderPopularDownloads);



document.getElementById("pagination-controls").addEventListener("click", function() {
    window.location.href = "https://ziphytech.com.ng/games";
  });
  