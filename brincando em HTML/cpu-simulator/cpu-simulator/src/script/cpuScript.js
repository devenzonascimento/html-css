let memory = {
    "00000000": "10010001",
    "00000001": "00111111",
    "00000010": "10010001",
    "00000011": "00011111",
    "00000100": "10010010",
    "00000101": "00000000",
    "00000110": "00000000",
    "00000111": "00000000",
    "00001000": "00000000",
    "00001001": "00000000",
    "00001010": "00000000",
    "00001011": "00000000",
    "00001100": "00000000",
    "00001101": "00000000",
    "00001110": "00000000",
    "00001111": "00000000",
  }
  let pc = "00000000"
  let mar = "00000000"
  let mdr = "00000000"
  let acc = "00000000"
  let cir = "00000000"
  let contador = 0;
  let opcode = "";
  let operand = "";

  const executeNextStep = () => {
    if (currentStep < main.length) {
      console.log(main[currentStep])
      main[currentStep]();
      setcurrentStep((prev) => prev + 1)
    }
  };
  
  const search = [
    () => (pc = toBinary(contador)),
    () => (mar = pc),
    () => (mdr = memory[mar]),
    () => (cir = mdr),
    () => (pc = toBinary((contador += 1))),
    () => decode(cir),
  ];
  function instructionExecute(array) {
    main = main.concat(array);
  }
  let main = [() => instructionExecute(search)];
  
  function decode(cir) {
    opcode = cir.substring(0, 4);
    operand = cir.substring(4, 8);
  
    switch (opcode) {
      case "0000":
        return false;
  
      case "0001":
        instructionExecute(addInstruction);
        break;
  
      case "0010":
        instructionExecute(subInstruction);
        break;
      case "0011":
        instructionExecute(storeInstruction);
        break;
      case "0101":
        instructionExecute(loadInstruction);
        break;
      case "1001":
        operand === "0001" ? instructionExecute(inputInstruction) : false;
        operand === "0010" ? instructionExecute(outputInstruction) : false;
  
      default:
        return true;
    }
  }
  
  const addInstruction = [
    () => (mar = operand.padStart(8, "0")),
    () => (mdr = memory[mar]),
    () => (acc = toBinary(toDecimal(acc) + toDecimal(mdr))),
    () => instructionExecute(search),
  ];
  
  const subInstruction = [
    () => (mar = operand.padStart(8, "0")),
    () => (mdr = memory[mar]),
    () => (acc = toBinary(toDecimal(acc) - toDecimal(mdr))),
    () => instructionExecute(search),
  ];
  
  const storeInstruction = [
    () => (mar = operand.padStart(8, "0")),
    () => (memory[mar] = acc),
    () => instructionExecute(search),
  ];
  
  const loadInstruction = [
    () => (mar = operand.padStart(8, "0")),
    () => (mdr = memory[mar]),
    () => (acc = mdr),
    () => instructionExecute(search),
  ];
  
  const inputInstruction = [
    () => (acc = toBinary(prompt("Informe um valor"))),
    () => instructionExecute(search),
  ];
  
  const outputInstruction = [
    () => alert(acc),
    () => instructionExecute(search),
  ];
  
  function toBinary(num) {
    return Number(num).toString(2).padStart(8, "0");
  }
  function toDecimal(num) {
    return parseInt(num, 2);
  }