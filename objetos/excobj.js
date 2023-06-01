const properties = []
let opcao = ""

do {
  opcao = prompt(
    "bem-vindo ao cadastro de imóveis.\ntotal de imóveis: " + properties.length +
    "\n\nescolha uma opção:\n1. novo imóvel\n2. listar imóveis\n3. sair"
  )

  switch (opcao) {
    case "1":
        const properties = {}

        properties.owner = prompt("Informe o nome do proprietário do imóvel:")
        properties.rooms = parseFloat(prompt("Quantos rooms possui o imóvel?"))
        properties.bathrooms = parseFloat(prompt("Quantos banheiros possui o imóvel?"))
        properties.garage = prompt("O imóvel possui garagem? (Sim/Não)")
  
        break
    case "2":
        for (let i = 0; i < properties.length; i++) {
            alert(
              "Imóvel " + (i + 1) +
              "\nproprietários: " + properties[i].owner +
              "\nquartos: " + properties[i].rooms +
              "\nbanheiros: " + properties[i].bathrooms +
              "\npossui garagem? " + properties[i].garage
            )
            }    
      break
      case "3":
        alert("saindo...")
        break
      default:
        alert("opção inválida!")
        break
    }
  } while (opcao !== "3");