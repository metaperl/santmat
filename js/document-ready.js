function toggleoldversionschild () {
    $('#oldversionschild').toggle();
};

$(document).ready(
    function() {
	$('#oldversions').click( toggleoldversionschild ) ;
	toggleoldversionschild();
    }
);

