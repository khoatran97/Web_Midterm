
$(document).ready(function()
{
    var san_pham = data.getElementsByTagName("San_pham");
    

    function getCart(){
        for(var i = 0; i < document.getElementById('Sumproduct').value; i++)
        {
            if(localStorage.getItem(i) != null)
            {
                var retrievedData = localStorage.getItem(i);
                var pro = JSON.parse(retrievedData);

                var tmp = `<div class="Hang">
                                <div class="row">
                                    <div class="col-lg-3"> <img src="../../Hinh_anh/San_pham/`+san_pham[i].getAttribute("Ma")+`.jpg" alt=""></div>
                                    <div class="col-lg-3" style="margin-top: 23px">
                                        <div>`+ pro[0] +`</div>
                                        <div>`+ pro[1] +`</div>
                                        <div>`+ san_pham[i].getAttribute("Chat_lieu") +`</div>
                                    </div>
                                    <div class="col-lg-2" style="margin-top: 40px; color: #ff7f27">
                                        `+ pro[2] +`
                                    </div>
                                    <div class="col-lg-2" style="margin-top: 40px">
                                        Số lượng:
                                        <input style="display: inline-block; width: 40px;" type="text" value="1">   
                                    </div>
                                    <div class="col-lg-2" style="margin-top: 32px">
                                        <button type="button" class="btn btn-warning">Hủy</button>
                                    </div>
                                </div>
                            </div>`
                Gio_hang.innerHTML += tmp;
            }
        }
    }
    getCart();
    
});


