// ATENÇÃO: troque pelo número de WhatsApp REAL da cafeteria (formato: 55 + DDD + número).
// O valor abaixo é o telefone fixo, usado só como provisório.
const WHATSAPP = "551133612646";
const MENSAGEM = "Olá! Quero fazer um pedido para retirada na Cafeteria Porto.";

document.querySelectorAll("[data-wa]").forEach((el) => {
  const item = el.dataset.item;
  const texto = `${MENSAGEM}\n${item ? "Item: " + item + "\n" : ""}Nome:\nHorário de retirada:`;
  el.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
  el.target = "_blank";
  el.rel = "noopener";
});

const barra = document.querySelector(".proto-bar");
const medirBarra = () => document.documentElement.style.setProperty("--bar-h", barra.offsetHeight + "px");
medirBarra(); addEventListener("resize", medirBarra);

const header = document.querySelector(".header");
addEventListener("scroll", () => header.classList.toggle("is-scrolled", scrollY > 10), { passive: true });

const links = [...document.querySelectorAll('.dock a[href^="#"]')];
function marcarAtivo() {
  let atual = "#topo";
  links.forEach((a) => {
    const alvo = document.querySelector(a.getAttribute("href"));
    if (alvo && alvo.getBoundingClientRect().top <= innerHeight * 0.4 && a.hash !== "#topo") atual = a.hash;
  });
  links.forEach((a) => a.classList.toggle("is-active", a.hash === atual));
}
addEventListener("scroll", marcarAtivo, { passive: true });
marcarAtivo();

document.getElementById("ano").textContent = new Date().getFullYear();
