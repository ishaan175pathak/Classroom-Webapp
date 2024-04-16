function viewSubmission(){
    $.get("http://127.0.0.1:8000/view%20submission/{{information.name}}/",function(data,status){

        var result = "<table class='table table-borderless table-hover'>";
            result += "<tr><th>Submitted to </th><th>Submitted By</th><th>Class</th><th>Section</th><th>File</th><th>Date</th></tr>"
        for (let index = 0; index < data.length; index++) {
            result += "<tr><td>"+data[index].faculty+"</td><td>"+data[index].student+"</td><td>"+data[index].Class+"</td><td>"+data[index].section+"</td><td><a href='"+data[index].file+"' download>"+data[index].file+"</td><td>"+data[index].date+"</td></tr>";
            }
        
            result += "</table>";

        document.getElementById("display").innerHTML=result;
    });
};

function filterquery(){
    $.get("http://127.0.0.1:8000/view%20submission/{{information.name}}/",function(data,status){
        if ($("#search").val() != "") {
            var result = "<h2 class='text-center'>"+$("#search").val()+"</h2>"; 
            result += "<table class='table table-borderless table-hover'>";
            result += "<tr><th>Submitted to </th><th>Submitted By</th><th>Class</th><th>Section</th><th>File</th><th>Date</th></tr>"
            for (let index = 0; index < data.length; index++) {
                if(data[index].Class == $("#search").val())
                result += "<tr><td>"+data[index].faculty+"</td><td>"+data[index].student+"</td><td>"+data[index].Class+"</td><td>"+data[index].section+"</td><td><a href='"+data[index].file+"' download>"+data[index].file+"</td><td>"+data[index].date+"</td></tr>";
            }
        
            result += "</table>";

        document.getElementById("display").innerHTML=result
        } else {
            viewSubmission();
        }
    });
}

$(document).ready(function(){
    viewSubmission();
});