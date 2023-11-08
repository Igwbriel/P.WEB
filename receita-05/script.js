const Hqs = [
    "Watchmen",
    "Sandman",
    "Cavaleiro das trevas",
    "Berserk",
    "Grandes astros Superman",
  ]
  
  const transformar = (item) => {
    return `<table>${Hqs}</table>`
  }
  
  const transformarPTab = (Hqs) => {
    return `<table><tr><th>Hqs</th></tr>${Hqs
      .map((item) => `<tr><td>${item}</td></tr>`)
      .join("")}</table>`
  }
  
  const carregarDiv = () => {
    const div = document.getElementById("meuAmor")
    const HqsHtml = Hqs.map(transformar)
    div.innerHTML = transformarPTab(Hqs)
  }
  
  const sort = () => {
    const div = document.getElementById("meuAmor")
    const itensOrdenados = [...Hqs].sort()
    div.innerHTML = transformarPTab(itensOrdenados)
  }
  
  const shuffle = () => {
    const div = document.getElementById("meuAmor")
    const itensEmbaralhados = [...Hqs].sort(() => Math.random() - 0.5)
    div.innerHTML = transformarPTab(itensEmbaralhados)
  }
  
  const botaoCarregar = document.getElementById("botaoCarregar")
  botaoCarregar.addEventListener("click", () => carregarDiv(Hqs))
  
  const botaoOrdenar = document.getElementById("botaoOrdenar")
  botaoOrdenar.addEventListener("click", () => sort(Hqs))
  
  const botaoEmbaralhar = document.getElementById("botaoEmbaralhar")
  botaoEmbaralhar.addEventListener("click", () => shuffle(Hqs))