function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem da praia
    img.setAttribute("src", "./assets/Juhllian_avatar.png")
  } else {
    img.setAttribute("src", "./assets/Juhllian_2avatar.png")
  }
  // Se tiver sem light mode, manter a imagem com a Camisa do Timão
}
