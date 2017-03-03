function getCookie(name) {
	var cookieLen = name.length
	var cLen = document.cookie.length
	var i = 0
	var cEnd
	while (i < cLen)
		{
		var j = i + cookieLen
		if (document.cookie.substring(i,j) == name)
			{
			cEnd = document.cookie.indexOf(";",j)
			
			if (cEnd == -1)
				{ cEnd = document.cookie.length }
			
			return unescape(document.cookie.substring((j+1), cEnd))
			}
		i++	
		}
	return " "
}