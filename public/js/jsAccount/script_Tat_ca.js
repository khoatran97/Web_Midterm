var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        Load_Danh_muc(this);
        Load_Thuong_hieu(this);
        Load_San_pham(this);
    }
};
xhttp.open("GET", "../../Du_lieu/San_pham.xml", true);
xhttp.send();

function Load_Danh_muc(xml) {
    var Loai = document.getElementById("Danh_muc");
    var Filter = document.getElementById("Danh_muc_Loc")
    var Tim_kiem = document.getElementById("Danh_muc_Tim_kiem")

    var data = xhttp.responseXML
    var danh_muc = data.getElementsByTagName("Danh_muc")
    for (var i = 0; i<danh_muc.length; i++) {
        var tmp ='<li><a href="#">'+ danh_muc[i].getAttribute("Ten") +'<i class="fas fa-chevron-right"></i></a></li>'
        var tmp_2 = '<li><a href="#">'+danh_muc[i].getAttribute("Ten")+'</a></li>'
        var tmp_3 = '<li><a class="clc" href="#">'+danh_muc[i].getAttribute("Ten")+'</a></li>'
        Loai.innerHTML += tmp;
        Filter.innerHTML += tmp_2;
        Tim_kiem.innerHTML += tmp_3;
    }
}

function Load_Thuong_hieu(xml) {
    var Thuong_hieu = document.getElementById("Thuong_hieu");

    var data = xhttp.responseXML
    var thuong_hieu = data.getElementsByTagName("Thuong_hieu")
    for (var i = 0; i<thuong_hieu.length; i++) {
        var tmp ='<li class="brand"><a href="#">'+thuong_hieu[i].getAttribute("Ten")+'</a></li>'
        Thuong_hieu.innerHTML += tmp;
    }
}

function Load_San_pham(xml) {
    var San_pham = document.getElementById("Danh_sach_San_pham")

    var data = xhttp.responseXML
    var sp = data.getElementsByTagName("San_pham")
    document.getElementById("So_San_pham").innerHTML = sp.length.toString();
    for (var i = 0; i<sp.length; i++) {
        var tmp = `<div class="product_item discount">
                        <div class="product_border"></div>
                        <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="../../Hinh_anh/San_pham/`+sp[i].getAttribute("Ma")+`.jpg" alt=""></div>
                        <div class="product_content">
                            <div class="product_price">`+sp[i].getAttribute("Gia")+`</div>
                            <div class="product_name"><div><a href="./Chi_tiet.html?Ma=`+sp[i].getAttribute("Ma")+`" tabindex="0">`+sp[i].getAttribute("Ten")+`</a></div></div>
                        </div>
                    </div>`
        San_pham.innerHTML += tmp;
    }
}