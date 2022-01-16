$('document').ready(function () {
    $('.add_another').click(function () {
        $("#tbl").append('<tr><td id = "rowTag" > Ingredient:</td><form action=""><td><input id="numberToConvert" type="number" placeholder="6"></td><td><div><select name="unit" id="unit"><option value="N/A">N/A</option><option value="mL">mL</option><option value="L">L</option></select></div></td><td><div><input id="ingredient" type="text" placeholder="eggs"></div> </td><td>convert to <select name="unit" id="unit"><option value="N/A">N/A</option><option value="mL">mL</option><option value="L">L</option></select></td></form></tr>');
    });
})


