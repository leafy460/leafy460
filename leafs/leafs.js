document.addEventListener("DOMContentLoaded", () => {
    // Function to generate a random position on the X-axis
    function getRandomPosition() {
        const windowWidth = window.innerWidth;
        return Math.floor(Math.random() * windowWidth);
    }

    // Function to create a new leaf
    function createLeaf() {
        const section = document.querySelector("section");
        const leaf = document.createElement("div");
        const leafImage = document.createElement("img");

        // Randomly select a leaf image
        const leafImages = ["leaves1.png", "leaves2.png", "leaves3.png", "leaves4.png"];
        const randomImage = leafImages[Math.floor(Math.random() * leafImages.length)];
        leafImage.src = randomImage;

        // Randomize size
        const randomSize = Math.random() * 1.5 + 0.5; // Scale between 0.5 and 2
        leaf.style.transform = `scale(${randomSize})`;

        // Randomize position
        const randomX = getRandomPosition();
        leaf.style.left = `${randomX}px`;

        // Add classes and styles
        leaf.classList.add("falling-leaf");
        leaf.style.position = "absolute";
        leaf.style.top = "-10%"; // Start above the viewport
        leaf.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`; // Randomize speed

        // Append the image to the leaf and the leaf to the section
        leaf.appendChild(leafImage);
        section.appendChild(leaf);

        // Remove leaf after animation finishes
        setTimeout(() => {
            leaf.remove();
        }, 10000); // Match this time with the longest animation duration
    }

    // Create new leaves at intervals
    setInterval(createLeaf, 500);
});