// Array of all available games (add as many games as needed)
const allGames = [
    {
        imgSrc: "https://ziphytech.com.ng/images/fifa-14-mod-fifa-25.webp",
        title: "FIFA 25 APK OBB DATA (FIFA 2025) Offline Download For Android",
        link: "https://ziphytech.com.ng/fifa-14-mod-fifa-25"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/fifa-16-mod-fifa-25.webp",
        title: "FIFA 16 Mod FIFA 25 APK OBB DATA Offline Download For Android",
        link: "https://ziphytech.com.ng/fifa-16-mod-fifa-25"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/fifa-2025-ppsspp.webp",
        title: "FIFA 2025 PPSSPP ISO File Download (FIFA 25)",
        link: "https://ziphytech.com.ng/fifa-2025-ppsspp"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/fts-2025.webp",
        title: "FTS 25 APK OBB DATA Download (First Touch Soccer 2025)",
        link: "https://ziphytech.com.ng/fts-2025"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/ppsspp-pes-2025.webp",
        title: "PES 2025 PPSSPP ISO (PES 25 PSP) Download For Android - eFootball",
        link: "https://ziphytech.com.ng/ppsspp-pes-2025"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/dfl-2025.webp",
        title: "DFL 2025 Mod FIFA 16 Apk Obb Data Download For Android",
        link: "https://ziphytech.com.ng/dfl-2025"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/dls-2025.webp",
        title: "Dream League Soccer 2025 (DLS 25) APK OBB Download For Android",
        link: "https://ziphytech.com.ng/dls-2025"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/eafc-mobile-2025.webp",
        title: "EA SPORTS FC Mobile 25 APK OBB DATA Offline Download For Android",
        link: "https://ziphytech.com.ng/eafc-mobile-2025"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/efootball-pes-2025.webp",
        title: "eFootball PES 2025 APK OBB Download for Android",
        link: "https://ziphytech.com.ng/efootball-pes-2025"
    },
    {
        imgSrc: "https://ziphytech.com.ng/images/winning-eleven-2025.webp",
        title: "Winning Eleven 2025 APK Download For Android",
        link: "https://ziphytech.com.ng/winning-eleven-2025"
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