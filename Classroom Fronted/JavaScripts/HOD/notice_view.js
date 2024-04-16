function getnotice(){
    $.get("http://127.0.0.1:8000/fetch%20notice/",function(data,status){
        var record = data;
        var result = "<table class='table table-borderless table-hover'>"
        result += "<tr><th>Faculty</th><th>Notice</th><th>Class</th><th>Section</th><th>Date</th></tr>"
        for (let index = 0; index < data.length; index++) {
            result += "<tr><td>"+data[index].name+"</td><td>"+data[index].notice+"</td><td>"+data[index].Class+"</td>"+
                "<td>"+data[index].section+"</td><td>"+data[index].date+"</td>"+
                "</tr>"
        }
        result += "</table>"
        $("#show").html(result);
        });
    }

$(document).ready(function(){
    getnotice();
});