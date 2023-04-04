import "./styles.css";

const button = document.getElementById("btn");
const container = document.getElementById("container");
const queueCount = document.getElementById("queue");

const queue = [];
let inprogressCount = 0;
let totalProgressThatCanRun = 3;

button.addEventListener("click", () => {
  const outer = document.createElement("div");
  outer.className = "outer";
  const filler = document.createElement("div");
  filler.className = "filler";

  filler.addEventListener("animationend", () => {
    if (queue.length) {
      const firstElement = queue.shift();
      // container.appendChild(firstElement);
      firstElement.classList.add("active");
    } else {
      inprogressCount = 0;
    }
    queueCount.innerText = queue.length;
  });

  outer.appendChild(filler);

  container.appendChild(outer);
  if (inprogressCount >= totalProgressThatCanRun) {
    queue.push(filler);
    queueCount.innerText = queue.length;
  } else {
    filler.classList.add("active");
    inprogressCount++;
  }
  console.log(queue);
});
