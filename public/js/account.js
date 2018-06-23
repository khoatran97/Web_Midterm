$(document).ready(function()
{
    function getSumcart(){
        var sum = 0;
        for(var i = 0; i < document.getElementById('Sumproduct').value; i++)
        {
            if (sessionStorage.getItem(i) != null)
            {
                sum++;
            }
        }
        return sum;
    }
    document.getElementById("sl").innerHTML = getSumcart();

});