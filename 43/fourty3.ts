
function show_magicians(magicians: string[]) {
    magicians.forEach(name=>console.log(name));
  }
  
  function make_great(magicians: string[]) {
    return magicians.map(name=> `THE GREAT ${name}`);
    }
  const magicians_name: string[] = ['Naeem', 'Hussain', 'Faheem', 'Shahmeer', 'Shehzad', 'Irfan'];
 
  let copy_magician =  [...magicians_name]

 let copy_great= make_great(copy_magician);

 //original  array
 console.log("Original array \n");
 show_magicians(magicians_name)

 //coppied array
 console.log("\n coppied array \n");
 show_magicians(copy_great)
