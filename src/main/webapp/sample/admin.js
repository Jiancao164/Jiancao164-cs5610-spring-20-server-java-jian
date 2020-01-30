$("#clickToHide").click(function(){
    $("#hideMe").hide();
});
$("#clickToHideTimed").click(function(){
    $("#hideMeTimed").hide(2000);
});

$("#toggleBtn").click(function(){
    $("#toggle").toggle();
});
const createAlert = () => {
    alert("Mouse down!");
};

$("#down").mousedown(createAlert);

$("#up").mouseup(function(){
    alert("Mouse up!");
});
$("#right").click(function(){
    $("#animate").animate({right: "250px"});

});
$("#callbackBtn").click(function(){
    $("p").hide(3000, function(){
        alert("Header is now hidden");
    });
});

$("#chainingExample")
    .css("color", "blue")
    .css("backgroundColor","red");

$("#text-example").text("Hello World");

var hello = $("#text-example").text();
alert(hello);
var html = $("#html-example").html();
console.log(html);

var titleFld = document.getElementById("title");
var descriptionFld = document.getElementById("description");
var addBtn = document.getElementById("addBtn");
var todosUl = document.getElementById("todos");

addBtn.onclick = addBtnHandler;


function addBtnHandler() {
    var titleStr = titleFld.value;
    var descriptionStr = descriptionFld.value;
    var id = (new Date()).getTime();
    var note = "<li id="+id+">"+titleStr
        +"<span onclick=\"deleteNote("+id+")\">x</span></li>";
    todosUl.insertAdjacentHTML("beforeend", note);
}
function deleteNote(id) {
    var todo = document.getElementById(id);
    todo.remove();
}
let h1 = $("h1");

let users = [];