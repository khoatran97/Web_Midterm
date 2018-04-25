$(document).ready(function() {

	setupTuideocheo();
	setupTuideolung();
	//setupTuixach();
	//setupBopvi();
	//setupBalo();
	setupSanpham();
});


function setupSanpham()
{
	$('#tuideocheo').hide();
	$('#tuideolung').hide();
	//$('#tuixach').hide();
	//$('#bopvi').hide();
	//$('#balo').hide();
	$('#nuttc').click(function(){
	    $('#tuideocheo').hide();
	    $('#tuideolung').hide();
	    //$('#tuixach').hide();
	    //$('#bopvi').hide();
	    //$('#balo').hide();
		$('#tatca').show();
	});
}

function setupTuideocheo()
{
	$('#tuideocheo').hide();
	$('#tuideolung').hide();
	//$('#tuixach').hide();
	//$('#bopvi').hide();
	//$('#balo').hide();
	$('#nuttdc').click(function(){
		
	    $('#tuideolung').hide();
	    //$('#tuixach').hide();
	    //$('#bopvi').hide();
	    //$('#balo').hide();
		$('#tatca').hide();
		$('#tuideocheo').show();
	});
}

function setupTuideolung()
{
	$('#tuideocheo').hide();
	$('#tuideolung').hide();
	//$('#tuixach').hide();
	//$('#bopvi').hide();
	//$('#balo').hide();
	$('#nuttdl').click(function(){
		$('#tuideocheo').hide();
	    $('#tuideolung').show();
	   // $('#tuixach').hide();
	    //$('#bopvi').hide();
	   // $('#balo').hide();
		$('#tatca').hide();
	});
}

/*function setupTuixach()
{
	$('#tuideotreo').hide();
	$('#tuideolung').hide();
	$('#tuixach').hide();
	$('#bopvi').hide();
	$('#balo').hide();
	$('#nuttx').click(function(){
		$('#tuideotreo').hide();
	    $('#tuideolung').hide();
	    $('#tuixach').show();
	    $('#bopvi').hide();
	    $('#balo').hide();
		$('#tatca').hide();
	});
}


function setupBopvi()
{
	$('#tuideotreo').hide();
	$('#tuideolung').hide();
	$('#tuixach').hide();
	$('#bopvi').hide();
	$('#balo').hide();
	$('#nutbv').click(function(){
		$('#tuideotreo').hide();
	    $('#tuideolung').hide();
	    $('#tuixach').hide();
	    $('#bopvi').show();
	    $('#balo').hide();
		$('#tatca').hide();
	});
}

function setupBalo()
{
	$('#tuideotreo').hide();
	$('#tuideolung').hide();
	$('#tuixach').hide();
	$('#bopvi').hide();
	$('#balo').hide();
	$('#nutbl').click(function(){
		$('#tuideotreo').hide();
	    $('#tuideolung').hide();
	    $('#tuixach').hide();
	    $('#bopvi').hide();
	    $('#balo').show();
		$('#tatca').hide();
	});
}*/
