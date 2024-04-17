function postmessage() {
    var url = "http://127.0.0.1:8000/message%20post/";
    var obj = {
        "sender":"{{information.name}}",
        "receiver":$("#receiver option:selected").val(),
        "Class":"{{information.Class}}",
        "section":"{{information.section}}",
        "message":$("#doubts").val()
    }

    console.log(obj)

    $.post(url,JSON.stringify(obj),function(data,status){
        getMessage();
    },'json');
};

function getMessage(){
    var url = "http://127.0.0.1:8000/fetch%20message/";
    $.get(url,function(data,status){
        var info = data;
        var party = $("#receiver-party").val();

        var result = "<table class='table table-borderless table-hover'>";
        for (let index = 0; index < info.length; index++) {
            if (info[index].sender == "{{information.name}}" && info[index].receiver == party) {
                result += "<tr><td><p class='text-right'>"+info[index].message+"</p><br><p class='text-right'><b>-"+info[index].sender+"</b></p></td></tr>";
            }
            if (info[index].sender == party && info[index].receiver == "{{information.name}}") {
                result += "<tr><td><p class='text-left'>"+info[index].message+"</p><br><p class='text-left'><b>-"+info[index].sender+"</b></p></td></tr>";
            }
        }
        result += "</table>";
        document.getElementById("text").innerHTML=result;
    })
}

function sendData() {
    var url = "http://127.0.0.1:8000/doubt%20post/";

    var obj = {
        "sender":"{{information.name}}",
        "doubts":"https://meet.google.com/?hs=197&pli=1&authuser=0"
    }

    $.post(url,JSON.stringify(obj),function(data,status){
        getAllPost();
    },'json')
}

function display(){
    document.getElementById("descrip").style.transform="TranslateX(0px)";
}

function final_disp(){
    var url = "http://127.0.0.1:8000/classroom/faculty/{{information.name}}/link/";

    var obj = {
        "teacher":"{{information.name}}",
        "Class":$("#class option:selected").val(),
        "section":$("#section option:selected").val(),
        "link":$("#link").val(),
    }

    $.post(url,JSON.stringify(obj),function(data,status){
        alert(status);
    },'json');

    document.getElementById("descrip").style.transform="TranslateX(310px)";
}

function find_chat(){
    document.getElementById("receiver-party").value = $("#receiver option:selected").val();
    getMessage();
}