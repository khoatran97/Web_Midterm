var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        Load_Chi_tiet(this);
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

    for (var i = 0; i<san_pham.length; i++) {
        if (san_pham[i].getAttribute("Ma") == Ma_San_pham) {
            document.getElementById("Thuong_hieu").innerHTML = san_pham[i].getAttribute("Thuong_hieu");
            document.getElementById("Ten").innerHTML = san_pham[i].getAttribute("Ten");
            document.getElementById("Mo_ta").innerHTML = 
            `<p>Chất liệu: `+san_pham[i].getAttribute("Chat_lieu")+`</p>
            <p>Kích thước: `+san_pham[i].getAttribute("Kich_thuoc")+`</p>
            <p>Trọng lượng: `+san_pham[i].getAttribute("Trong_luong")+`</p>`

            document.getElementsByName("Hinh").forEach((img) => img.setAttribute("src", "../../Hinh_anh/San_pham/"+san_pham[i].getAttribute("Ma")+".jpg"))
            var tmp = `<button type="button" class="button cart_button" onclick="sessionStorage.setItem(`+i+`, `+i+`); alert("Thêm vào giỏ hàng thành công!");>Thêm vào giỏ</button>
                                    <div class="product_fav"><i class="fas fa-heart"></i></div>`;
            document.getElementById("bton").innerHTML = tmp;
            break;
        }
    }
}