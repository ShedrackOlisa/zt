// Array of all available games (add as many games as needed)
const allGames = [
    {
        imgSrc: "https://ziphytech.com.ng/images/god-of-war-chain.webp",
        title: "God Of War Chains Of Olympus PPSSPP ISO ZIP File Download Highly Compressed",
        link: "https://ziphytech.com.ng/god-of-war-chain"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/god-of-war-ghost.webp",
        title: "God Of War Ghost Of Sparta PPSSPP ISO ZIP File Download Highly Compressed",
        link: "https://ziphytech.com.ng/god-of-war-ghost"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/naruto-storm-4.webp",
        title: "Naruto Shippuden Ultimate Ninja Storm 4 PPSSPP ISO Zip File Download",
        link: "https://ziphytech.com.ng/naruto-storm-4"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/resident-evil-4.webp",
        title: "Resident Evil 4 PPSSPP ISO Zip File Download",
        link: "https://ziphytech.com.ng/resident-evil-4"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/downhill-domination.webp",
        title: "Downhill Domination PPSSPP ISO Zip File Download",
        link: "https://ziphytech.com.ng/downhill-domination"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/jump-force.webp",
        title: "Jump Force PPSSPP ISO Zip File Download Highly Compressed For Android",
        link: "https://ziphytech.com.ng/jump-force"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/tekken-7.webp",
        title: "Tekken 7 PPSSPP ISO Zip File Download Highly Compressed For Android",
        link: "https://ziphytech.com.ng/tekken-7"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/wwe-2k24.webp",
        title: "WWE 2K24 PPSSPP ISO Zip File Download Highly Compressed For Android",
        link: "https://ziphytech.com.ng/wwe-2k24"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/wwe-2k23.webp",
        title: "WWE 2K23 PPSSPP ISO Zip File Download Highly Compressed For Android",
        link: "https://ziphytech.com.ng/wwe-2k23"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/mortal-kombat-9.webp",
        title: "Mortal Kombat 9 PPSSPP ISO Zip File Download",
        link: "https://ziphytech.com.ng/mortal-kombat-9"
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