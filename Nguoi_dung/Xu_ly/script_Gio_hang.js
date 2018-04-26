var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       Load_Gio_hang(this);
       Load_Gia(this);
    }
};
xhttp.open("GET", "../../Du_lieu/San_pham.xml", true);
xhttp.send();


function Load_Gio_hang(xml) {

    var data = xhttp.responseXML;
    var san_pham = data.getElementsByTagName("San_pham");
    var Gio_hang = document.getElementById("GioHang");


    for (var i = 0; i<san_pham.length; i++) {
        if (sessionStorage.getItem(i) != null)
        {
            var tmp = `<div class="Hang">
                            <div class="row">
                                <div class="col-lg-3"><img <img src="../../Hinh_anh/San_pham/`+san_pham[i].getAttribute("Ma")+`.jpg" alt=""></div>
                                <div class="col-lg-4" style="margin-top: 23px">
                                    <div>`+ san_pham[i].getAttribute("Ten") +`</div>
                                    <div>`+ san_pham[i].getAttribute("Thuong_hieu") +`</div>
                                    <div>`+ san_pham[i].getAttribute("Chat_lieu") +`</div>
                                </div>
                                <div class="col-lg-2" style="margin-top: 40px; color: #ff7f27">
                                    `+ san_pham[i].getAttribute("Gia") +`
                                </div>
                                <div class="col-lg-3" style="margin-top: 40px">
                                    Số lượng:
                                    <input style="display: inline-block; width: 40px;" type="text" value="1">   
                                </div>
                            </div>
                        </div>`
            Gio_hang.innerHTML += tmp;
        }
    }
}

function Load_Gia(xml) {

    var data = xhttp.responseXML;
    var san_pham = data.getElementsByTagName("San_pham");
    var Tam_tinh = document.getElementById("TT");
    var Thanh_tien = document.getElementById("ThT");
    var sum = document.getElementById("Sum");
    var gia = document.getElementById("Gia");

    var money = 0;
    var val = 0;

    for (var i = 0; i<san_pham.length; i++) {
        if (sessionStorage.getItem(i) != null)
        {
            money += san_pham[i].getAttribute("Gia");
            val++;
        }
    }
    Tam_tinh.innerHTML += "ầ"
    Tam_tinh.innerHTML += `Tạm tính: ` + money; 
    Thanh_tien.innerHTML += `Thành tiền: ` + money;
    sum.innerHTML += val;
    gia.innerHTML += money;

}