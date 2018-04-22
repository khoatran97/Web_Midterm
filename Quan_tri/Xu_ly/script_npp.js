function createTable() {
    var orders = [
        {code: '123', name: 'Tý', date: '03/10/2018', total: '100.000', status: 'Còn hạn'},
        {code: '234', name: 'Sửu', date: '03/08/2018', total: '200.000', status: 'Còn hạn'},
        {code: '345', name: 'Dần', date: '04/30/2018', total: '300.000', status: 'Còn hạn'},
        {code: '456', name: 'Mẹo', date: '03/29/2018', total: '300.000', status: 'Còn hạn'},
        {code: '567', name: 'Thìn', date: '03/13/2018', total: '300.000', status: 'Còn hạn'},
        {code: '678', name: 'Tỵ', date: '04/17/2018', total: '300.000', status: 'Còn hạn'}
    ];
    //đưa chuỗi vào bảng
     var html = "<table id='t01'>";
     html+="<tr>";
         html+="<th id='c1'>Mã NPP</th>";
         html+="<th>Tên NPP</th>";
         html+="<th>Ngày kí hợp đồng</th>";
         html+="<th>Số mặt hàng</th>";
         html+="<th>Tình trạng hợp đồng</th>";
         html+="<th>Logo</th>";
         html+="</tr>";

     for (var i = 0; i < orders.length; i++) {
        html+="<tr>";
        html+="<td>"+orders[i].code+"</td>";
        html+="<td>"+orders[i].name+"</td>";
        html+="<td>"+orders[i].date+"</td>";
        html+="<td>"+orders[i].total+"</td>";
        html+="<td><select class='mySelect'>"+
                '<option value="o">Còn hạn</option>'+
                '<option value="x">Dừng hợp đồng</option>'+
            "</select></td>";
        html+="<td><img class='brand' src='../../../Hinh_anh/Thuong_hieu/Brand_001.png'></td>";
        html+="</tr>";
     }
     html+="</table>";
     document.getElementById("table").innerHTML = html;
}