
function display_date() {

    // Create a Date object
    const Today = new Date();
  
    // Get the current day
    let ThisDay = Today.getDate();
  
    // Get the current month
    let ThisMonth = Today.getMonth() + 1;
  
    // Get the current year
    let ThisYear = Today.getFullYear();
  
    // Display the date on the website
    let strDate = "Today's date: " +
      ThisMonth + "/" + ThisDay + "/" + ThisYear;
  
    document.getElementById("currdate").innerHTML = strDate;
  }
  
  // Call the function
  display_date();
  
