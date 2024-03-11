/*
let memory = {
    "0": "10010001",
    "1": "10010010",
    "2": "10010001",   
    "3": "00011111", 
    "4": "10010010",  
    "5": "00000000",
    "6": "00000000", 
    "7": "00000000",
}
*/
let memory = {
      "00000000": "10010001",
      "00000001": "10010010",
      "00000010": "10010001",   
      "00000011": "00011111", 
      "00000100": "10010010",  
      "00000101": "00000000",
      "00000110": "00000000", 
      "00000111": "00000000",
}
const contador = 0
const pc = document.getElementById("pc");
const mar = document.getElementById("mar");
const mdr = document.getElementById("mdr");
const acc = document.getElementById("acc");
const cir = document.getElementById("cir");

function stepButton() {

        pc.value = contador.toString(2).padStart(8, '0');
    
        mar.value = pc.value;

        mdr.value = memory[mar.value]
        
        cir.value = mdr.value
        
        decode(cir.value)

    contador++
    
        //pc.value = contador.toString(2).padStart(8, '0');

}

function decode(cir) {
    const opcode = cir.substring(0, 4)
    const operand = cir.substring(4, 8)

    switch (opcode) {
        case "0000":
            return false

            break;
        case "0001":
            addInstruction(operand);
            
            break;
        case "0010":
            subInstruction(operand);

            break;
        case "0011":
            storeInstruction(operand);

            break;
        case "0101":
            loadInstruction(operand);

            break;
        case "1001":
            operand === "0001" ? inputInstruction(): false
            operand === "0010" ? outputInstruction(): false

            break;
    
        default:
            return false;
            break;
    }
}


function addInstruction(adress) {
    mar = adress.padStart(8, '0')
    let n1 = memory[mar]

    let n2 = parseInt(acc, 2)

    acc = (n1 + n2).toString(2).padStart(8, '0')
}
function subInstruction(adress) {

}
function storeInstruction(adress) {
    mar = adress.padStart(8, '0')

    memory[mar] = acc
    console.log(memory)
}
function loadInstruction(adress) {

}
function inputInstruction() {
    let tempAcc = prompt("Informe um valor")
    acc.value = tempAcc.toString(2).padStart(8, '0')
}
function outputInstruction() {
    alert(acc.value)
}

  const decodeTableRow = [
    {
      opcode: "0000",
      operand: "0000",
      instruction: "End",
    },
    {
      opcode: "0001",
      operand: "adress",
      instruction: "Add",
    },
    {
      opcode: "0010",
      operand: "adress",
      instruction: "Subtract",
    },
    {
      opcode: "0011",
      operand: "adress",
      instruction: "Store",
    },
    {
      opcode: "0101",
      operand: "adress",
      instruction: "Load",
    },
    {
      opcode: "0110",
      operand: "adress",
      instruction: "Always",
    },
    {
      opcode: "0111",
      operand: "adress",
      instruction: "if ACC = 0",
    },
    {
      opcode: "1000",
      operand: "adress",
      instruction: "if ACC >= 0",
    },
    {
      opcode: "1001",
      operand: "0001",
      instruction: "Input",
    },
    {
      opcode: "0010",
      operand: "adress",
      instruction: "Output",
    },
  ];




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