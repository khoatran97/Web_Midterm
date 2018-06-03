function createTable() {
    var orders = [
        {code: '123', name: 'Tý', date: '03/10/2018', total: '100.000', duration: '1', logo:'../../../Hinh_anh/Thuong_hieu/Brand_001.png'},
        {code: '234', name: 'Sửu', date: '03/08/2018', total: '200.000', duration: '2', logo:'../../../Hinh_anh/Thuong_hieu/Brand_001.png'},
        {code: '345', name: 'Dần', date: '04/30/2018', total: '300.000', duration: '3', logo:'../../../Hinh_anh/Thuong_hieu/Brand_001.png'},
        {code: '456', name: 'Mẹo', date: '03/29/2018', total: '300.000', duration: '4', logo:'../../../Hinh_anh/Thuong_hieu/Brand_001.png'},
        {code: '567', name: 'Thìn', date: '03/13/2018', total: '300.000', duration: '5', logo:'../../../Hinh_anh/Thuong_hieu/Brand_001.png'},
        {code: '678', name: 'Tỵ', date: '04/17/2018', total: '300.000', duration: '6', logo:'../../../Hinh_anh/Thuong_hieu/Brand_001.png'}
    ];
    //đưa chuỗi vào bảng
     var html = "<table id='t01'>";
     html+="<thead>"+"<tr>";
         html+="<th id='c1'>Mã NPP</th>";
         html+="<th>Tên NPP</th>";
         html+="<th>Ngày kí</th>";
         html+="<th>Số mặt hàng</th>";
         html+="<th>Ngày hết hạn</th>";
         html+="<th>Logo</th>";
         html+="</tr>"+"</thead>"+"<tbody>";

    for (var i = 0; i < orders.length; i++) {
       html+="<tr  onclick='getRow(this)'>";
       html+="<td>"+orders[i].code+"</td>";
       html+="<td>"+orders[i].name+"</td>";
       html+="<td>"+orders[i].date+"</td>";
       html+="<td>"+orders[i].total+"</td>";
       html+="<td>"+orders[i].duration+"</td>";
       html+="<td><img class='brand' src='"+orders[i].logo+"'></td>";
       html+="</tr>";
    }
    html+="</tbody>"+"</table>";
    document.getElementById("table").innerHTML = html;
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var image=document.getElementById("blah");
            image.src=e.target.result;
            image.id='';
            image.style.display="block";
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function addRow(){
    var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];

    // Insert a row in the table at the last
    var newRow   = tableRef.insertRow(tableRef.length);

    for(var i=0;i<5;i++){
        //insert the textbox first-4-cells
        var newCell  = newRow.insertCell(i);
        var field = document.createElement("input");
        field.className="inputCell";
        newCell.appendChild(field);
    }
    //insert choose file to the 6th cell
    var newCell  = newRow.insertCell(5);
    var html="<input type='file' id='src' onchange='javascript:readURL(this)'>";
    html+="<img id='blah' class='brand' src='' style=display:none' height='200'>";
    newCell.innerHTML=html;
}
var rIndex;
function getRow(x)
{
    rIndex = x.rowIndex;
    document.getElementById("name").value = x.cells[1].innerHTML;
    document.getElementById("dateStart").value = x.cells[2].innerHTML;
    document.getElementById("dateEnd").value = x.cells[4].innerHTML;
    x.cells[5].innerHTML="<img id='blah' class='brand' style=display:none' height='200'>";
}

function editHtmlTbleSelectedRow()
{
    var table=document.getElementById("t01");
    var name = document.getElementById("name").value,
        dateStart = document.getElementById("dateStart").value,
        dateEnd = document.getElementById("dateEnd").value;
    table.rows[rIndex].cells[1].innerHTML = name;
    table.rows[rIndex].cells[2].innerHTML = dateStart;
    table.rows[rIndex].cells[4].innerHTML = dateEnd;
    document.getElementById("name").value="";
    document.getElementById("dateStart").value="";
    document.getElementById("dateEnd").value="";
}