const input =
document.getElementById(
"markdown-input"
);

const preview =
document.getElementById(
"preview-area"
);

// Load Saved Notes
input.value =
localStorage.getItem("notes") || "";

updatePreview();

input.addEventListener(
"input",
function(){

    updatePreview();

    localStorage.setItem(
        "notes",
        input.value
    );
}
);

function updatePreview(){

    preview.innerHTML =
    marked.parse(
        input.value
    );
}
