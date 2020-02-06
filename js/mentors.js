window.onload = () => {
  var now = new Date();

  // Returns true if the current time is within the Friday 9pm - 12am shift.
  function fri9ToMidnight() {
    var friday9pm      = new Date("02/07/2020 " + "9:00 PM");
    var fridayMidnight = new Date("02/07/2020 " + "11:59 PM");

    return (now > friday9pm && now < fridayMidnight);
  }

  function sat10To2() {
    var saturday10am = new Date("02/08/2020 " + "10:00 AM");
    var saturday2pm  = new Date("02/08/2020 " + "2:00 PM");

    return (now > saturday10am && now < saturday2pm);
  }

  function sat2To6() {
    var saturday2pm  = new Date("02/08/2020 " + "2:00 PM");
    var saturday6pm  = new Date("02/08/2020 " + "6:00 PM");

    return (now > saturday2pm && now < saturday6pm);
  }

  function sat6To9() {
    var saturday6pm  = new Date("02/08/2020 " + "6:00 PM");
    var saturday9pm  = new Date("02/08/2020 " + "9:00 PM");

    return (now > saturday6pm && now < saturday9pm);
  }

  function sat9ToMidnight() {
    var saturday9pm       = new Date("02/08/2020 " + "9:00 PM");
    var saturdayMidnight  = new Date("02/08/2020 " + "11:59 PM");

    return (now > saturday9pm && now < saturdayMidnight);
  }

  function sun8To10() {
    var sunday8am   = new Date("02/09/2020 " + "8:00 AM");
    var sunday10am  = new Date("02/09/2020 " + "10:00 AM");

    return (now > sunday8am && now < sunday10am);
  }

  // Now, call these functions to grey out mentors based on their shifts.

  var mentors = document.getElementsByClassName("mentor-item");
  for (const mentor of mentors) {
    mentor.style.opacity = "0.5";
  }

  if (fri9ToMidnight()) {
    document.getElementById("roderic").style.opacity = "1.0";
    document.getElementById("vanessa").style.opacity = "1.0";
    document.getElementById("bea").style.opacity = "1.0";
    document.getElementById("michael").style.opacity = "1.0";
    document.getElementById("alec").style.opacity = "1.0";
    document.getElementById("ryan").style.opacity = "1.0";
    document.getElementById("guy").style.opacity = "1.0";
    document.getElementById("ean").style.opacity = "1.0";
    document.getElementById("matthew").style.opacity = "1.0";
  }

  if (sat10To2()) {
    document.getElementById("christina").style.opacity = "1.0";
    document.getElementById("peter").style.opacity = "1.0";
    document.getElementById("vanessa").style.opacity = "1.0";
    document.getElementById("scott").style.opacity = "1.0";
    document.getElementById("michael").style.opacity = "1.0";
    document.getElementById("ryan").style.opacity = "1.0";
    document.getElementById("guy").style.opacity = "1.0";
    document.getElementById("david").style.opacity = "1.0";
  }

  if (sat2To6()) {
    document.getElementById("jacob").style.opacity = "1.0";
    document.getElementById("christina").style.opacity = "1.0";
    document.getElementById("vanessa").style.opacity = "1.0";
    document.getElementById("scott").style.opacity = "1.0";
    document.getElementById("michael").style.opacity = "1.0";
    document.getElementById("ryan").style.opacity = "1.0";
    document.getElementById("guy").style.opacity = "1.0";
    document.getElementById("ilya").style.opacity = "1.0";
    document.getElementById("ean").style.opacity = "1.0";
  }

  if (sat6To9()) {
    document.getElementById("jacob").style.opacity = "1.0";
    document.getElementById("roderic").style.opacity = "1.0";
    document.getElementById("scott").style.opacity = "1.0";
    document.getElementById("michael").style.opacity = "1.0";
    document.getElementById("guy").style.opacity = "1.0";
    document.getElementById("ilya").style.opacity = "1.0";
  }

  if (sat9ToMidnight()) {
    document.getElementById("michael").style.opacity = "1.0";
    document.getElementById("guy").style.opacity = "1.0";
    document.getElementById("ilya").style.opacity = "1.0";
    document.getElementById("robby").style.opacity = "1.0";
  }

  if (sun8To10()) {
    document.getElementById("roderic").style.opacity = "1.0";
    document.getElementById("bea").style.opacity = "1.0";
    document.getElementById("michael").style.opacity = "1.0";
    document.getElementById("alec").style.opacity = "1.0";
    document.getElementById("guy").style.opacity = "1.0";
    document.getElementById("ilya").style.opacity = "1.0";
  }
}