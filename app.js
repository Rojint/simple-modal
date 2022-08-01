// Get modal element
var modal = document.getElementById('simplemodal');	

// Get open modal button
var modalBtn = document.getElementById('modalbtn');

// Get close button

var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for click
modalBtn.addEventListener('click', openModal);

// Listen for close
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', clickOutside)


//function for open Modal

function openModal() {
	modal.style.display = 'block';
}


// function to close modal
function closeModal() {
	modal.style.display = 'none';
}

// function to close modal outsideclick
function clickOutside(e) {
	if (e.target == modal){
	modal.style.display = 'none';
	}
}