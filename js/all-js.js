$(document).ready(function() {
	$("img.lazy").lazyload({
		effect: "fadeIn"
	});

	$('#footer-inc').load('footer.html');

	// Add scrollspy to <body>
	$('body').scrollspy({target: ".navbar", offset: 70});   

	// Add smooth scrolling on all links inside the navbar
	$(".navbar a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
				}, 800, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			// window.location.hash = hash;
			});
		}  // End if
		if (this.hash == "") {
			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: 0
				}, 800, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			// window.location.hash = hash;
			});
		}
	});

	var windw = this;

	$.fn.resizing = function() {
		console.log(1);
		var $this = this,
			$window = $(windw);
			
		$(window).resize(function(e){
			var $thisWidth = $(document).width();
			if(Modernizr.mq('(max-width:768px)')) {
				var $strHeight = $this.css("height");
				var $imgheight = parseInt($strHeight.substring(0, $strHeight.length-2));
				$this.css({
					'width': (0.4*$thisWidth),
					'margin-top': ((60-$imgheight)/2),
					'margin-bottom': ((60-$imgheight)/2)
				});
			}
			else {
				$this.css({
					'width': '249',
					'margin-bottom': '0px',
					'margin-top': '0px'
				});
			}
		});
	}

	$('#logo-nav-img').resizing();
});


function validateForm()
{

	var phoneno = /^\d+$/;
	var name = $('input[name="nama"]').val(),
		email = $('input[name="email"]').val(),
		loc = $('#geocomplete').val();
		phone = $('input[name="telp"]').val();
		val = $('#lahan_choise').find(":selected").val();
		alamat = $('#geocomplete').val();
		lat = $('#lat').val();
		long = $('#long').val();
		// console.log("lat: "+lat+" - "+long);

    	if(val == "Ya"){
    		console.log("asdfs");
    		if(name != "" && email != "" && phone.match(phoneno) != null && loc != "") {

				// $('#modal-head').html("Terima kasih!");
				// $('#modal-body').html("Anda akan dihubungi oleh Tim Warung Pintar segera.");
				// $('#myModal').on('show');
				// $('#modal-close').click(function() {
				// });
				$('#myModal').modal('hide');
				console.log('all ok');
				localStorage.setItem("nama-pendaftar", name);
				$('#theForm').submit();
				$('input[name="nama"]').val("");
				$('input[name="email"]').val("");
				$('input[name="telp"]').val("");
				$('#geocomplete').val("");
			}else {
				$('#myModal').modal();
				$('#modal-head').html("Ooops!");
				$('#modal-body').html("Pastikan nama, email dan nomor telepon sudah Anda isi.");
				$('#myModal').on('show');
			}

    	}else if(val == "Tidak"){
    		if(name != "" && email != "" && phone.match(phoneno) != null ) {

				// $('#modal-head').html("Terima kasih!");
				// $('#modal-body').html("Anda akan dihubungi oleh Tim Warung Pintar segera.");
				// $('#myModal').on('show');
				// $('#modal-close').click(function() {
				// });
				$('#myModal').modal('hide');
				console.log('no loc');
				localStorage.setItem("nama-pendaftar", name);
				$('#theForm').submit();
				$('input[name="nama"]').val("");
				$('input[name="email"]').val("");
				$('input[name="telp"]').val("");
				$('#geocomplete').val("");
			}else {
				$('#myModal').modal();
				$('#modal-head').html("Ooops!");
				$('#modal-body').html("Pastikan nama, email, nomor telepon dan lahan sudah Anda isi.");
				$('#myModal').on('show');
			}
    	}else if(val == "0"){
    		$('#myModal').modal();
				$('#modal-head').html("Ooops!");
				$('#modal-body').html("Pastikan nama, email, nomor telepon dan lahan sudah Anda isi.");
				$('#myModal').on('show');
    	}else{

    		$("#submit-btn").click(function(){  
			    $.ajax({
				    url: host+'/form_website/post/web',
				    type: 'post',
				    data: $("#theForm").serialize(),
				   
				    success: function (data) {
				    	console.log(data);
				    	// window.location.href = 'http://localhost:8085/tampilan-ops/m3.php';
				    		alert("sukses input data");
				    		console.log("sukses");
				    		// window.location.reload();
				    }
				});
			});
    	}
    	
	
}



function validateForm2()
{
	var phoneno = /^\d+$/;
	var name = $('input[name="nama2"]').val(),
		email = $('input[name="email2"]').val(),
		loc = $('#geocomplete2').val();
		phone = $('input[name="telp2"]').val();
		val = $('#lahan_choise2').find(":selected").val();
		alamat = $('#geocomplete2').val();
		lat = $('#lat2').val();
		long = $('#long2').val();
		// console.log("lat: "+lat+" - "+long);
    	if(val == "Ya"){
    		if(name != "" && email != "" && phone.match(phoneno) != null && loc != "") {
		console.log(val);

			
				$('#myModal').modal('hide');
				console.log('all ok');
				localStorage.setItem("nama-pendaftar", name);
				$('#theForm2').submit();
				$('input[name="nama2"]').val("");
				$('input[name="email2"]').val("");
				$('input[name="telp"]').val("");
				$('#geocomplete2').val("");
			}else {
				$('#myModal').modal();
				$('#modal-head').html("Ooops!");
				$('#modal-body').html("Pastikan nama, email dan nomor telepon sudah Anda isi.");
				$('#myModal').on('show');
			}

    	}else if(val == "Tidak"){
    		if(name != "" && email != "" && phone.match(phoneno) != null ) {

			
				$('#myModal').modal('hide');
				console.log('no loc');
				localStorage.setItem("nama-pendaftar", name);
				$('#theForm2').submit();
				$('input[name="nama2"]').val("");
				$('input[name="email2"]').val("");
				$('input[name="telp2"]').val("");
				$('#geocomplete2').val("");
			}else {
				$('#myModal').modal();
				$('#modal-head').html("Ooops!");
				$('#modal-body').html("Pastikan nama, email, nomor telepon dan lahan sudah Anda isi.");
				$('#myModal').on('show');
			}
    	}else if(val == "0"){
    		console.log("siap");
    		$('#myModal').modal();
				$('#modal-head').html("Ooops!");
				$('#modal-body').html("Pastikan nama, email, nomor telepon dan lahan sudah Anda isi.");
				$('#myModal').on('show');
    	}else{
    		
    	}

	
}



