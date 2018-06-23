$(document).ready(function()
{
    var money = 0;
    function getCart(){
        for (var i = 0; i<document.getElementById('Sumproduct').value; i++) {
            if (sessionStorage.getItem(i) != null)
            {
                var pro = JSON.parse(sessionStorage.getItem(i));
                var tmp = `<div class="Hang">
                                <input type="hidden" name="proID" value = `+ pro[0] +` >
                                <input type="hidden" name="proQua" value = `+ pro[5] +` >
                                
                                <div class="row">
                                    <div class="col-lg-3"> <img src="../../Hinh_anh/San_pham/`+pro[0]+`.jpg" alt=""></div>
                                    <div class="col-lg-2" style="margin-top: 23px">
                                        <div>`+ pro[1] +`</div>
                                        <div>`+ pro[2] +`</div>
                                        <div>`+ pro[3] +`</div>
                                    </div>
                                    <div class="col-lg-2" style="margin-top: 40px; color: #ff7f27">
                                        `+ pro[4] +`
                                    </div>
                                    <div class="col-lg-2" style="margin-top: 40px">
                                        Số lượng:
                                        <input id="slPro"style="display: inline-block; width: 40px;" type="text" value=`+ pro[5] +`>   
                                    </div>
                                    <div class="col-lg-1" style="margin-top: 32px">
                                        <button type="button" onclick="sessionStorage.removeItem(`+pro[0]+`); location.reload();" class="btn btn-warning">Hủy</button>
                                    </div>
                                    <div class="col-lg-1" style="margin-top: 32px">
                                        <button type="button" onclick="update(`+pro[0]+`,'`+pro[1]+`','`+pro[2]+`','`+pro[3]+`',`+pro[4]+`);
                                        " class="btn btn-success">Cập nhập</button>
                                    </div>
                                </div>
                            </div>`;
                var Gio_hang=document.getElementById("GioHang");
                Gio_hang.innerHTML += tmp;
                money += pro[4]*pro[5];
            }
        }
    }
    


    getCart();
    
    document.getElementById("TT").innerHTML += `Tạm tính: ` + money; 
    document.getElementById("ThT").innerHTML += `Thành tiền: ` + money +`<input type="hidden" name="money" value =`+ money +`>`;
 });


    
