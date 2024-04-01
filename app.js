document.querySelector("button").addEventListener("click", () => {

    document.querySelector(".scanner-container").style.display = "flex";
      // Configurações do scanner
      const scannerConfig = {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector(".scanner-container"),
        },
        decoder: {
          readers: ["ean_reader"], // Especifica o tipo de código de barras a ser lido (neste caso, EAN)
        },
      };

      // Inicializa o scanner
      Quagga.init(scannerConfig, function (err) {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Scanner inicializado com sucesso");

        // Inicia a detecção de códigos de barras
        Quagga.start();
      });

      // Adiciona um listener para capturar os resultados da leitura do código de barras
      Quagga.onDetected(function (result) {
        console.log("Código de barras detectado:", result.codeResult.code);
        // Aqui você pode fazer o que quiser com o código de barras detectado
        if (result.codeResult.code != "") {
          document.querySelector(".scanner-container").style.display = "none";
          Quagga.stop();
          apiNutri(result.codeResult.code);
        }
      });
})


const apiNutri = async (codigoDeBarras) => {
  const response = await fetch(
    `https://world.openfoodfacts.org/api/v0/product/${codigoDeBarras}.json`
  );

  const data = await response.json();

  if (data.product && data.product.nutriments) {
    const nutriments = data.product.nutriments;

    console.log(data);
    createElements("Nome do Produto", data.product.product_name);
    createElements("Calorias", nutriments["energy-kcal"]);
    createElements("Carboidratos", nutriments.carbohydrates);
    createElements("Proteína", nutriments.proteins);
    createElements("Gordura", nutriments.fat);
    createElements("Fibra", nutriments.fiber);
  } else {
    //const text = document.createElement("p");
    //text.textContent = "Tabela nutricional não disponível para este produto.";
    //document.body.appendChild(text);
  }
};

document.querySelector(".teste").addEventListener("click", () => {
  let code = document.querySelector("input").value;

  apiNutri(code);
});

function createElements(name, value) {
  const text = document.createElement("p");
  text.textContent = `${name}: ${value}`;
  document.body.appendChild(text);
}
