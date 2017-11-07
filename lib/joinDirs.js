"use strict";



function joinDirs(dirArray, leadingSlash)
{
	var i;
	var len = dirArray.length;
	var output = (leadingSlash===true) ? "/" : "";
	
	// check to see that dirArray is not only empty strings
	var isEmpty = dirArray.filter(function(dir)
	{
		return dir.trim() !== "";
	}).length < 1;

	if (!isEmpty)
	{
		for (i=0; i<len; i++)
		{
			// This should never happen, though
			/*if (dirArray[i] !== "")
			{*/
				output += dirArray[i] + "/";
			//}
		}
	}
	
	return output;
}



module.exports = joinDirs;
