const firstNonRepeated = (formalstring: string) => {
 
 var strarr = formalstring.split("");
 for (var val of strarr)
 {
 	let find_first = formalstring.indexOf(val);
    let find_last = formalstring.lastIndexOf(val);
    
    if (find_first == find_last)
    {
    	return val; 
    }
 
    	
  }
  
 return 0;
}

console.log(firstNonRepeated ("hheelloow"));
