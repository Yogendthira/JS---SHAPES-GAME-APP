document.addEventListener("DOMContentLoaded", () => {

    const shapeButtons = document.querySelectorAll(".shapeBtn");
    const countInput = document.getElementById("countInput");
    const colorInput = document.getElementById("colorInput");
    const enterBtn = document.getElementById("enterBtn");
    const output = document.getElementById("output");

    let selectedShape = "";
    let globalCount = 0; // 🔥 CONTINUOUS COUNTER

    // -----------------------------
    // SHAPE BUTTON CLICK
    // -----------------------------
    shapeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            shapeButtons.forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            selectedShape = btn.dataset.shape;
        });
    });

    // -----------------------------
    // ENTER BUTTON CLICK
    // -----------------------------
    enterBtn.addEventListener("click", () => {

        const count = parseInt(countInput.value);
        const color = colorInput.value;

        if (!selectedShape || !count || count <= 0) {
            alert("Select shape and enter a valid number");
            return;
        }

        for (let i = 1; i <= count; i++) {
            globalCount++;

            // TRIANGLE
            if (selectedShape === "triangle") {

                const wrapper = document.createElement("div");
                wrapper.className = "shape";

                const triangle = document.createElement("div");
                triangle.className = "triangle";
                triangle.style.borderBottomColor = color;

                const index = document.createElement("span");
                index.innerText = globalCount;
                index.style.color = "white";

                triangle.appendChild(index);
                wrapper.appendChild(triangle);
                output.appendChild(wrapper);

            }
            // CIRCLE / SQUARE
            else {
                const shapeDiv = document.createElement("div");
                shapeDiv.className = `shape ${selectedShape}`;
                shapeDiv.style.backgroundColor = color;
                shapeDiv.innerText = globalCount;

                output.appendChild(shapeDiv);
            }
        }

        countInput.value = "";
    });

});
