document.querySelector("button").addEventListener("click", () => {
    document.querySelector(".scanner-container").style.display = "flex";
  // Solicita acesso à câmera do dispositivo
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      // Exibe o feed de vídeo da câmera em um elemento HTML
      const videoElement = document.createElement("video");
      document.querySelector(".scanner-container").appendChild(videoElement);
      videoElement.srcObject = stream;
      videoElement.play();
      F;

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
    .catch(function (error) {
      //console.error("Erro ao acessar a câmera:", error);
      // Exibe uma mensagem de erro para o usuário
      //alert("Erro ao acessar a câmera: " + error.message);
    });
});

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
    const text = document.createElement("p");
    text.textContent = "Tabela nutricional não disponível para este produto.";
    document.body.appendChild(text);
  }
};

document.querySelector("button").addEventListener("click", () => {
  let code = document.querySelector("input").value;

  apiNutri(code);
});

function createElements(name, value) {
  const text = document.createElement("p");
  text.textContent = `${name}: ${value}`;
  document.body.appendChild(text);
}
