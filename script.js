$('document').ready(function () {
    $('.add_another').click(function () {
        $("#tbl").append('<tr><td id = "rowTag" > Ingredient:</td><form action="">\
        <td><input id="numberToConvert" type="number"></td>\
        <td><div><select name="originalUnit" id="originalUnit">\
        <option value="N/A">N/A</option>\
        <option value="mL">mL</option>\
        <option value="L">L</option>\
        <option value="oz">oz</option>\
        <option value="g">g</option>\
        <option value="kg">kg</option>\
        </select></div></td><td>\
        <div><input name="ingredient" id="ingredient" type="text" ></div> \
        </td><td>convert to <select name="convertedUnit" id="convertedUnit">\
        <option value="N/A">N/A</option>\
        <option value="mL">mL</option>\
        <option value="L">L</option>\
        <option value="oz">oz</option>\
        <option value="g">g</option>\
        <option value="kg">kg</option>\
        </select></td></form></tr>');
    });
})

const ozInG = 28.35;
const ozInMl = 29.57;

const addForm = document.forms['ingredient'];

addForm.addEventListener('submit', function (e) {
    e.preventDefault();

    //get ratio
    ratio = document.getElementById("currentServing").value / document.getElementById("originalServing").value;

    const rows = addForm.querySelectorAll('tr');
    const table = document.createElement('table');

    for (i = 0; i < rows.length; i++) {
        const row = rows[i];

        const preUni = row.querySelector('select[id="originalUnit"]').value;
        const targetUni = row.querySelector('select[id="convertedUnit"]').value;
        var quantity = row.querySelector('input[type="number"]').value;
        const ingredient = row.querySelector('input[name="ingredient"]').value;

        //convert unit
        quantity = convertUnit(preUni, targetUni, quantity);

        //convert quantity
        quantity = Math.round(quantity * ratio * 100) / 100;

        const newRow = document.createElement('tr');

        if (targetUni == 'N/A' && preUni == 'N/A') {
            newRow.append(quantity + " " + ingredient);
        } else if (targetUni == 'N/A') {
            newRow.append(quantity + " " + preUni + " " + ingredient);
        }
        else {
            newRow.append(quantity + " " + targetUni + " " + ingredient);
        }

        table.insertAdjacentElement('beforeend', newRow);
    }

    const outro = document.createElement('p');
    outro.innerHTML = "Your recipe is here!<br>You'll need";
    table.setAttribute('id', "resultTbl");
    document.querySelector("#resultTable").append(outro);
    document.querySelector("#resultTable").insertAdjacentElement('beforeend', table);


});

function deleteResult() {
    document.querySelector("#resultTable").innerHTML = "";
}

function convertUnit(preUnit, targetUni, quantity) {
    let weights = ["g", "kg", "oz"];
    let volumes = ['L', 'mL', 'oz'];

    switch (targetUni) {
        case 'g':
            if (!weights.includes(preUnit)) {
                throw Error("Invalid unit conversion!");
            } else if (preUnit == 'g') {
                return quantity;
            } else if (preUnit == 'kg') {
                return quantity * 1000;
            } else if (preUnit == 'oz') {
                return quantity * ozInG;
            }
        case 'kg':
            if (!weights.includes(preUnit)) {
                throw Error("Invalid unit conversion!");
            } else if (preUnit == 'g') {
                return quantity / 1000;
            } else if (preUnit == 'kg') {
                return quantity;
            } else if (preUnit == 'oz') {
                return quantity * ozInG / 1000;
            }
        case 'oz':
            if (preUnit == 'N/A') {
                throw Error("Invalid unit conversion!");
            } else if (preUnit == 'g') {
                return quantity / ozInG;
            } else if (preUnit == 'kg') {
                return quantity * 1000 / ozInG;
            } else if (preUnit == 'oz') {
                return quantity;
            } else if (preUnit == 'L') {
                return (quantity * 1000 / ozInMl);
            } else if (preUnit == 'mL') {
                return (quantity / ozInMl);
            } else if (preUnit == 'oz') {
                return quantity;
            }
        case 'L':
            if (!volumes.includes(preUnit)) {
                throw Error("Invalid unit conversion!");
            } else if (preUnit == 'L') {
                return quantity;
            } else if (preUnit == 'mL') {
                return quantity / 1000;
            } else if (preUnit == 'oz') {
                return quantity * ozInMl / 1000;
            }
        case 'mL':
            if (!volumes.includes(preUnit)) {
                throw Error("Invalid unit conversion!");
            } else if (preUnit == 'L') {
                return quantity * 1000;
            } else if (preUnit == 'mL') {
                return quantity;
            } else if (preUnit == 'oz') {
                return quantity * ozInMl;
            }
        case 'N/A':
            return quantity;
    }
}