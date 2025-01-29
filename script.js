document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded!");

    // Get elements
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const responseContainer = document.getElementById("response-container");
    const responseText = document.getElementById("response-text");
    const responseGif = document.getElementById("response-gif");
    const contentWrapper = document.getElementById("content-wrapper");

    const yearButtons = document.querySelectorAll(".year-btn");
    const yearImage = document.createElement("img");
    yearImage.classList.add("hover-image");
    document.body.appendChild(yearImage);

    const yearText = document.createElement("div");
    yearText.classList.add("hover-text-box");
    document.body.appendChild(yearText);

    // GIFs for Yes/No responses
    const happyGif = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTVtbWVpemEwZ2phZHM2bG1lOHU1a2s0ZTFjcW4xeGZsODM3aDhmaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5GoVLqeAOo6PK/giphy.gif";
    const sadGif = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHBqbTVjeDR2eTQ0OGU3d3RqYnVlcmV0d2JiYTd1YTV1c3lwMnNsNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T1WqKkLY753dZghbu6/giphy.gif";

    // Image mapping for years
    const images = {
        "2018": "2018.jpeg",
        "2019": "2019.jpeg",
        "2020": "2020.jpeg",
        "2021": "2021.jpeg",
        "2022": "2022.jpeg",
        "2023": "2023.jpeg",
        "2024": "2024.jpeg",
        "2025": null, // No image for 2025, but still needs a box
    };

    // 🟢 **Yes Button Click**
    yesBtn.addEventListener("click", () => {
        responseText.innerHTML = `<strong>Yay! ❤️ I can't wait to spend Valentine's Day with you!</strong>`;
        responseGif.src = happyGif;
        responseContainer.style.display = "flex";
        responseContainer.classList.add("visible");

        // Shift everything down smoothly
        contentWrapper.classList.add("shift-down");
    });

    // 🔴 **No Button Click**
    noBtn.addEventListener("click", () => {
        responseText.innerHTML = `<strong>Wrong answer woman, try again 😈</strong>`;
        responseGif.src = sadGif;
        responseContainer.style.display = "flex";
        responseContainer.classList.add("visible");

        // Shift everything down smoothly
        contentWrapper.classList.add("shift-down");
    });

    // 🖱️ **Year Hover Functionality**
    yearButtons.forEach((button) => {
        button.addEventListener("mouseover", (e) => {
            const year = e.target.getAttribute("data-year");

            if (images[year]) {
                yearImage.src = images[year];
                yearImage.style.display = "block";
                yearImage.style.width = "350px"; // Adjusted size
                yearImage.style.height = "350px";
                yearImage.style.position = "fixed";
                yearImage.style.left = "5%"; // Centered left side
                yearImage.style.top = "50%";
                yearImage.style.transform = "translateY(-50%)";
                yearText.style.display = "none";
            } else {
                yearImage.style.display = "none";
                yearText.innerHTML = `<div class="year-placeholder">Let's add this memory on February 14th, 2025 💖</div>`;
                yearText.style.position = "fixed";
                yearText.style.left = "5%"; // Centered left side
                yearText.style.top = "50%";
                yearText.style.transform = "translateY(-50%)";
                yearText.style.display = "flex";
                yearText.style.alignItems = "center";
                yearText.style.justifyContent = "center";
                yearText.style.width = "350px"; // Same size as images
                yearText.style.height = "350px";
                yearText.style.border = "2px solid white";
                yearText.style.borderRadius = "15px";
                yearText.style.background = "rgba(255, 255, 255, 0.2)";
                yearText.style.color = "white";
                yearText.style.fontSize = "1.2rem";
                yearText.style.textAlign = "center";
            }
        });

        button.addEventListener("mouseout", () => {
            yearImage.style.display = "none";
            yearText.style.display = "none";
        });
    });
});
