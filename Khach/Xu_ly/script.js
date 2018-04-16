var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        Load_Danh_muc(this);
        Load_Hang_moi(this);
        Load_Ban_chay(this);
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

function Load_Hang_moi(xml) {
    var Danh_sach_Hang_moi = document.getElementById("Hang_moi_ve");

    var data = xhttp.responseXML
    var moi_ve = data.getElementsByTagName("Moi")
    var san_pham = data.getElementsByTagName("San_pham")
    for (var i = 0; i<moi_ve.length; i++) {
        for (var j = 0; j<san_pham.length; j++) {
            if (moi_ve[i].getAttribute("Ma") == san_pham[j].getAttribute("Ma")) {
                var sp = san_pham[j]
                var tmp = `<div class="arrivals_slider_item">
                                <div class="border_active"></div>
                                <div class="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                    <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="../../Hinh_anh/San_pham/`+sp.getAttribute("Ma")+`.jpg" alt=""></div>
                                    <div class="product_content">
                                        <div class="product_name"><div><a href="product.html">`+sp.getAttribute("Ten")+`</a></div></div>
                                        <div class="product_price">`+sp.getAttribute("Gia")+`</div>
                                        <div class="product_extras">
                                            <button class="product_cart_button">Thêm vào giỏ</button>
                                        </div>
                                    </div>
                                    <div class="product_fav"><i class="fas fa-heart"></i></div>
                                    <ul class="product_marks">
                                        <li class="product_mark product_new">new</li>
                                    </ul>
                                </div>
                            </div>`
                Danh_sach_Hang_moi.innerHTML += tmp;
                break;
            }
        }
    }
}


function Load_Ban_chay(xml) {
    var data = xhttp.responseXML
    var thong_ke = data.getElementsByTagName("Thong_ke")
    var n = thong_ke.length;
    for (var i = 0; i<n; i++) {
        for (var j = i+1; j<n-1; j++) {
            if (parseInt(thong_ke[j].getAttribute("Luot_mua")) > parseInt(thong_ke[i].getAttribute("Luot_mua"))) {
                thong_ke[i].parentNode.insertBefore(thong_ke[j], thong_ke[i])
            }
        }
    }

    //thong_ke.sort((a,b)=>parseInt(b.getAttribute("Luot_mua"))-parseInt(a.getAttribute("Luot_mua")))
    var Danh_sach_Ban_chay = document.getElementById("Ban_chay");

    var san_pham = data.getElementsByTagName("San_pham")
    for (var i = 0; i<thong_ke.length; i++) {
        for (var j = 0; j<san_pham.length; j++) {
            if (thong_ke[i].getAttribute("Ma") == san_pham[j].getAttribute("Ma")) {
                var sp = san_pham[j]
                var tmp = `<div class="bestsellers_item discount">
                                <div class="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                    <div class="bestsellers_image"><img src="../../Hinh_anh/San_pham/`+sp.getAttribute("Ma")+`.jpg" alt=""></div>
                                    <div class="bestsellers_content">
                                        <div class="bestsellers_name"><a href="product.html">`+sp.getAttribute("Ten")+`</a></div>
                                        <div class="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                        <div>`+sp.getAttribute("Gia")+`</div>
                                    </div>
                                </div>
                                <div class="bestsellers_fav active"><i class="fas fa-heart"></i></div>
                                <div>Số lượt mua:&nbsp`+thong_ke[i].getAttribute("Luot_mua")+`</div>
                            </div>`
                if (i<10) {
                    Danh_sach_Ban_chay.innerHTML += tmp;
                }
                break;
            }
        }
    }
}