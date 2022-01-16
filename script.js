$('document').ready(function () {
    $('.add_another').click(function () {
        $("#tbl").append('<tr><td id = "rowTag" > Ingredient:</td><form action=""><td><input id="numberToConvert" type="number"></td><td><div><select name="originalUnit" id="originalUnit"><option value="N/A">N/A</option><option value="mL">mL</option><option value="L">L</option></select></div></td><td><div><input name="ingredient" id="ingredient" type="text" ></div> </td><td>convert to <select name="convertedUnit" id="convertedUnit"><option value="N/A">N/A</option><option value="mL">mL</option><option value="L">L</option></select></td></form></tr>');
    });
})



const addForm = document.forms['ingredient'];

addForm.addEventListener('submit', function (e) {
    e.preventDefault();

    //get ratio
    ratio = document.getElementById("currentServing").value / document.getElementById("originalServing").value;

    const rows = addForm.querySelectorAll('tr');
    const table = document.createElement('table');

    for (i = 0; i < rows.length; i++) {
        const row = rows[i];

        var quantity = row.querySelector('input[type="number"]').value;
        const ingredient = row.querySelector('input[name="ingredient"]').value;

        quantity = quantity * ratio;

        const newRow = document.createElement('tr');
        newRow.append(quantity + " " + ingredient);
        table.insertAdjacentElement('beforeend', newRow);
    }

    const outro = document.createElement('p');
    outro.innerHTML = "Your recipe is here!"
    document.querySelector("#resultTable").append(outro);
    document.querySelector("#resultTable").insertAdjacentElement('beforeend', table);


});

function deleteResult() {
    document.querySelector("#resultTable").innerHTML = "";
}