var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        Load_Danh_muc(this);
    }
};
xhttp.open("GET", "../../Du_lieu/San_pham.xml", true);
xhttp.send();

function Load_Danh_muc(xml) {
    // Load Cat
    var Loai = document.getElementById("Danh_muc");
    var Pho_bien = document.getElementById("Danh_muc_Pho_bien")
    var data = xhttp.responseXML
    var danh_muc = data.getElementsByTagName("Danh_muc")
    for (var i = 0; i<danh_muc.length; i++) {
        var tmp ='<li><a href="#">'+ danh_muc[i].getAttribute("Ten") +'<i class="fas fa-chevron-right"></i></a></li>'
        var tmp_2 = ` <div class="owl-item">
                    <div class="popular_category d-flex flex-column align-items-center justify-content-center">
                        <div class="popular_category_image"><img src="../../Hinh_anh/Danh_muc/`+danh_muc[i].getAttribute("Ma")+`.png" alt=""></div>
                        <div class="popular_category_text">`+danh_muc[i].getAttribute("Ten")+`</div>
                    </div>
                </div> `
        Loai.innerHTML += tmp;
        Pho_bien.innerHTML += tmp_2;
    }

    // Load Popular Cat
}