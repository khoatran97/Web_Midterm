$(document).ready(function() {
	$('.dropdown-menu button').click(function(){
		var value=$(this).attr('id');
		if(value==="nuttdc"){
			fillTable(tdcProd);
		}
		else if(value==="nuttdl"){
			fillTable(tdlProd);
		}
		else fillTable(allProd);
});
});