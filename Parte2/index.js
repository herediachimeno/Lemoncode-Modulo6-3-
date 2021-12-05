const coinValue = [
  200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
];
let coinType;

// División para realizar el cambio y almacenamiento del mismo

let getChange = (ammountPayed, change) => change / ammountPayed;

let resultsList = (message) => {
  let list = document.getElementById("list");
  let item = document.createElement("li");
  item.innerText = message;
  return list.appendChild(item);
};

// Cálculos

let calculate = () => {
  let total = document.getElementById("total").value;
  let payed = document.getElementById("payed").value;
  let change = payed - total;

  for (let money of coinValue) {
    let result = getChange(money, change);
    if (result >= 1) {
      change -= parseInt(result) * money;
      money <= 2 ? (coinType = "moneda/s") : (coinType = "billete/s");
      let msg = parseInt(result) + " " + coinType + " de " + money + "€";
      resultsList(msg);
    }
  }
  return change;
};

// Impresión vía DOM

let printAll = () => {
  let inputNode = document.getElementById("inputsNode");

  let divTotal = document.createElement("div");
  let divPayed = document.createElement("div");

  let inputTotal = document.createElement("input");
  inputTotal.setAttribute("type", "number");
  inputTotal.setAttribute("id", "total");
  let inputPay = document.createElement("input");
  inputPay.setAttribute("type", "number");
  inputPay.setAttribute("id", "payed");

  let labelTotal = document.createElement("label");
  labelTotal.innerText = "Total a pagar: ";
  let labelPay = document.createElement("label");
  labelPay.innerText = "Importe recibido: ";

  let button = document.createElement("button");
  button.setAttribute("id", "calculate");
  button.innerText = "Devolver cambio";

  inputNode.appendChild(divTotal).appendChild(labelTotal);
  inputNode.appendChild(divTotal).appendChild(inputTotal);
  inputNode.appendChild(divPayed).appendChild(labelPay);
  inputNode.appendChild(divPayed).appendChild(inputPay);
  inputNode.appendChild(button);

  button.addEventListener("click", calculate);
};

printAll();
