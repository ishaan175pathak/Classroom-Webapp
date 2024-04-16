function getAllQuery() {
    var url = "http://127.0.0.1:8000/fetch%20query/{{information.name}}/";

    $.get(url,function (data,status){
        var result = "<table class='table table-borderless table-hover'>";
        result += "<tr><th>Name</th><th>Query</th><th>Class</th><th>Section</th></tr>";
        for (let index = 0; index < data.length; index++) {
            result += "<tr><td>"+data[index].name+"</td><td>"+data[index].query+"</td><td>"+data[index].Class+"</td><td>"+data[index].section+"</td></tr>";
        }

        result += "</table>";

        document.getElementById("show").innerHTML = result;
    })
}

function filterquery(){
    if ($("#search").val() != "") {
        $.get("http://127.0.0.1:8000/fetch%20query/{{information.name}}/",function(data,status){
            var result = "<h4 class = 'text-center'>"+$("#search").val()+"</h4>";
            result += "<table class='table table-borderless table-hover'>";
            result += "<tr><th>Name</th><th>Query</th><th>Class</th><th>Section</th></tr>";
            for (let index = 0; index < data.length; index++) {
                if(data[index].Class == $("#search").val()){
                    result += "<tr><td>"+data[index].name+"</td><td>"+data[index].query+"</td><td>"+data[index].Class+"</td><td>"+data[index].section+"</td></tr>";
                }
            }

            result += "</table>";


            document.getElementById("show").innerHTML=result;
        });
    } else {
        getAllQuery();
    }
};

$(document).ready(function(){
    getAllQuery();
})