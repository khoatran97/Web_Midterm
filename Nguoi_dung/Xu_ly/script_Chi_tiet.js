var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        Load_Chi_tiet(this);
        Load_Danh_muc(this);
    }
};
xhttp.open("GET", "../../Du_lieu/San_pham.xml", true);
xhttp.send();

function Load_Chi_tiet(xml) {
    var url = new URL(document.location.toString());
    var Ma_San_pham = url.searchParams.get("Ma");
    console.log(Ma_San_pham);
    if (Ma_San_pham == null) {
        return;
    }

    var data = xhttp.responseXML;
    var san_pham = data.getElementsByTagName("San_pham");
    var ds_thong_ke = data.getElementsByTagName("Thong_ke");

    var cung_loai = document.getElementById("Cung_loai");
    var thong_ke = null;
    for (var i=0; i<ds_thong_ke.length; i++)
        {
            if (ds_thong_ke[i].getAttribute("Ma") == Ma_San_pham) {
                thong_ke = ds_thong_ke[i];
                break;
            }
        }

    for (var i = 0; i<san_pham.length; i++) {
        if (san_pham[i].getAttribute("Ma") == Ma_San_pham) {
            document.getElementById("Thuong_hieu").innerHTML = san_pham[i].getAttribute("Thuong_hieu");
            document.getElementById("Ten").innerHTML = san_pham[i].getAttribute("Ten");
            document.getElementById("Mo_ta").innerHTML = 
            `<p>Xuất xứ: `+san_pham[i].getAttribute("Xuat_xu")+`</p>
            <p>Chất liệu: `+san_pham[i].getAttribute("Chat_lieu")+`</p>
            <p>Kích thước: `+san_pham[i].getAttribute("Kich_thuoc")+`</p>
            <p>Trọng lượng: `+san_pham[i].getAttribute("Trong_luong")+`</p><br/>
            <p><b>Số lượt xem: `+thong_ke.getAttribute("Luot_xem")+`</b></p>
            <p><b>Số lượt mua: `+thong_ke.getAttribute("Luot_mua")+`</b></p>`

            document.getElementsByName("Hinh").forEach((img) => img.setAttribute("src", "../../Hinh_anh/San_pham/"+san_pham[i].getAttribute("Ma")+".jpg"))
            var tmp = `<button type="button" class="button cart_button" onclick="sessionStorage.setItem(`+i+`, `+i+`); alert("Thêm vào giỏ hàng thành công!");>Thêm vào giỏ</button>
                                    <div class="product_fav"><i class="fas fa-heart"></i></div>`;
            document.getElementById("bton").innerHTML = tmp;

            var ds_cung_loai = san_pham[i].parentElement.childNodes;
            var count = 0;

            for (var k = 0; k<ds_cung_loai.length && count<5; k++) {
                if (ds_cung_loai[k].nodeType == 3 || ds_cung_loai[k].getAttribute("Ma") == Ma_San_pham) {
                    continue;
                }
                cung_loai.innerHTML += 
                    `<div class="owl-item">
                        <div class="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="viewed_image"><img src="../../Hinh_anh/San_pham/`+ds_cung_loai[k].getAttribute("Ma")+`.jpg" alt=""></div>
                            <div class="viewed_content text-center">
                                <div class="viewed_price">`+ds_cung_loai[k].getAttribute("Gia")+`</span></div>
                                <div class="viewed_name"><a href="#">`+ds_cung_loai[k].getAttribute("Ten")+`</a></div>
                            </div>
                        </div>
                    </div>`;
                count++;
            }
            break;
        }
    }
}
function Load_Danh_muc(xml) {
    // Load Cat
    var Loai = document.getElementById("Danh_muc");
    var data = xhttp.responseXML
    var danh_muc = data.getElementsByTagName("Danh_muc")
    for (var i = 0; i<danh_muc.length; i++) {
        var tmp ='<li><a href="#">'+ danh_muc[i].getAttribute("Ten") +'<i class="fas fa-chevron-right"></i></a></li>'
        Loai.innerHTML += tmp;
    }
}