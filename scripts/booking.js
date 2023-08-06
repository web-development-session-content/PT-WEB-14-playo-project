function booking() {
  let emptyObj = {
    imgUrl: "",
    info: "All work and no play makes Jack a dull boy! Book a court and go have some fun",
  };
  let venueDetail =
    JSON.parse(localStorage.getItem("bookedVenueDetails")) || emptyObj;

  let { imgUrl, info } = venueDetail;

  return `<div id="feedbuttons">
    <button id="upcoming">UPCOMING</button>
    <button id="cancel">CANCEL</button>
</div>

<hr id="line1">
<div id="book">
<img  src="${imgUrl}" height="250" width="250">

</div>
<div id="text">
<i>${info}</i>
</div>`;
}

export default booking;
