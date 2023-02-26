let submit = document.getElementById("submit");

submit.addEventListener("click", function addToTable() {
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let amount = document.getElementById("amount").value;
  let info = document.getElementById("info");
  let table = document.getElementById("table");

  let nameTd = document.createElement("td");
  let dateTd = document.createElement("td");
  let amountTd = document.createElement("td");
  let newTr = document.createElement("tr");

  nameTd.innerText = name;
  dateTd.innerText = date;
  amountTd.innerText = amount;

  newTr.append(nameTd);
  newTr.append(dateTd);
  newTr.append(amountTd);

  let delButton = document.createElement("button");
  delButton.innerText = "Delete";

  newTr.appendChild(delButton);
  table.append(newTr);
  delButton.addEventListener("click", function deleteFromlist() {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].onclick = function () {
        let index = this.rowIndex;
        // console.log(index);
        table.deleteRow(index);
      };
    }
  });

  document.getElementById("amount").value = "";
  document.getElementById("name").value = "";
  document.getElementById("date").value = "";
});
