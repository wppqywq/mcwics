$('document').ready(function () {
    $('.add_another').click(function () {
        $("#tbl").append('<tr><td id = "rowTag" > Ingredient:</td><form action=""><td><input class="data" id="numberToConvert" type="number"></td><td><div><select name="unit" id="unit"><option value="N/A">N/A</option><option value="mL">mL</option><option value="L">L</option></select></div></td><td><div><input class="data" id="ingredient" type="text" ></div> </td><td>convert to <select name="unit" id="unit"><option value="N/A">N/A</option><option value="mL">mL</option><option value="L">L</option></select></td></form></tr>');
    });
})



const addForm = document.forms['ingredient'];

addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const rows = addForm.querySelectorAll('tr');
    for (i = 0; i < rows.length; i++) {
        const row = rows[i];
        console.log(row.querySelector('input[type="number"]').value);
        console.log(row.querySelector('select[id="originalUnit"]').value);
        console.log(row.querySelector('input[name="ingredient"]').value);
        console.log(row.querySelector('select[id="convertedUnit"]').value);
    }

});