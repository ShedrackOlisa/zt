// Array of all available games (add as many games as needed)
const allGames = [
    {
        imgSrc: "https://ziphynet.com.ng/images/gta-san-ram-gta-5.webp",
        title: "Game Title 1",
        link: "#"
    },
    {
        imgSrc: "https://example.com/game2.jpg",
        title: "Game Title 2",
        link: "#"
    },
    {
        imgSrc: "https://ziphynet.com.ng/images/gta-san-mod-gta-5.webp",
        title: "Game Title 3",
        link: "#"
    },
    {
        imgSrc: "https://ziphynet.com.ng/images/gta-vice-city.webp",
        title: "Game Title 4",
        link: "#"
    },
    {
        imgSrc: "https://example.com/game5.jpg",
        title: "Game Title 5",
        link: "#"
    },
    {
        imgSrc: "https://ziphynet.com.ng/images/gta-san.webp",
        title: "Game Title 6",
        link: "#"
    },
    {
        imgSrc: "https://example.com/game7.jpg",
        title: "Game Title 7",
        link: "#"
    },
    {
        imgSrc: "https://ziphynet.com.ng/images/gta-4.webp",
        title: "Game Title 8",
        link: "#"
    },
    {
        imgSrc: "https://ziphynet.com.ng/images/gta-5.webp",
        title: "Game Title 9",
        link: "#"
    },
    {
        imgSrc: "https://example.com/game10.jpg",
        title: "Game Title 10",
        link: "#"
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
