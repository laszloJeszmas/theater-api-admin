let theater = {'name': 'név', 'country': 'ország', 'town': 'város', 'address': 'cím', 'established': 'alapítva', 'website': 'weboldal'};
let person = {'name': 'név', 'birth': 'születés', 'death': 'elhalálozott'};
let performance = {'name': 'név', 'place': 'helyszín'};
let play = {'name': 'név', 'author': 'író', 'published': 'kiadás'};
let types = {'theater': theater, 'person': person, 'performance': performance, 'play': play};

$(document).ready(function () {
    let selectType = $('#select-type');
    let addForm = $('#add-form');
    selectType.change(function () {
        let selected = $( "#select-type option:selected" ).val();
        let formDict = types[selected];
        addForm.empty();
        for (let key in formDict){
            let inputField = '<input type="text" id="' + key + '" class="input-field"  name="' + key + '" placeholder="' + formDict[key] + '"><br>';
            addForm.append(inputField)
        }
        $('#name').attr('required', true)
    })
});
