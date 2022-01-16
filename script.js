$('document').ready(function () {
    $('.add_another').click(function () {
        $("#tbl").append('<tr><td id = "rowTag" > Ingredient:</td><form action=""><td><input id="numberToConvert" type="number" placeholder="6"></td><td><div><select name="unit" id="unit"><option value="N/A">N/A</option><option value="mL">mL</option><option value="L">L</option></select></div></td><td><div><input id="ingredient" type="text" placeholder="eggs"></div> </td><td>convert to <select name="unit" id="unit"><option value="N/A">N/A</option><option value="mL">mL</option><option value="L">L</option></select></td></form></tr>');
    });
})


//get the ratio
let ratio = document.getElementById("originalServing").value / document.getElementById("originalServing").value;

//constructor for each ingredient entry
function IngredientEntry(amt, unit, name) {
    this.amount = amt;
    this.unit = unit;
    this.name = name;
}

let recipe = [];

function addEntry(amt, unit, name) {
    recipe.push(new IngredientEntry(amt, unit, name));
}

const addForm = document.forms['ingredient'];

addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const rows = addForm.querySelectorAll('tr');
    for (i = 0; i < rows.length; i++) {
        const row = rows[i];
        let amt = row.querySelector('input[type="number"]').value;
        let unit = row.querySelector('select[id="originalUnit"]').value;
        let name = row.querySelector('input[name="ingredient"]').value;
        //console.log(row.querySelector('select[id="convertedUnit"]').value);
        addEntry(amt, unit, name);
    }

});

function convertAmt(recipe, ratio) {
    let newRecipe = [];
    for (let i = 0; i < recipe.length; i++) {
        newRecipe.push(new IngredientEntry(recipe[i].amt*ratio, recipe[i].unit, recipe[i].name));
        console.log(recipe[i].amt*ratio);
        console.log(recipe[i].unit);
        console.log(recipe[i].name);
    }
    return newRecipe;
}
