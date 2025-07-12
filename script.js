// complete the given function

function palindrome(str){

	let nstr=str.toLowerCase();
	let noSpaces = nstr.replace(/ /g, "");

	for(let i=0;i<=noSpaces.length-1;i++){
		if(noSpaces[i]!==noSpaces[noSpaces.length-1]){
			return false;

		}
		
}

	return true;

}
module.exports = palindrome
