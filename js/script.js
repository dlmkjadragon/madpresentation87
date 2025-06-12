const contentData = {
  "Addition": {
    theory: `
    <ul>
    <li>The addition principle applies when there are several distinct tasks or choices, and only one of them can be performed at a time. If task A can be done in m ways and task B in n ways, and the two tasks are mutually exclusive, then the total number of ways to perform either task is m + n. This principle helps count the total possibilities when options do not overlap.
</li>
    <li>This principle can be extended to more than two mutually exclusive cases. If there are k disjoint sets with sizes a₁, a₂, ..., aₖ, then the total number of outcomes is a₁ + a₂ + ... + aₖ.</li>
    <li>Unlike the multiplication principle, which counts combinations of sequential choices, the addition principle counts distinct, individual options where only one can be selected.
</li>
  </ul>`,
    formula: `
    <ul>
  <li><strong>Basic Case (Two sets):</strong> Total Outcomes = m + n</li>
  <li><strong>General Case:</strong> If there are k disjoint sets A₁, A₂, ..., Aₖ with sizes a₁, a₂, ..., aₖ, then:<br>
      Total Outcomes = a₁ + a₂ + ... + aₖ</li>
</ul>`,
    example: `
    <ul>
  <li>If a student can choose between 3 science electives or 2 art electives, they have 3 + 2 = 5 total options.</li>
  <li>A vending machine offers 4 snack items and 5 drink items, but only one item can be selected: 4 + 5 = 9 choices.</li>
</ul>`
  },
  "Multiplication": {
    theory: `
    <ul>
  <li>The multiplication principle applies when making a sequence of independent choices, where each choice does not affect the others.</li>
  <li>If one task can be done in m ways and a second task in n ways, then performing both tasks in sequence can be done in m × n ways.</li>
  <li>This principle extends to more than two tasks: Total = a₁ × a₂ × ... × aₖ</li>
  <li>All tasks must be independent — the number of ways for one task must not depend on previous choices.</li>
</ul>`,
    formula: `
    <ul>
  <li><strong>Basic Case (Two tasks):</strong> Total Outcomes = m × n</li>
  <li><strong>Extended Case:</strong> For k independent tasks with options a₁, a₂, ..., aₖ:<br>
      Total Outcomes = a₁ × a₂ × ... × aₖ</li>
</ul>`,
    example: `
    <ul>
  <li>You have 3 types of bread and 2 types of filling. Choosing one bread and one filling gives 3 × 2 = 6 sandwich combinations.</li>
  <li>A password consists of 4 digits, each chosen from 0 to 9. There are 10 × 10 × 10 × 10 = 10,000 possible passwords.</li>
</ul>`
  },
  "Arrangement": {
    theory: `
    <ul>
  <li>Arrangements involve the concept of permutations, which count the number of possible ways to order a set of items.</li>
  <li>Order matters in arrangements — changing the position of items creates a different outcome.</li>
  <li>Common scenarios include arranging people in a line, books on a shelf, or digits in a code.</li>
  <li>All elements must be distinct unless specified otherwise.</li>
</ul>`,
    formula: `
  <li><strong>Partial Arrangement:</strong>
      <div class="fraction-line">
        <div style="margin-right: 10px;">P(n, r) =</div>
        <div class="fraction">
          <div class="top">n!</div>
          <div class="bottom">(n − r)!</div>
        </div>
      </div>
      </li>
</ul>`,
    example: `
<ul>
  <li>Assigning 3 different roles (leader, speaker, recorder) to 6 team members is an arrangement task:<br>
      P(6, 3) = 6 × 5 × 4 = 120 ways.</li>
  <li>Selecting 4 books to display from 10 and placing them in order:<br>
      P(10, 4) = 10 × 9 × 8 × 7 = 5040 ways.</li>
</ul>`
  },
  "Combination": {
  theory: `
  <ul>
    <li>Combinations are selections of items from a larger set where <strong>order does not matter</strong>.</li>
    <li>They count how many ways you can choose a subset of r elements from a total of n elements.</li>
    <li>Unlike permutations, switching the order of elements in a combination does not create a new outcome.</li>
    <li>Useful for problems where groups or committees are formed without specific roles or positions.</li>
  </ul>`,
  formula: `
  <ul>
    <li>This represents the number of ways to choose r elements from n without considering order.</li>
    <li><strong>Combination Formula:</strong></li>
    <li>
      <div class="fraction-line">
        <div style="margin-right: 10px;">C(n, r) =</div>
        <div class="fraction">
          <div class="top">n!</div>
          <div class="bottom">r!(n − r)!</div>
        </div>
      </div>
    </li>

  </ul>`,
  example: `
  <ul>
    <li>Choosing 3 students from a class of 5: C(5, 3) = 10 combinations.</li>
    <li>Selecting 2 fruits from 4 types (apple, banana, cherry, grape): C(4, 2) = 6 ways.</li>
  </ul>`
},
  "Permutation": {
    theory: `
  <ul>
    <li>Permutations are ordered arrangements of elements taken from a set.</li>
    <li>They count the number of ways to <strong>rearrange elements where order matters</strong>.</li>
    <li>There are two main types: full permutation (arranging all elements) and partial permutation (arranging only r elements).</li>
    <li>Commonly used in ranking, seating, coding, or choosing ordered sequences.</li>
  </ul>`,
    formula: `
  <ul>
    <li><strong>Full Permutation:</strong> If all n elements are arranged:
      <div style="font-size: 22px; margin-top: 6px;">
        P(n) = n!
      </div>
    </li>
    <li><strong>Partial Permutation:</strong> If r elements are selected and arranged from n:
      <div class="fraction-line">
        <div style="margin-right: 10px;">P(n, r) =</div>
        <div class="fraction">
          <div class="top">n!</div>
          <div class="bottom">(n − r)!</div>
        </div>
      </div>
    </li>
  </ul>`,
    example: `
  <ul>
    <li>Arranging 4 people in a line: P(4) = 4! = 24 ways.</li>
    <li>Selecting 2 out of 5 books to place on a shelf: P(5, 2) = 20 arrangements.</li>
  </ul>`
  },
  "Division": {
    theory: `
  <ul>
    <li>The Division Principle is used when we <strong>overcount</strong> outcomes due to repeated or symmetric arrangements.</li>
    <li>It helps correct the total by dividing by the number of times each distinct outcome is counted.</li>
    <li>Commonly used in problems involving identical objects, handshake counting, or circular arrangements.</li>
  </ul>`,
    formula: `
  <ul>
    <li><strong>General Formula:</strong>
      <div class="fraction-line">
        <div style="margin-right: 10px;">Actual outcomes =</div>
        <div class="fraction">
          <div class="top">Total arrangements</div>
          <div class="bottom">Number of repetitions</div>
        </div>
      </div>
    </li>
    <li>This formula adjusts for the overcounted scenarios where each valid outcome appears multiple times in the total.</li>
  </ul>`,
    example: `
<ul>
  <li>
    5 people shaking hands in pairs:
    <div class="fraction-line" style="margin-top: 6px;">
      <div class="fraction">
        <div class="top">5 × 4</div>
        <div class="bottom">2</div>
      </div>
      <div style="margin-left: 10px;">= 10 handshakes</div>
    </div>
  </li>
  <li>
    Arranging the letters in “LEVEL” (with 2 L's and 2 E's):
    <div class="fraction-line" style="margin-top: 6px;">
      <div class="fraction">
        <div class="top">5!</div>
        <div class="bottom">2! × 2!</div>
      </div>
      <div style="margin-left: 10px;">= 30 distinct arrangements</div>
    </div>
  </li>
</ul>`
},
  "Pigeonhole": {
  theory: `
  <ul>
    <li>The Pigeonhole Principle states that if more items are placed into fewer containers, then at least one container must hold more than one item.</li>
    <li>It is a fundamental concept in discrete mathematics used to prove existence of repetition or collisions.</li>
    <li>Often used in problems where objects are grouped or distributed across categories.</li>
  </ul>`,

  formula: `
  <ul>
    <li><strong>Basic Principle:</strong> If <strong>n</strong> items are placed into <strong>k</strong> boxes and n > k, then at least one box contains more than one item.</li>
    <li><strong>Generalized Form:</strong>
      <div class="fraction-line">
        <div style="margin-right: 10px;">At least one box has</div>
        <div class="fraction">
          <div class="top">n</div>
          <div class="bottom">k</div>
        </div>
        <div style="margin-left: 10px;">or more items (rounded up)</div>
      </div>
    </li>
    <li>This is expressed as: at least ⌈n / k⌉ items in some box.</li>
  </ul>`,

  example: `
  <ul>
    <li>If 13 socks are placed into 12 drawers, then at least one drawer must contain ≥ 2 socks.</li>
    <li>In a group of 367 people, at least two must share the same birthday (since there are only 366 possible birthdays).</li>
    <li>Distributing 50 candies among 6 kids guarantees at least one child receives at least
      <div class="fraction-line" style="display: inline-flex; margin-left: 6px;">
        <div class="fraction">
          <div class="top">50</div>
          <div class="bottom">6</div>
        </div>
      </div>
      = ⌈8.33⌉ = 9 candies.
    </li>
  </ul>`
},
  "Inclusion-Exclusion": {
  theory: `
  <ul>
    <li>The Inclusion-Exclusion Principle is used to count the number of elements in the union of overlapping sets.</li>
    <li>It corrects the overcounting caused when elements belong to more than one set.</li>
    <li>As we include each set, we subtract intersections, add back triple overlaps, and so on.</li>
    <li>This principle can be applied to 2, 3, or more sets.</li>
  </ul>`,

  formula: `
<ul>
  <li><strong>Two Sets:</strong> A and B:</li>
</ul>
<div style="font-size: 22px; margin-left: 20px; margin-top: -10px; margin-bottom: 20px;">
  |A ∪ B| = |A| + |B| − |A ∩ B|
</div>

<ul>
  <li><strong>Three Sets:</strong> A, B, and C:</li>
</ul>
<div style="font-size: 20px; margin-left: 20px; margin-top: -10px;">
  |A ∪ B ∪ C| = |A| + |B| + |C| − |A ∩ B| − |A ∩ C| − |B ∩ C| + |A ∩ B ∩ C|
</div>
`
,

  example: `
<div style="display: flex; justify-content: space-between; gap: 40px; flex-wrap: wrap;">

  <div style="flex: 1; min-width: 250px;">
    <ul>
      <li>In a class:
        <ul style="margin-top: 6px;">
          <li>20 students like Math</li>
          <li>15 like Science</li>
          <li>5 like both</li>
        </ul>
        <div style="margin-top: 6px;">
          Total who like Math or Science:<br>
          |M ∪ S| = 20 + 15 − 5 = 30
        </div>
      </li>
    </ul>
  </div>

  <div style="flex: 1; min-width: 250px;">
    <ul>
      <li>In a survey:
        <ul style="margin-top: 6px;">
          <li>50 people like tea</li>
          <li>30 like coffee</li>
          <li>10 like both</li>
        </ul>
        <div style="margin-top: 6px;">
          Total who like at least one:<br>
          |Tea ∪ Coffee| = 50 + 30 − 10 = 70
        </div>
      </li>
    </ul>
  </div>

</div>`
}
};

const navItems = document.querySelectorAll(".nav-item");
const contentTitle = document.getElementById("content-title");
const backgroundTitle = document.getElementById("background-title");

const contentTheory = document.getElementById("content-theory");
const contentFormula = document.getElementById("content-formula");
const contentExample = document.getElementById("content-example");

const underline = document.getElementById("nav-underline");

function updateUnderline(target) {
  const parent = target.parentElement; // .nav-list
  const left = target.offsetLeft;
  underline.style.left = `${left}px`;
  underline.style.width = `${target.offsetWidth}px`;
}

let currentSection = "theory";

function showSection(section) {
  const allSections = {
    theory: contentTheory,
    formula: contentFormula,
    example: contentExample
  };

  for (let key in allSections) {
    allSections[key].classList.remove("active");
    allSections[key].style.animation = "none"; // reset animation
    allSections[key].offsetHeight; // trigger reflow
  }

  allSections[section].classList.add("active");
  allSections[section].style.animation = "fadeInContent 0.4s ease"; // ép animate lại
}


navItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".nav-item.active")?.classList.remove("active");
    item.classList.add("active");

    const key = item.dataset.key;
    const content = contentData[key];
    if (content) {
      backgroundTitle.textContent = (key === "Inclusion-Exclusion" ? "In/Exclusion" : key).toUpperCase();


    contentTheory.innerHTML = content.theory;
    contentFormula.innerHTML = content.formula;
    contentExample.innerHTML = content.example;


      currentSection = "theory";
      showSection("theory");

      document.querySelector(".timeline-dot.active")?.classList.remove("active");
      document.querySelector(".timeline-dot:nth-child(1)")?.classList.add("active");

    }

      updateUnderline(item);

    const timelineDots = document.querySelectorAll(".timeline-dot");
    timelineDots.forEach(dot => {
      dot.style.animation = "none";
      dot.offsetHeight;
      dot.style.animation = "";
    });
  });
});

const timelineDots = document.querySelectorAll(".timeline-dot");

timelineDots.forEach(dot => {
  dot.addEventListener("click", () => {
    document.querySelector(".timeline-dot.active")?.classList.remove("active");
    dot.classList.add("active");

    const label = dot.getAttribute("data-label").toLowerCase();
    const section = label.includes("theory") ? "theory"
                 : label.includes("formula") ? "formula"
                 : "example";

    currentSection = section;
    showSection(section);
  });
});

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const dayName = now.toLocaleDateString("en-US", { weekday: 'long' });
  const fullDate = now.toLocaleDateString("en-US", {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const minuteProgress = (now.getMinutes() / 60) * 283;

  document.getElementById("time").textContent = `${hours}:${minutes}`;
  document.getElementById("day-name").textContent = dayName;
  document.getElementById("full-date").textContent = fullDate;

  const progressCircle = document.querySelector("circle.progress");
  progressCircle.style.strokeDashoffset = 283 - minuteProgress;
}

setInterval(updateClock, 1000);
updateClock();


document.querySelector('.nav-item.active')?.click();

contentTheory.style.animation = "fadeInContent 0.4s ease";


const defaultActive = document.querySelector('.nav-item.active');
if (defaultActive) {
  updateUnderline(defaultActive);
}

