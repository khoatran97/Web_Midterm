var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        Load_Danh_muc(this);
        Load_Pho_bien(this);
        Load_Hang_moi(this);
        Load_Ban_chay(this);
        Load_Xem_nhieu(this);
        Load_Hang_sap_ve(this);
    }
};
xhttp.open("GET", "../../Du_lieu/San_pham.xml", true);
xhttp.send();

function Load_Danh_muc(xml) {
    // Load Cat
    var Loai = document.getElementById("Danh_muc");
    var Pho_bien = document.getElementById("Danh_muc_Pho_bien")
    var Tim_kiem = document.getElementById("Danh_muc_Tim_kiem")
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
        var tmp_3 = '<li><a class="clc" href="#">'+danh_muc[i].getAttribute("Ten")+'</a></li>'
        Loai.innerHTML += tmp;
        Pho_bien.innerHTML += tmp_2;
        Tim_kiem.innerHTML += tmp_3;
    }

    // Load Popular Cat
}

function Load_Pho_bien(xml) {
    var data = xhttp.responseXML
    var pho_bien = document.getElementById("Pho_bien")
    var san_pham = data.getElementsByTagName("San_pham")

    for (var i = 0; i<16 && i<san_pham.length; i++) {
        var tmp = `<div class="featured_slider_item">
                    <div class="border_active"></div>
                    <div class="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="../../Hinh_anh/San_pham/`+san_pham[i].getAttribute("Ma")+`.jpg" alt=""></div>
                        <div class="product_content">
                            <div class="product_price discount">`+san_pham[i].getAttribute("Gia")+`</div>
                            <div class="product_name"><div><a href="./Chi_tiet.html?Ma=`+san_pham[i].getAttribute("Ma")+`">`+san_pham[i].getAttribute("Ten")+`</a></div></div>
                            <div class="product_extras">
                                <button class="product_cart_button"  onclick="sessionStorage.setItem(`+i+`, `+i+`); alert('Thêm vào giỏ hàng thành công!');">Thêm vào giỏ</button>
                            </div>
                        </div>
                    </div>
                </div>`
        pho_bien.innerHTML += tmp;
    }
    
}

function Load_Hang_moi(xml) {
    var Danh_sach_Hang_moi = null;

    var data = xhttp.responseXML
    var moi_ve = data.getElementsByTagName("Moi")
    var san_pham = data.getElementsByTagName("San_pham")
    for (var i = 0; i<moi_ve.length; i++) {
        for (var j = 0; j<san_pham.length; j++) {
            if (moi_ve[i].getAttribute("Ma") == san_pham[j].getAttribute("Ma")) {
                var sp = san_pham[j]
                if (i !=0 ) {
                    var tmp = `<div class="arrivals_slider_item">
                                    <div class="border_active"></div>
                                    <div class="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                        <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="../../Hinh_anh/San_pham/`+sp.getAttribute("Ma")+`.jpg" alt=""></div>
                                        <div class="product_content">
                                            <div class="product_name"><div><a href="./Chi_tiet.html?Ma=`+sp.getAttribute("Ma")+`">`+sp.getAttribute("Ten")+`</a></div></div>
                                            <div class="product_price">`+sp.getAttribute("Gia")+`</div>
                                            <div class="product_extras">
                                                <button class="product_cart_button" onclick="sessionStorage.setItem(`+i+`, `+i+`); alert('Thêm vào giỏ hàng thành công!');" >Thêm vào giỏ</button>
                                            </div>
                                        </div>
                                        <div class="product_fav"><i class="fas fa-heart"></i></div>
                                        <ul class="product_marks">
                                            <li class="product_mark product_new">new</li>
                                        </ul>
                                    </div>
                                </div>`
                    Danh_sach_Hang_moi.innerHTML += tmp;
                }
                else {
                    var tmp_ = `<div class="col-lg-3">
                                    <div class="arrivals_single clearfix">
                                        <div class="d-flex flex-column align-items-center justify-content-center">
                                            <div class="arrivals_single_image"><img src="../../Hinh_anh/San_pham/`+sp.getAttribute("Ma")+`.jpg" alt=""></div>
                                            <div class="arrivals_single_content">
                                                <div class="arrivals_single_category"><a href="#">`+sp.getAttribute("Thuong_hieu")+`</a></div>
                                                <div class="arrivals_single_name_container clearfix">
                                                    <div class="arrivals_single_name"><a href="./Chi_tiet.html?Ma=`+sp.getAttribute("Ma")+`">`+sp.getAttribute("Ten")+`</a></div>
                                                    <div class="arrivals_single_price text-right">`+sp.getAttribute("Gia")+`</div>
                                                </div>
                                                <div class="rating_r rating_r_4 arrivals_single_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <form action="#"><button class="arrivals_single_button" onclick="sessionStorage.setItem(`+i+`, `+i+`); alert('Thêm vào giỏ hàng thành công!');">Thêm vào giỏ</button></form>
                                            </div>
                                            <!--<div class="arrivals_single_fav product_fav active"><i class="fas fa-heart"></i></div>-->
                                            <ul class="arrivals_single_marks product_marks">
                                                <li class="arrivals_single_mark product_mark product_new">new</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>`
                    document.getElementById("Hang_moi_ve_row").innerHTML += tmp_;
                    Danh_sach_Hang_moi = document.getElementById("Hang_moi_ve");
                }
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
                                        <div class="bestsellers_name"><a href="./Chi_tiet.html?Ma=`+sp.getAttribute("Ma")+`">`+sp.getAttribute("Ten")+`</a></div>
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

function Load_Xem_nhieu(xml) {
    var data = xhttp.responseXML
    var thong_ke = data.getElementsByTagName("Thong_ke")
    var n = thong_ke.length;
    for (var i = 0; i<n; i++) {
        for (var j = i+1; j<n-1; j++) {
            if (parseInt(thong_ke[j].getAttribute("Luot_xem")) > parseInt(thong_ke[i].getAttribute("Luot_xem"))) {
                thong_ke[i].parentNode.insertBefore(thong_ke[j], thong_ke[i])
            }
        }
    }

    var Danh_sach_Xem_nhieu = document.getElementById("Xem_nhieu_nhat");

    var san_pham = data.getElementsByTagName("San_pham")
    for (var i = 0; i<thong_ke.length; i++) {
        for (var j = 0; j<san_pham.length; j++) {
            if (thong_ke[i].getAttribute("Ma") == san_pham[j].getAttribute("Ma")) {
                var sp = san_pham[j]
                var tmp = `<div class="owl-item">
                                <div class="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                    <div class="viewed_image"><img src="../../Hinh_anh/San_pham/`+sp.getAttribute("Ma")+`.jpg" alt=""></div>
                                    <div class="viewed_content text-center">
                                        <div class="viewed_price">`+sp.getAttribute("Gia")+`</div>
                                        <div class="viewed_name"><a href="./Chi_tiet.html?Ma=`+sp.getAttribute("Ma")+`">`+sp.getAttribute("Ten")+`</a></div>
                                    </div>
                                    <ul class="item_marks">
                                        <li class="item_mark item_new">top view</li>
                                    </ul>
                                </div>
                            </div>`
                if (i<10) {
                    Danh_sach_Xem_nhieu.innerHTML += tmp;
                }
                break;
            }
        }
    }
}

function Load_Hang_sap_ve(xml) {
    var data = xhttp.responseXML
    var sap_ve = data.getElementsByTagName("Sap_ve")
    var Danh_sach_Sap_ve = document.getElementById("Hang_sap_ve")
    for (var i = 0; i<sap_ve.length; i++) {
        var tmp = `<div class="owl-item">
                        <div class="banner_2_item">
                            <div class="container fill_height">
                                <div class="row fill_height">
                                    <div class="col-lg-4 col-md-6 fill_height">
                                        <div class="banner_2_content">
                                            <div class="banner_2_category">Sắp về</div>
                                            <div class="banner_2_title">`+sap_ve[i].getAttribute("Ten")+`</div>
                                            <div class="banner_2_text">`+sap_ve[i].getAttribute("Gioi_thieu")+`</div>
                                            <!--<div class="rating_r rating_r_4 banner_2_rating"><i></i><i></i><i></i><i></i><i></i></div>-->
                                            <div class="button banner_2_button"><a href="#">Xem thêm</a></div>
                                        </div>
                                        
                                    </div>
                                    <div class="col-lg-8 col-md-6 fill_height">
                                        <div class="banner_2_image_container">
                                            <div class="banner_2_image"><img src="../../Hinh_anh/San_pham/`+sap_ve[i].getAttribute("Ma")+`.png" alt=""></div>
                                        </div>
                                    </div>
                                </div>
                            </div>			
                        </div>
                    </div>`
        Danh_sach_Sap_ve.innerHTML += tmp
    }
}

function Them_Gio_hang(xml) {
    var data = xhttp.responseXML
    var san_pham = data.getElementsByTagName("San_pham")

    for (var i = 0; i<16 && i<san_pham.length; i++) {
        var tmp = `<div class="featured_slider_item">
                    <div class="border_active"></div>
                    <div class="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="../../Hinh_anh/San_pham/`+san_pham[i].getAttribute("Ma")+`.jpg" alt=""></div>
                        <div class="product_content">
                            <div class="product_price discount">`+san_pham[i].getAttribute("Gia")+`</div>
                            <div class="product_name"><div><a href="./Chi_tiet.html?Ma=`+san_pham[i].getAttribute("Ma")+`">`+san_pham[i].getAttribute("Ten")+`</a></div></div>
                            <div class="product_extras">
                                <button class="product_cart_button" onclick="sessionStorage.setItem(`+i+`, `+i+`); alert('Thêm vào giỏ hàng thành công!');">Thêm vào giỏ</button>
                            </div>
                        </div>
                    </div>
                </div>`
        pho_bien.innerHTML += tmp;
    }
    
}


