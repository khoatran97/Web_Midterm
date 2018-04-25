function createTable() {
    var orders = [
        {code: '123', name: 'Tý',  total: '100.000'},
        {code: '234', name: 'Sửu',  total: '200.000'},
        {code: '345', name: 'Dần',  total: '300.000'},
        {code: '456', name: 'Mẹo', total: '300.000'},
        {code: '567', name: 'Thìn', total: '300.000'},
        {code: '678', name: 'Tỵ', total: '300.000'}
    ];
    //đưa chuỗi vào bảng
     var html = "<table id='t01'>";
     html+="<thead>"+"<tr>";
         html+="<th id='c1'>Mã loại</th>";
         html+="<th>Tên loại</th>";
         html+="<th>Số mặt hàng</th>";
         html+="<th>Danh sách sản phẩm</th>"
         html+="</tr>"+"</thead>"+"<tbody>";

    for (var i = 0; i < orders.length; i++) {
       html+="<tr>";
       html+="<td>"+orders[i].code+"</td>";
       html+="<td>"+orders[i].name+"</td>";
       html+="<td>"+orders[i].total+"</td>";
       html+="<td><a href='#'>Xem chi tiết</a></td>";
       html+="</tr>";
    }
    html+="</tbody>"+"</table>";
    document.getElementById("table").innerHTML = html;
}

function addRow(){
    var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];

    // Insert a row in the table at the last
    var newRow   = tableRef.insertRow(tableRef.length);

    for(var i=0;i<3;i++){
        //insert the textbox first-4-cells
        var newCell  = newRow.insertCell(i);
        var field = document.createElement("input");
        field.className="inputCell";
        newCell.appendChild(field);
    }
    var newCell  = newRow.insertCell(3);
    newCell.innerHTML=html;
}