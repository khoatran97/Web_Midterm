function createTable()
{
    var orders = [
        {code: '123', date: '03/10/2018', total: '100.000', status: 'Đang vận chuyển'},
        {code: '234', date: '03/08/2018', total: '200.000', status: 'Giao thành công'},
        {code: '345', date: '04/30/2018', total: '300.000', status: 'Đã tiếp nhận'},
        {code: '456', date: '03/29/2018', total: '300.000', status: 'Đã hủy'},
        {code: '567', date: '03/13/2018', total: '300.000', status: 'Đang vận chuyển'},
        {code: '678', date: '04/17/2018', total: '300.000', status: 'Giao thành công'}
        ];
    //sắp xếp giảm theo ngày
    orders.sort(function(a, b) {
     var dateA = new Date(a.date), dateB = new Date(b.date);
     return dateB-dateA;
    });
    //đưa chuỗi vào bảng
    var html = "<table id='t01'>";
    var tempt;
    html+="<tr>";
     html+="<th>Mã đơn hàng</th>";
     html+="<th>Ngày đặt</th>";
     html+="<th>Tổng tiền</th>";
     html+="<th>Tình trạng</th>";
     html+="<th>Xem chi tiết</th>";
     html+="</tr>";

    for (var i = 0; i < orders.length; i++) {
     if(orders[i].status==="Đã tiếp nhận"){
        html+="<tr class='green'>";
        tempt="<td><select class='mySelect'>"+
                '<option selected="selected">Đã tiếp nhận</option>'+
                '<option>Đang vận chuyển</option>'+
                '<option>Giao thành công</option>'+
                '<option>Đã hủy</option>'+
            "</select></td>";
     }
     if(orders[i].status==="Đang vận chuyển"){
        html+="<tr class='blue'>";
        tempt="<td><select class='mySelect'>"+
                '<option>Đã tiếp nhận</option>'+
                '<option selected="selected">Đang vận chuyển</option>'+
                '<option>Giao thành công</option>'+
                '<option>Đã hủy</option>'+
            "</select></td>";
     }
     if(orders[i].status==="Giao thành công"){
        html+="<tr class='red'>";
        tempt="<td><select class='mySelect'>"+
                '<option>Đã tiếp nhận</option>'+
                '<option>Đang vận chuyển</option>'+
                '<option selected="selected">Giao thành công</option>'+
                '<option>Đã hủy</option>'+
            "</select></td>";
     }
     if(orders[i].status==="Đã hủy"){
        html+="<tr class='black'>";
        tempt="<td><select class='mySelect'>"+
                '<option>Đã tiếp nhận</option>'+
                '<option>Đang vận chuyển</option>'+
                '<option>Giao thành công</option>'+
                '<option selected="selected">Đã hủy</option>'+
            "</select></td>";
     }
    html+="<td>"+orders[i].code+"</td>";
     html+="<td>"+orders[i].date+"</td>";
     html+="<td>"+orders[i].total+"</td>";
     html+=tempt;
     html+="<td><a href='#abc'>Xem chi tiết</a></td>";
     html+="</tr>";
    }
    html+="</table>";
    document.getElementById("box").innerHTML = html;
}