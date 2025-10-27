const extendHex = (shortHex) => {
  // write your code here
	let i=0;
	if(shortHex.charAt(0)==="#")
	{
		i=1;
	}
	let str="";
	let up=false;
	for(let index=i;index<shortHex.length;index++)
		{
			let ch=shortHex.charAt(index);
			if(ch===ch.toUpperCase())
			{
				up=true;
			}
			str+=ch+ch;
			
		}

	if(up)
	{
		return "#"+str.toUpperCase();
	}
	

	return "#"+str;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
