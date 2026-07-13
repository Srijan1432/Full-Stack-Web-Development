const arr = [
    "Dream big. Start small. Act now.",
    "Success begins where excuses end.",
    "Stay humble, work hard, be kind.",
    "Small steps lead to big achievements.",
    "Your only limit is your mindset.",
    "Discipline beats motivation every time.",
    "Make today count.",
    "Believe in yourself, even when others don't.",
    "Consistency creates success.",
    "Be the reason someone smiles today."
]

const btn = document.getElementById('btn');
const quote = document.querySelector('h1');
btn.addEventListener('click',()=>{
    const idx = Math.floor(Math.random() * 10);
    quote.textContent = arr[idx];
})
    