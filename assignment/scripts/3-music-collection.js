console.log('***** Music Collection *****')

let collection = []

function addToCollection(title, artist, yearPublished) {

let object1 = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
};

collection.push(object1)
return object1
};//                              
console.log(addToCollection ("My Beautiful Dark Twisted Fantasy", "Kanye West", 2010));
console.log(addToCollection ("The Divine Feminine", "Mac Miller", 2016));
console.log(addToCollection ("Data", "Tainy", 2023));
console.log(addToCollection ("24K Magic", "Bruno Mars", 2016));
console.log(addToCollection ("Honestly, Nevermind", "Drake", 2022));
console.log(addToCollection ("Microdosis", "Mora", 2022));

console.log(collection);

function showCollection (collectionToDisplay){
    console.log(collectionToDisplay.length);
for (let album of collectionToDisplay) {
    console.log(`${album.title} by ${album.artist} published in ${album.yearPublished}`);
}
}
//- Add a function named `findByArtist`. This function should:
//- Take in `artist` (a string) parameter
//- Create an array to hold any results, empty to start
//- Loop through the `collection` and add any objects with a matching artist to the array.
//- Return the array with the matching results. If no results are found, return an empty array.

function findByArtist (artist) {
let results = []
for (let album of collection) {
    if (album.artist === artist){
    results.push(album)
    }
}
return results

}

console.log(findByArtist("Mac Miller"));
console.log(findByArtist("Taylor Swift"));
