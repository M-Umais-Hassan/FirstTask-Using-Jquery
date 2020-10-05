$(function() {
    $("#add").click(add);
    $("#reset").click(reset);
    $("#update").click(update);
});

var index;

function add() {
    var tbody = document.querySelector("#table-body");
    
    var name = $("#name").val();
    var gender = $("input[name='gender']:checked").val();
    var age  = $("#age").val();
    var city  = $("#city").val();

    if(name!=null && gender!=null && age!=null && city!="Choose a city"){
    
        var Row =   '<tr>'+
                        '<td>'+name+'</td>'+
                        '<td>'+gender+'</td>'+
                        '<td>'+age+'</td>'+
                        '<td>'+city+'</td>'+
                        '<td>'+'<button class="btn btn-danger" onclick="deleteRow(this)">Delete</button> / <button class="btn btn-success" onclick="selectRow(this)">Select</button>'+'</td>'+
                    '</tr>'

        tbody.innerHTML += Row;

        $("#name").val('');
        $("input[name='gender']").prop("checked", false);
        $("#age").val('');
        $("#city").val('');
    }
}

function reset() {
    try {
        $("#name").val('');
        $("input[name='gender']").prop("checked", false);
        $("#age").val('');
        $("#city").val('');
    }catch(e) {
        alert(e);
    }
}

function deleteRow(element) {
    try {
        var p=element.parentNode.parentNode;
        p.remove();
        $("#name").val('');
        $("input[name='gender']").prop("checked", false);
        $("#age").val('');
        $("#city").val('');
    }catch(e) {
        alert(e);
    }   
}

function selectRow(element) {
    try {
        index=0;
        var tr = $(element).closest('tr');
        var name = tr.find('td:eq(0)').text();
        var gender = tr.find('td:eq(1)').text();
        var age = tr.find('td:eq(2)').text();
        var city = tr.find('td:eq(3)').text();
        
        $('#name').val(name);
        if(gender=="male") {
            $("input[id='male']").prop('checked', true);
        }
        else if(gender=="female") {
            $("input[id='female']").prop('checked', true);
        }
        $('#age').val(age);
        $('#city').val(city);
        index = $(element).closest("tr").index();
    }catch(e) {
        alert(e);
    }
}

function update() {
    try {
        alert("Under Wrking");
    }catch(e) {
        alert(e);
    }
}