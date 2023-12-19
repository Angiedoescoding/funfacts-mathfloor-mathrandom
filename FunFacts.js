const btn = document.querySelector("#btn");
const par = document.querySelector("#par");

const facts = [
    "There's a species of shark that can live for around 500 years.",
    "Human children don't get kneecap bones until they're around three years old.",
    "Nintendo was founded in 1889.",
    "One 18-inch pizza is more pizza than two 12-inch pizzas.",
    "A Banyan Tree near Kolkata, India is bigger than the average Walmart",
    "Cashews grow on the bottom of a fruit called a cashew apple.",
    "Honey never expires.",
    "In the 1980s, Fredric Baur, the founder of Pringles, requested to be buried in a Pringles can. His children honored the request.",
    "In every scene of Fight Club, there is a Starbucks coffee cup.",
    "Kangaroos keep growing until they die. And a snail can sleep for 3 years.",
    "A type of jellyfish is considered biologically immortal. They don’t age and will never die unless they are killed.",
    "Originating in Berlin in 2008, aggressive sitting became a sport. ",
    "Humans cannot walk in a straight line without a visual point. When blindfolded, we will gradually walk in a circle.",
    "Children of identical twins are genetically siblings, not cousins.",
]

btn.addEventListener("click", function(){
    let randomFact = facts[Math.floor(Math.random() * facts.length)];
    par.style.display = "block";
    par.textContent = randomFact;
})