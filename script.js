let count = 0;

const countSpan = document.getElementById("count");
const errorMsg = document.getElementById("error");
const clearBtn = document.getElementById("clear");

function updateUI() {
  countSpan.textContent = count;
  errorMsg.textContent = "";
  clearBtn.style.display = count === 0 ? "none" : "inline-block";
}

document.getElementById("increment").addEventListener("click", () => {
  count++;
  updateUI();
});

document.getElementById("decrement").addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateUI();
  } else {
    errorMsg.textContent = "Error : Cannot go below 0";
  }
});

clearBtn.addEventListener("click", () => {
  count = 0;
  updateUI();
});

updateUI(); // Initial call
