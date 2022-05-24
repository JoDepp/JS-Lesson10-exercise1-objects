const currentlyReading = {
  title: "The Fifth Season",
  author: "N.K. Jemisin",
  series: "Broken Earth Trilogy",
  pages: 512,
  publicationDate: "August 4th, 2015",
  currentChapter: 8,
  totalChapters: 23
};
//use dot notationto log out the title property
console.log(currentlyReading.title);
//use bracket notation to log out the pages
console.log(currentlyReading["pages"]);
//use dot notationto add a new property
currentlyReading.awards = "Hugo Award for Best Novel(2016)";
//Create a Method called updateChapter with a Parameter of chapterNum,
//inside the body of the method update the currentChapter to ChapterNum.
const updateChapter = {};
currentlyReading.updateChapter = function (chapterNum) {
  this.currentChapter = chapterNum;
};
//use updateChapter method to change the currentChapter to 11
currentlyReading.updateChapter(11);

//log out currentlyReading object
console.log(currentlyReading);
