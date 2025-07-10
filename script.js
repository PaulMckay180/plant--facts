const plantFacts = [
  "Banana plants are actually herbs, not trees!",
  "Bamboo is the fastest-growing plant in the world.",
  "Some plants can 'hear' insects chewing and respond defensively.",
  "Plants convert carbon dioxide into oxygen through photosynthesis.",
  "The corpse flower smells like rotting flesh to attract pollinators.",
  "A sunflower is made up of thousands of tiny flowers called florets.",
  "Some plants can move! The Mimosa pudica closes its leaves when touched.",
  "There are more than 390,000 known plant species on Earth.",
  "Cactus spines are actually modified leaves.",
  "Vanilla comes from the orchid family!"
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * plantFacts.length);
    const factBox = document.getElementById("fact-box");
    factBox.textContent = plantFacts[randomIndex];
}