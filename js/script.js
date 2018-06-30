$(document).ready(function(){
	var o = "o";
	var x = "x";
	var move = 0;
	var box1 = $('#box1');
	var box2 = $('#box2');
	var box3 = $('#box3');
	var box4 = $('#box4');
	var box5 = $('#box5');
	var box6 = $('#box6');
	var box7 = $('#box7');
	var box8 = $('#box8');
	var box9 = $('#box9');
	$('#board td>button').on('click',function(){

		if($(this).hasClass('disable')){
			alert('Space is already filled.Try another block.');
		}

		else if((move%2)==0){
			move++;
			$(this).text(o);
			$(this).addClass('disable o');
			if(
				(box1.hasClass('o')&&box2.hasClass('o')&&box3.hasClass('o'))||
				(box1.hasClass('o')&&box4.hasClass('o')&&box7.hasClass('o'))||
				(box3.hasClass('o')&&box6.hasClass('o')&&box9.hasClass('o'))||
				(box4.hasClass('o')&&box5.hasClass('o')&&box6.hasClass('o'))||
				(box1.hasClass('o')&&box5.hasClass('o')&&box9.hasClass('o'))||
				(box7.hasClass('o')&&box5.hasClass('o')&&box3.hasClass('o'))||
				(box2.hasClass('o')&&box5.hasClass('o')&&box8.hasClass('o'))||
				(box7.hasClass('o')&&box8.hasClass('o')&&box9.hasClass('o')))
			{
				alert("Player 'O' wins. Reset to play again");
			}
			else if(move==9){
				alert('Tie.Reset to play again.');
			}
		}
		else{
			$(this).text(x);
			$(this).addClass('disable x');
			move++;
			if(
				(box1.hasClass('x')&&box2.hasClass('x')&&box3.hasClass('x'))||
				(box1.hasClass('x')&&box4.hasClass('x')&&box7.hasClass('x'))||
				(box3.hasClass('x')&&box6.hasClass('x')&&box9.hasClass('x'))||
				(box4.hasClass('x')&&box5.hasClass('x')&&box6.hasClass('x'))||
				(box1.hasClass('x')&&box5.hasClass('x')&&box9.hasClass('x'))||
				(box7.hasClass('x')&&box5.hasClass('x')&&box3.hasClass('x'))||
				(box7.hasClass('x')&&box8.hasClass('x')&&box9.hasClass('x'))||
				(box2.hasClass('x')&&box5.hasClass('x')&&box8.hasClass('x')))
			{
				alert("Player 'X' wins. Reset to pplay again");
			}
			else if(move==9){
				alert('Tie.Reset to play again.');
			}
		}
	})
})