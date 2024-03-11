let memory = [
    {
      adress: "00000000",
      value: "10010001",
    },
    {
      adress: "00000001",
      value: "00110111",
    },
    {
      adress: "00000010",
      value: "10010001",
    },
    {
      adress: "00000011",
      value: "00011111",
    },
    {
      adress: "00000100",
      value: "10010010",
    },
    {
      adress: "00000101",
      value: "00000000",
    },
    {
      adress: "00000110",
      value: "00000000",
    },
    {
      adress: "00000111",
      value: "00000000",
    }
  ];

export function stepButton() {

    //console.log("hello world!");
    const pc = document.getElementById("pc");
    const mar = document.getElementById("mar");
    const mdr = document.getElementById("mdr");
    const acc = document.getElementById("acc");
    const cir = document.getElementById("cir");


    mar.value = pc.value;
    console.log


    console.log(pc)
    console.log(pc.value)
}












async function updateDataTable() {
  try {
    const response = await fetch("https://devenzonascimento.github.io/frontend-mentor-pages/junior/social-media-dashboard-with-theme-switcher-master/data.json");
    const data = await response.json();

    console.log(data)
  } 
  catch (error) {
    console.log("Erro");
  }
}