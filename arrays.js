
// Observera att du ska använda dig av arraymetoderna  map, filter, reduce, sort utan att förändra orginalobjektet!

//------------------ data att jobba med - tweets -------------------  //

const tweets = [
    { text: 'Elon Musk is ..', id: 523423 },
    { text: 'World Cup Quatar is ..', id: 823423 },
    { text: 'Bye bye Cov-id..', id: 2039842 },
    { text: 'Meatballs, oh meatballs', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // 1. Använd Array.prototype.filter() för att ta bort kommentaren med id 823423
  
//   const filteredTweet = tweets.filter(function(tweet) {
//         return tweet.id !== 823423;
//   })

// Baker
// const filteredTweet = tweets.filter(tweet => (tweet.id !== 823423) && (tweet.id !== 542328));

const filteredTweet = tweets.filter(tweet => tweet.id !== 823423);
console.log(filteredTweet)

  // 2. Använd Array.prototype.map() för att lägga till <li> taggar runt varje tweet-text. Arrayen ska slås ihop till en sträng med hjälp av Array.prototype.join() som ska läggas till i ul-elementet i DOM:en (se index.html). 
   const lis = tweets.map(tweet => `<li>${tweet.text}</li>`)
   const html = lis.join("");
   console.log(html);
   //document.getElementById("tweets").innerHTML = html; 


  //------------------ny data att jobba med - authors -------------------  //

 const authors = [
    { first: 'Leo', last: 'Tolstoj', year: 1828, passed: 1910 },
    { first: 'Alexander', last: 'Pusjkin', year: 1799, passed: 1837 },
    { first: 'Fjodor', last: 'Dostojevski', year: 1821, passed: 1881 },
    { first: 'Anton', last: 'Tjechov', year: 1860, passed: 1904 },
    { first: 'Vladimir', last: 'Nabokov', year: 1899, passed: 1997 },
    { first: 'Maksim', last: 'Gorkij', year: 1868, passed: 1936 },
    { first: 'Koldan', last: 'Egorov', year: 1921, passed: 1821 },
    { first: 'Nikolaj', last: 'Gogl', year: 1809, passed: 1852 },
    { first: 'Leonid', last: 'Andrejev', year: 1871, passed: 1919 },
    { first: 'Mirra', last: 'Lokhvitskaya', year: 1869, passed: 1905 },
    { first: 'Ivan', last: 'Krylov', year: 1769, passed: 1844 },
    { first: 'Michail', last: 'Lermontov', year: 1814, passed: 1841 },
    { first: 'Alexandr', last: 'Blok', year: 1880, passed: 1921 }
  ];

  
  // 3. Det finns en fake-författare i authors som är död före den är född! Hitta elementet genom att använda Array.prototype.filter()

  const fakeAuthor = authors.filter(author => author.passed < author.year);
  console.log(fakeAuthor)

  const realAuthors = authors.filter(author => author.passed > author.year);
  console.log(fakeAuthor)

  // 4. Använd Array.prototype.map för att skapa en array som innehåller endast författarnas fullständiga namn (förnamn och efternamn)

  const fullNamesRussian = authors.map(author => `${author.first} ${author.last}`);

  console.log(fullNamesRussian);
  
  // 5. Använd Array.prototype.filter() för att skapa en array för författare som föddes på 1800-talet

  const authors1800th = realAuthors.filter(author => (author.year >= 1800) && (author.year < 1900));
  
  console.log(authors1800th)
 
   // 6. Anvvänd Array.protoyype.sort() för att skapa en array som innehåller författarna sorterade i bokstavsordning (stigande ordning) efter efternamn

    function compareFn(a, b) {
      const nameA = a.last.toUpperCase();
      const nameB = b.last.toUpperCase();
      if(nameA < nameB) {
        return -1;
      } 
      if(nameA > nameB) {
        return 1;
      }
      return 0; //om samma
    }

  const sortedByLastName = realAuthors.sort(compareFn);
    //const sortedByLastName = realAuthors.sort((a, b) => a.last.toLowerCase() === b.last.toLowerCase() ? 0 : a.last.toLowerCase() > b.last.toLowerCase() ? -1 : 1);
    console.log(sortedByLastName);

    // Utan comparison-funktion så kan vi bara sortera enkla arrayer
    // const letters = ["c", "b", "q"];
    // const nums = [10, 1, 3]; // görs om till strängar
    // console.log(letters.sort());
    // console.log(nums.sort());
  
   // 7. Använd Array.protoype.sort() för att skapa en array som innehåller författarna sorterade i fallande ordning efter hur många år de levde

   function compareFnYears(a, b) {
   
     if((a.passed - a.year) > (b.passed - b.year)) 
        return -1;
      if((a.passed - a.year) < (b.passed - b.year))
       return 1;
      return 0;
   }

   const sortedByYears = realAuthors.sort(compareFnYears);
   console.log(sortedByYears);

  // 8. Använd Array.protype.reduce() för att skapa en array som innehåller författarnas totala ålder

//   let sum = 0;
//   for(let i = 0; i < 10; i++) {
//     sum += i;
//   }

  // const totalAge = realAuthors.reduce(function(accumulator, author) {
  //   return accumulator + (author.passed - author.year);
  // }, 0);

 // VG-nivå
  const totalAge = realAuthors.reduce((acc, author) => acc + (author.passed - author.year), 0);

 console.log(totalAge);

  //------------------ny data att jobba med - players -------------------  //

 const players = [
    { name: 'Modrić, Luka', year: 1985 },
    { name: 'Christian, Eriksen', year: 1992 },
    { name: 'Griezmann, Antoine', year: 1991 },
    { name: 'Achraf, Hakimi', year: 1998 },
    { name: 'Martínez, Lautaro', year: 1997 }
  ];


  // 9. Använd Array.prototype.some() för att ta reda på om någon spelare är äldre än 35 år?
  const currentYear = new Date().getFullYear();
  const isOver35 = players.some(player => (currentYear - player.year) > 35);
  console.log(isOver35);


  // 10. Använd Array.prototype.every()  för att ta reda på om alla spelare är äldre än 20 år?
  const isOver20 = players.every(player => (currentYear - player.year) > 20);
  console.log(isOver20);


  // 11. Använd Array.prototype.map() och Array.prototype.split() för att göra om 'name' så att den innehåller 'förnamn efternamn' i stället för nuvarande "efternamn, förnamn"
  const newNameFormat = players.map(player => {
    const [last, first] = player.name.split(",");
    return `${first} ${last}`
  });
  console.log(newNameFormat);
  
  // [Modric, Luka] = "Modric, Luka".split(",")
  // Mladen
  const formatNames = players.map(player => {
   
    const [lastName, firstName] = player.name.split(', ');
  
    return {
      name: `${firstName} ${lastName}`,  
      year: player.year
    };
  });

  // Henrik
  const henrikNames = players.map(player => `${player.name.split(',')[1]} ${player.name.split(',')[0]}`);
  console.log(henrikNames);

  //------------------och en sista -------------------  //

   // Bonus! 
    
   // 12. Använd Array.prototype.reduce() samt Array.prototype.includes() för att skapa en array som innehåller endast unika värden från arrayen products.
   // Lite annan variant av reduce() - istället för att börja på accumalatorn på 0, börja på en tom array och pusha in värden i den!

   const products = ['jewellery', 'trousers', 'jewellery', 'shoes', 'jewellery', 't-shirt', 'polos', 't-shirt', 't-shirt']

   // Den unika arrayen ska alltå se ut så här: ['t-shirt', 'trousers', 'polos', 'shoes', 'jewellery']