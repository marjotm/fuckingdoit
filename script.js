function gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}

function setFuckingText(index)
{
	var fucking_text = new Array();
	fucking_text[ 0] = "Fucking exercise";
	fucking_text[ 1] = "Fucking don't be late";
	fucking_text[ 2] = "Fuck the Seahawks";
	fucking_text[ 3] = "Fucking make every day count";
	fucking_text[ 4] = "Fucking stop comb-overs";
	fucking_text[ 5] = "No one gives a fuck, so stop thinking they do";
	fucking_text[ 6] = "Stop fucking having expectations and just live";
	fucking_text[ 7] = "Stop being a fucking coward";
	fucking_text[ 8] = "Stop fucking following the status quo";
	fucking_text[ 9] = "Fucking stop swag";
	fucking_text[10] = "Be a fucking leader, that doesn't mean you have to change the world";
	fucking_text[11] = "Don't fucking raise your voice, improve your fucking argument";
	fucking_text[12] = "Philosophy is fucking important, learn it";
	fucking_text[13] = "Don't fucking fear failure, accept it and learn from it, you are allowed to fail";
	fucking_text[14] = "Leaders fucking allow room for fucking failure, even from their subordinates";
	fucking_text[15] = "Stop fucking procrastinating";
	fucking_text[16] = "Life is your fucking attitude, not your fucking situation";
	fucking_text[17] = "Don't fucking concentrate on the future at the expense of the now, your mind needs to be fucking present, fucking Qui-Gon Jinn";
	fucking_text[18] = "Don't fucking blame others for their mistakes, it fucking makes you weak, Andrew fucking Pochter";
	fucking_text[19] = "Shyness is fucking selfishness, stop fucking thinking about yourself, and not the people around you, Sir Richard fucking Branson";
	fucking_text[20] = "What you fucking value isn't what you think or say, it's what you fucking sacrifice for it";
	fucking_text[21] = "Success is the fucking progressive realization of a fucking worthy ideal, Earl fucking Nightingale"
	fucking_text[22] = "Cowards die many fucking times before their deaths, fucking Shakespeare"
	fucking_text[23] = "Don't try to fucking be the best, it will make your fucking arrogant"
	fucking_text[24] = "Don't date fucking immature girls or girls who think they are mature"
	
	document.getElementById('bigfuckingtext').innerHTML = fucking_text[index];
	
	document.getElementById('bigfuckingindex').href = "http://whatthefuckismysocialmediastrategy.com/index.html?p=" + index;
}

function loadText()
{
	var index = gup("p");
	
	if( index == "" )
	{
		changeFuckingText();
	}
	else
	{
		var num = parseInt(index);
		if( num < 25 )
		{
			setFuckingText(num);
		}
		else
		{
			changeFuckingText();
		}
	}
}

function changeFuckingText()
{
	var i = Math.floor(25*Math.random());
	setFuckingText(i);
}