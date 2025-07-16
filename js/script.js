const contentData = {
  "Introduction to MST": {
    theory: `
      <ul>
        <li>In discrete mathematics, a Minimum Spanning Tree (MST) is defined for a connected, undirected, weighted graph.</li>
        <li>A spanning tree is a subgraph that includes all the vertices and forms a tree (i.e., no cycles).</li>
        <li>Among all possible spanning trees, the MST is the one with the minimum total edge weight.</li>
      </ul>`,
    formula: `
      <ul>
        <li>Let G=(V,E) be a connected weighted graph.</li>
        <li>An MST is a subset of edges T⊆E such that:</li>
        <li>T spans all vertices: ∣T∣=∣V∣−1</li>
        <li>∑e∈T(w(e)) is minimized</li>
      </ul>
      <img src="../img/min.png" alt="MST example" style="max-width:100%; margin-top:10px;" />`,
    example: `
      <ul>
        <li>Suppose a network of computers needs to be connected with cables.</li>
        <li>Using an MST ensures that all computers are connected with the least total cable length, avoiding redundant connections.</li>
      </ul>`
  },

  "Intro to Greedy Als": {
    theory: `
      <ul>
        <li>A greedy algorithm builds a solution step-by-step by always choosing the best available option at each step.</li>
        <li>It does not revise previous decisions.</li>
        <li>Greedy algorithms are generally fast and simple, but may not always produce an optimal solution for every problem.</li>
        <li>However, for certain problems like Minimum Spanning Tree, greedy algorithms are guaranteed to produce optimal results.</li>
      </ul>`,
    formula: `
      <ul>
        <li>Choose the locally optimal choice based on some criterion (e.g., minimum weight).</li>
        <li>Ensure that the partial solution remains feasible (e.g., no cycles in MST).</li>
        <li>Repeat until a complete solution is formed.</li>
      </ul>
      <img src="../img/al.png" alt="MST example" style="max-width:100%; margin-top:10px;" />`,
    example: `
      <ul>
        <li>In Prim’s Algorithm: select the smallest weight edge that connects the growing tree to an unvisited vertex.</li>
        <li>In Kruskal’s Algorithm: select the next smallest edge that does not form a cycle with the already chosen edges.</li>
      </ul>`
  },

  "Prim's Algorithm": {
    theory: `
      <ul>
        <li>Prim’s Algorithm, also known as the Prim–Jarník algorithm, is one of the fundamental methods for finding a Minimum Spanning Tree (MST) in a connected weighted graph.</li>
        <li>An MST is a spanning tree that includes all the vertices of the original graph, and the total weight of its edges is minimized.</li>
        <li>The algorithm was first introduced by the Czech mathematician Vojtěch Jarník in 1930 and later rediscovered by Robert Prim in 1957.</li>
      </ul>`,
    formula: `
      <ul>
        <li>Initialization: Start by selecting any edge with the smallest weight in the graph and include it in the growing spanning tree.</li>
        <li>Tree Expansion: Repeat the process of adding edges until the tree has exactly n−1 edges, where n is the number of vertices in the graph.</li>
      </ul>
      <img src="../img/counting.png" alt="MST example" style="max-width:100%; margin-top:10px;" />`,
    example: `
    <ul>
      <li>Imagine you need to build a road network connecting six cities: A, B, C, D, E, and F, with the minimum total construction cost. The numbers on the roads between the cities represent the construction costs (edge weights). Your goal is to connect all the cities such that the total cost is minimized, and there are no redundant roads forming cycles. Find a subset of roads that connects all six cities while ensuring the lowest possible total construction cost, and that no cycles are formed.</li>
    </ul>
    <img src="../img/graph.png" alt="MST example" style="max-width:100%; margin-top:10px;" />`
  },

  "Kruskal's Al": {
    theory: `
      <ul>
        <li>Kruskal’s Algorithm is a greedy algorithm in graph theory used to find a Minimum Spanning Tree (MST) for a connected, undirected, weighted graph.</li>
        <li>A Minimum Spanning Tree is a subset of the edges of a graph such that: </li>
      </ul>
      <pre><code>
  All vertices are connected.
  No cycles are formed.
  The total edge weight is minimized.
      </code></pre>`,
    formula: `
      <ul>
        <li>Kruskal’s Algorithm follows the greedy approach — it always selects the edge with the smallest weight that does not form a cycle.</li>
      </ul>
      <img src="../img/fr.png" alt="MST example" style="max-width:100%; margin-top:10px;" />
    `,
    example: `
      <ul>
        <li>Build a Minimum Spanning Tree (MST) that connects all the cities (vertices) with the minimum total cost and no cycles.</li>
      </ul>
      <img src="../img/sr.png" alt="MST example" style="max-width:100%; margin-top:10px;" />`
  },

  "Prim Pseudocode": {
    theory: `
      <pre><code>procedure Prim(G)
      procedure Prim(G: weighted connected undirected graph with n vertices)
          T := a minimum-weight edge
          for i := 1 to n − 2
              e := an edge of minimum weight incident to a vertex in T 
                  and not forming a simple circuit in T if added to T
              T := T with e added
          return T  {T is a minimum spanning tree of G}
      </code></pre>`,
    formula: `
      `,
    example: ``
  },

  "Kruskal Pseudocode": {
    theory: `<pre><code>procedure Kruskal(G: weighted connected undirected graph with n vertices)
          T := empty graph
          for i := 1 to n − 1
              e := any edge in G with smallest weight that does not form a simple circuit
                  when added to T
              T := T with e added
          return T  {T is a minimum spanning tree of G}
      </code></pre>`,
    formula: `
      `,
    example: ``
  },

  "Comparison": {
    theory: `
      <table>
        <tr><th>Feature</th><th>Prim</th><th>Kruskal</th></tr>
        <tr><td>Start from</td><td>Any vertex</td><td>Edge list</td></tr>
        <tr><td>Focus</td><td>Growing tree</td><td>Disjoint edges</td></tr>
        <tr><td>Data structure</td><td>Priority Queue</td><td>Union–Find</td></tr>
        <tr><td>Best for</td><td>Dense graphs</td><td>Sparse graphs</td></tr>
      </table>`,
    formula: ``,
    example: ``
  },

  "Complexity": {
    theory: `
      <ul>
        <li><strong>Prim:</strong> O(m log n) with binary heap.</li>
        <li><strong>Kruskal:</strong> O(m log m) for sorting + union–find.</li>
        <li>When m ≈ n<sup>2</sup> (dense), Prim is preferable.</li>
        <li>When m ≪ n<sup>2</sup> (sparse), Kruskal is faster.</li>
      </ul>`,
    formula: ``,
    example: ``
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

