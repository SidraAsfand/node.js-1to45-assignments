
function make_album(artist_name:string, album_title:string, tracks?:number){
    let album  :{ artist:string, title: string,tracks?:number}={
        artist: artist_name,
        title: album_title
    };


if(tracks !== undefined){
   album.tracks = tracks;
}
return album;
}
const album1 =  make_album("The Beatles", "Abbey Road");
const album2 = make_album("Pink Floyd", "Dark Side of the Moon", 10);
const album3 = make_album("Led Zeppelin", "IV", 8);

console.log(album1);
console.log(album2);
console.log(album3);