$(document).ready(function() {
	$('#t02').hide();
	$('#edit').hide();
	$('#lsp.dropdown-menu button').click(function(){
		$('#t02').hide();
		$('#t00').show();
		var value=$(this).attr('id');
		if(value==="nuttdc"){
			fillTable(tdcProd);
		}
		else if(value==="nuttdl"){
			fillTable(tdlProd);
		}
		else if(value==="nuttx"){
			fillTable(txProd);
		}
		else if(value==="nutbv")
		{
			fillTable(bvProd);
		}
		else if(value==="nutbl"){
			fillTable(blProd);
		}
		else fillTable(allProd);
	});
	$('#nsx.dropdown-menu button').click(function(){
		$('#t02').hide();
		$('#t00').show();
		var value=$(this).attr('id');
		if(value==="nutgc"){
			fillTable(gcProd);
		}
		else if(value==="nuttb"){
			fillTable(tbProd);
		}
		else if(value==="nutblb"){
			fillTable(blbProd);
		}
		else if(value==="nutpd"){
			fillTable(prdProd);
		}
		else if(value==="nutgc"){
			fillTable(gcProd);
		}
		else if(value==="nutvc"){
			fillTable(vcProd);
		}
		else fillTable(allProd);
	});
	$('#nuttsp').click(function(){
		$('#t02').show();
		$('#t00').hide();
		$('#edit').hide();
		addTable();
	});
		
});