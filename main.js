// Button Whatss
const Whats = document.querySelector("#Whats")

Whats.addEventListener("click", () => {
  window.open(
    "https://wa.me/551313991932444?text=Olá! Seja bem vindo a 3S Drink'S Saboó. Agradecemos pelo seu contato!",
    "_blank"
  )
})

// ANIMATE AOS
AOS.init({
  duration: 1000,
  once: true,
})