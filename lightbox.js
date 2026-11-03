/* =========================================================
   Image viewer (lightbox)
   Click a picture on a project page to see it big.
   Close it with the X, by clicking outside the picture, or with Esc.
   You don't need to change anything here. Any picture inside
   .cover or .shots on a project page works automatically.
   ========================================================= */

// 1. Create the viewer once and add it to the page
const viewer = document.createElement("dialog");
viewer.className = "viewer";
viewer.innerHTML = `
  <button class="viewer-close" aria-label="Close">&times;</button>
  <img alt="">
`;
document.body.appendChild(viewer);

const bigImage = viewer.querySelector("img");

// 2. Make every project picture open the viewer when clicked
document.querySelectorAll(".cover, .shots img").forEach(function (picture) {
  picture.classList.add("zoomable");
  picture.tabIndex = 0;                       // can also be opened with the keyboard

  function open() {
    bigImage.src = picture.src;
    bigImage.alt = picture.alt;
    viewer.showModal();
  }

  picture.addEventListener("click", open);
  picture.addEventListener("keydown", function (e) {
    if (e.key === "Enter") open();
  });
});

// 3. Close it with the X button, or by clicking the dark area around the picture
viewer.querySelector(".viewer-close").addEventListener("click", function () {
  viewer.close();
});
viewer.addEventListener("click", function (e) {
  if (e.target === viewer) viewer.close();
});
// (Esc closes it automatically)
