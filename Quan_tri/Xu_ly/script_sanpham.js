var allProd = [
        {code: '123', name: 'Tý', type: 'Túi đeo chéo', price: '100.000', count:'40', producer:'VERCASE'},
        {code: '234', name: 'Sửu', type: 'Túi đeo lưng', price: '200.000', count:'100', producer: 'GIVENCHY'},
        {code: '345', name: 'Dần', type: 'Túi xách', price: '300.000', count:'60', producer: 'GUCCI'},
        {code: '456', name: 'Mẹo',type: 'Túi đeo chéo', price: '300.000', count:'20', producer: 'PRADA'},
        {code: '567', name: 'Thìn', type: 'Balo', price: '300.000', count:'90', producer: 'TOPBAG'},
        {code: '678', name: 'Tỵ', type: 'Túi đeo lưng', price: '300.000', count:'140', producer: 'BELLABAG'},
        {code: '123', name: 'Tý', type: 'Túi đeo chéo', price: '100.000', count:'40', producer:'VERCASE'},
        {code: '234', name: 'Sửu', type: 'Túi đeo lưng', price: '200.000', count:'100', producer: 'GIVENCHY'},
        {code: '345', name: 'Dần', type: 'Túi xách', price: '300.000', count:'60', producer: 'GUCCI'},
        {code: '456', name: 'Mẹo',type: 'Túi đeo chéo', price: '300.000', count:'20', producer: 'PRADA'},
        {code: '567', name: 'Thìn', type: 'Balo', price: '300.000', count:'90', producer: 'TOPBAG'},
        {code: '678', name: 'Tỵ', type: 'Túi đeo lưng', price: '300.000', count:'140', producer: 'BELLABAG'}
    ];
    var tdcProd = [
        {code: '123', name: 'Tý', type: 'Túi đeo chéo', price: '100.000', count:'40', producer:'VERCASE'},
        {code: '234', name: 'Sửu', type: 'Túi đeo chéo', price: '200.000', count:'100', producer: 'GIVENCHY'},
        {code: '345', name: 'Dần', type: 'Túi đeo chéo', price: '300.000', count:'60', producer: 'GUCCI'},
        {code: '456', name: 'Mẹo',type: 'Túi đeo chéo', price: '300.000', count:'20', producer: 'PRADA'},
        {code: '567', name: 'Thìn', type: 'Túi đeo chéo', price: '300.000', count:'90', producer: 'TOPBAG'},
        {code: '678', name: 'Tỵ', type: 'Túi đeo chéo', price: '300.000', count:'140', producer: 'BELLABAG'}
    ];
    var tdlProd = [
        {code: '123', name: 'Tý', type: 'Túi đeo lưng', price: '100.000', count:'40', producer:'VERCASE'},
        {code: '234', name: 'Sửu', type: 'Túi đeo lưng', price: '200.000', count:'100', producer: 'GIVENCHY'},
        {code: '345', name: 'Dần', type: 'Túi đeo lưng', price: '300.000', count:'60', producer: 'GUCCI'},
        {code: '456', name: 'Mẹo',type: 'Túi đeo lưng', price: '300.000', count:'20', producer: 'PRADA'},
        {code: '567', name: 'Thìn', type: 'Túi đeo lưng', price: '300.000', count:'90', producer: 'TOPBAG'},
        {code: '678', name: 'Tỵ', type: 'Túi đeo lưng', price: '300.000', count:'140', producer: 'BELLABAG'},
        {code: '123', name: 'Tý', type: 'Túi đeo lưng', price: '100.000', count:'40', producer:'VERCASE'},
        {code: '234', name: 'Sửu', type: 'Túi đeo lưng', price: '200.000', count:'100', producer: 'GIVENCHY'}
    ];
function fillTable(orders) {
    //đưa chuỗi vào bảng
     var html = "<table id='tatca'>";
     html+="<tr id='tieude'>";
         html+="<th id='c1'>Mã sản phẩm</th>";
         html+="<th>Tên sản phẩm</th>";
         html+="<th>Loại sản phẩm</th>";
         html+="<th>Giá sản phẩm</th>";
         html+="<th>Số lượng sản phẩm</th>";
         html+="<th>Nhà phân phối</th>";
   
         html+="</tr>";

     for (var i = 0; i < orders.length; i++) {
        html+="<tr>";
        html+="<td>"+orders[i].code+"</td>";
        html+="<td>"+orders[i].name+"</td>";
        html+="<td>"+orders[i].type+"</td>";
        html+="<td>"+orders[i].price+"</td>";
        html+="<td>"+orders[i].count+"</td>";
        html+="<td>"+orders[i].producer+"</td>";
        html+="</tr>";
     }
     html+="</table>";
     document.getElementById("t00").innerHTML = html;
}