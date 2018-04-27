function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var image=document.getElementById("box-img");
            image.src=e.target.result;
            image.id='';
            image.style.display="block";
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function date(){
    var date=document.getElementById("date");
    var selectList = document.createElement("select");
    selectList.id = "select1";
    selectList.className="mySelect";
    date.appendChild(selectList);
    //Create and append the options
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        selectList.appendChild(option);
    }
     document.getElementById("select1").selectedIndex = "9";
}

function month(){
    var month=document.getElementById("month");
    var selectList = document.createElement("select");
    selectList.id = "select2";
    selectList.className="mySelect";
    month.appendChild(selectList);
    //Create and append the options
    for (var i = 1; i < 12; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        selectList.appendChild(option);
    }
     document.getElementById("select2").selectedIndex = "9";
}

function year(){
    var year=document.getElementById("year");
    var selectList = document.createElement("select");
    selectList.id = "select3";
    selectList.className="mySelect";
    year.appendChild(selectList);
    //Create and append the options
    for (var i = 1818; i < 2018; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        selectList.appendChild(option);
    }
     document.getElementById("select3").selectedIndex = "179";
}