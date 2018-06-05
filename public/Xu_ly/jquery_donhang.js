//cập nhật tình trạng đơn hàng

$(document).ready(function(){
    $('#t01').on('change', '.mySelect', function () {
     var optionSelected = $("option:selected", this);
     var valueSelected = this.value;
     if(valueSelected==="Đã tiếp nhận"){
        console.log('index', this.parentNode.parentNode.rowIndex);
        this.parentNode.parentNode.className="green";
     }
     if(valueSelected==="Đang vận chuyển"){
        console.log('index', this.parentNode.parentNode.rowIndex);
        this.parentNode.parentNode.className="blue";
     }
     if(valueSelected==="Giao thành công"){
        console.log('index', this.parentNode.parentNode.rowIndex);
        this.parentNode.parentNode.className="red";
     }
     if(valueSelected==="Đã hủy"){
        console.log('index', this.parentNode.parentNode.rowIndex);
        this.parentNode.parentNode.className="cancel";
     }
     console.log(valueSelected, optionSelected);
 });
});