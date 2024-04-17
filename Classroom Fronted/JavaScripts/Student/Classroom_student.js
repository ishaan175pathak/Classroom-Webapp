function postDoubts() {
    var url = "http://127.0.0.1:8000/message%20post/";
    var obj = {
        "sender":"{{information.regis.name}}",
        "receiver":$("#receiver option:selected").val(),
        "Class":"{{information.Class}}",
        "section":"{{information.section}}",
        "message":$("#doubts").val()
    }

    console.log(obj)

    $.post(url,JSON.stringify(obj),function(data,status){
        getAllDoubts();
    },'json');
};

function getAllDoubts(){
    var url = "http://127.0.0.1:8000/fetch%20message/";
    $.get(url,function(data,status){
        var info = data;
        var party = $("#receiver-party").val();

        var result = "<table class='table table-borderless table-hover'>";
        for (let index = 0; index < info.length; index++) {
            if (info[index].sender == "{{information.regis.name}}" && info[index].receiver == party) {
                result += "<tr><td><p class='text-right'>"+info[index].message+"</p><br><p class='text-right'><b>-"+info[index].sender+"</b></p></td></tr>";
            }
            if (info[index].sender == party && info[index].receiver == "{{information.regis.name}}") {
                result += "<tr><td><p class='text-left'>"+info[index].message+"</p><br><p class='text-left'><b>-"+info[index].sender+"</b></p></td></tr>";
                }
        }
        result += "</table>";
        document.getElementById("text").innerHTML=result;
    })
}


function linkView(){
    var url = "http://127.0.0.1:8000/classroom/student/{{information.regis.name}}/view%20links/";

    $.get(url,function(data,status){
        var disp = ""
        for (let index = 0; index < data.length; index++) {
            disp += "<a href='"+data[index].link+"'>"+data[index].link+"</a><br><b>"+data[index].teacher+"</b><small>"+data[index].date+"</small><hr>";
        }

        if(disp == "" || disp == null){
            disp = "No links to show";
        }

        document.getElementById("display").innerHTML=disp;
    })
}
function find_chat(){
    document.getElementById("receiver-party").value = $("#receiver option:selected").val();
    getAllDoubts();
}

$(document).ready(function(){
    linkView();
});