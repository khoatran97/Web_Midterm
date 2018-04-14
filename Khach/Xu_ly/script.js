var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        Doc_Loai_San_pham(this);
    }
};
xhttp.open("GET", "../../Du_lieu/San_pham.xml", true);
xhttp.send();

function Doc_Loai_San_pham(xml) {

    var Loai = document.getElementById("Loai_San_pham");
    var danh_muc = xmlRequest.responseXML.getElementByTagName("Danh_muc")
    for (var i = 0; i<danh_muc.length; i++) {
        var tmp ='<li> <a href="">'+danh_muc[i].getAttribute("Ten")+'</a></li>'
        Loai.innerHTML += tmp;
    }
}