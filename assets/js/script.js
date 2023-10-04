// ~~~ TODAY'S DATE ~~~ //
//(document).ready <--may need to be used if other jQuery/JS are in the script document
// Initiate the function for all other code.
$(function() {
  // ~~~ TODAY'S DATE ~~~ //
  // When researching this I got confused because I saw articles recommending to use moment() instead of dayjs(), then I recalled we discussed moment yesterday and how it's basically no longer used. Also the fact that our starter docs gave us an API to dayjs.
  // The format I based off of the visual in the assignment gif image. Researched on jarte.com to see different display options.
  // Added a bit of fun to set an internal to count the time for each second
  setInterval(function() {
  var todaysDate = dayjs().format('dddd, MMM D YYYY h:mm:ssA');
  // I'm struggling to adjust to jquery. I didn't see a difference between using .text or .html, so I went with .html
  $("#currentDay").html(todaysDate);
  console.log(todaysDate);
}, 1000)

  // ~~~ SAVE to LOCAL STORAGE ~~~ //
  // save button class called, using jquery .on to initiate the event listener of "click", initiating the function.
    $(".saveBtn").on("click", function() {
      // Establish variables to hold text and time data
      // (this) refers it's attachment to the save button
      // .sibling and .parent are the relationship to the button
      // .sibling is connecting to the .description class element
      // .parent is connecting to the id attribute, no matter what that id is labeled
      // val() is explicitly getting the value of the text area element
      var textArea = $(this).siblings(".description").val();
      var timeSaved = $(this).parent().attr("id");

      // localStorage is setting the time and text of when the save button is clicked.
      localStorage.setItem(timeSaved, textArea);
    });

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // ~~~ TIME TRACKING ~~~ //
  function timeTracking() {
    // using the dayjs setting a variable to explicitly pull the hour
    var currentTime = dayjs().hour();
    console.log("Current Hour: " + currentTime); 

    // Setting up a function related to the class .time-block to iterate over .each hour.
    $(".time-block").each(function() {
      // the id of each time block is called. Using .split method to turn it into an array. Using the id attribute to call all blocks prefaced with "hour-". parseInt making sure it's an integer. (this) referencing the time block we are in.
      var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);

      // using if statements to compare timeBlock to currentTime. Referencing this again to add and remove classes
      if (timeBlock < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }

      else if (timeBlock === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }

      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }

      console.log(timeBlock);
    });
  }

    // ~~~ RETRIEVE FROM LOCAL STORAGE ~~~ //
    // individual localStorage getItem calls all placing data in the .description textarea, using the id #hour- to determine which time block they go into.
    $("#hour-6 .description").val(localStorage.getItem("hour-6"));
    $("#hour-7 .description").val(localStorage.getItem("hour-7"));
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
    // Is there a way we could rewrite these to be a .each loop?




  // Calling on the time.Tracking function.
  timeTracking();
});
