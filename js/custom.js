var $car = null, colors = ['red', 'green', 'blue']; color = null, index = 0;
			
$(document).ready(function() {
	index = Math.floor(Math.random() * 3);
	color = colors[index];
	$('#lblStatusMessage > .question').text(getQuestion());

	$('.skyline-container').animate({ bottom:'0px' }, { duration:1000, complete:function() { treesAppearAnimation(); cloudsAppearAnimation(); dropCarsAnimation(); } });
	setTimeout(function() { $('#lblStatusMessage').removeClass('hidden'); }, 4000);

	$('.car-container').off('click').on('click', function(e) {
		e.stopPropagation();
		$(this).effect('shake', { distance:5, times:3 });
		$car = $(this);
		setAnswer();
	});
	
	$('.btn-close').off('click').on('click', function() { $('#lblStatusMessage').slideUp('fast', function() {  location.reload(); });  });
});

function cloudsAppearAnimation() {
	$('.cloud-body, .cloud-body-top').animate({ opacity:0.4 }, { duration:2000 });
}

function treesAppearAnimation() {
	$('#tree1').animate({ left:'50px' }, { duration:150, easing:'easeInSine' });
	$('#tree2').animate({ right:'50px' }, { duration:150, easing:'easeInSine' });
}

function dropCarsAnimation() {
	setTimeout(function() { $('#divcar1').animate({ top:400 }, { duration:2000, easing:'easeOutBounce' }); }, 100);
	setTimeout(function() { $('#divcar2').animate({ top:400 }, { duration:2000, easing:'easeOutBounce' }); }, 400);
	setTimeout(function() { $('#divcar3').animate({ top:400 }, { duration:2000, easing:'easeOutBounce' });}, 800);
}

function animatecar() {
	$car.animate({ left:newPosition.left }, { duration: 2000 });
}

function getQuestion() { 
	return 'Please, click on a ' + color + ' car!';
}

function setAnswer() {
	$('.answer').text('Selected car: ' + $car.find('.car-number').text());
	if ($car.hasClass('car-body-' + color)) { $('.answer-status').text('Correct!').removeClass('answer-incorrect').removeClass('answer-correct').addClass('answer-correct');
	} else { $('.answer-status').text('Incorrect!').removeClass('answer-correct').removeClass('answer-incorrect').addClass('answer-incorrect'); }
}
