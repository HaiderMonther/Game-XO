let title = document.querySelector('.title');
let turn = 'x';
let squrares = [];
function had(num1,num2,num3)
{
	title.innerHTML= `${squrares[num1]} winner`;
  	 document.getElementById('item'+num1).style.background = '#000';
  	 document.getElementById('item'+num2).style.background = '#000';
  	 document.getElementById('item'+num3).style.background = '#000';

  	 setInterval(function(){title.innerHTML += '.'},1000)
  	 setTimeout(function(){location.reload()},4000)
}
function winnner()
{

  for (let i = 1; i< 10; i++) 
  { 
 	// squrares[i] = document.getElementById('item'+i).innerHTML;
  }
  if (squrares[1] == squrares[2] && squrares[2] == squrares[3] && squrares[1] != '') 
  {
  		 had(1,2,3) 
  }
  else if (squrares[4] == squrares[5] && squrares[5] == squrares[6] && squrares[5] != '') 
  {
  	 had(4,5,6)
  }
   else if (squrares[7] == squrares[8] && squrares[8] == squrares[9] && squrares[7] != '') 
  {
  	had(7,8,9)
  }


  else if (squrares[1] == squrares[4] && squrares[4] == squrares[7] && squrares[4] != '') 
  {
  	had(1,4,7)
  }

  else if (squrares[2] == squrares[5] && squrares[5] == squrares[8] && squrares[8] != '') 
  {
  	had(2,5,8)
  }
  else if (squrares[3] == squrares[6] && squrares[6] == squrares[9] && squrares[6] != '') 
  {
  	had(3,6,9)
  }


  else if (squrares[3] == squrares[5] && squrares[5] == squrares[7] && squrares[3] i= '') 
  {
  	had(3,5,7)
  }
  else if (squrares[1] == squrares[5] && squrares[5] == squrares[9] && squrares[1] i= '') 
  {
  	had(1,5,9)
  }
}

function game(id)
{ 	let element = document.getElementById(id);
	if (turn === 'x' && element.innerHTML == '') 
	{
		element.innerHTML = 'x';
		turn = 'o';
		title.innerHTML = 'o';
	}
	else if (turn === 'o' && element.innerHTML == '') 
	{
		element.innerHTML = 'o';
		turn = 'x';
		title.innerHTML = 'x';
	}
	winnner();
} 	
