$(() => {
let clicked = false;
const $closeBtn = $('#close-modal')
  // testing variable for date
  let today = new Date()
  console.log(today);
  // console.log(date);

  //function for the day of the month
  let newDayOfMonth = () => {
    for (i = 1; i < 20; i++) {
      today.getDate() - i;
      // console.log(today.getDate() - i);
    }
  }
  console.log(today.getDate());

  // Getting the photos for all the divs
  let dateRequest = () => {
    for (i = 0; i < 5; i++) {
       console.log(`https://api.nasa.gov/planetary/apod?api_key=czm8n20NzhRSk6GRW6zD1u7FflGU4VqwyoJohXDp&date=
    ${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-i}`)
    }
  }
  dateRequest()
  // newDayOfMonth()
  // console.log(dateRequest());
  // function for todays date in the formatt that is needed for the request.
  let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
console.log(date);
  //grabbing modal elements
  // let image = $(event.currentTarget).attr('id')
let currentImage = () => {
  $(event.currentTarget).css('background-image')
  console.log(currentImage);
}
console.log(currentImage);

  //opening the Modal
  const openModal = (event) => {
    $(event.currentTarget).attr('id', 'Modal')
    $('#modal').css('display', 'block')
    $('#modal-image').css('display', 'block').css('background-image', `url(${currentImage})`)
    // console.log('clicked');
  }
  // close Modal
  const closeModal = () => {
    $('#modal').css('display', 'none')
  }
$closeBtn.on('click', closeModal)

  $.ajax({
      url:
      // dateRequest()
      // `https://api.nasa.gov/planetary/apod?api_key=czm8n20NzhRSk6GRW6zD1u7FflGU4VqwyoJohXDp&date=${dateRequest()}`
      `https://api.nasa.gov/planetary/apod?api_key=czm8n20NzhRSk6GRW6zD1u7FflGU4VqwyoJohXDp&date=2019-09-12`

    })

    .then((data) => {
      const imageUrl = data.url
      // for (i = 0; i < 20; i++) {

        const $spaceImg = $('<div>')
          .attr('id', i)
          .text(data.title)
          .addClass('space-image')
          .css('background-image', `url(${imageUrl})`)
          .appendTo('.container')
          .on('click', openModal)
        console.log(imageUrl);
      // }

      // console.log(data);
      $.ajax({
        url:   `https://api.nasa.gov/planetary/apod?api_key=czm8n20NzhRSk6GRW6zD1u7FflGU4VqwyoJohXDp&date=2019-09-09`


      })
      .then((data) => {
        const imageUrl = data.url
        // for (i = 0; i < 20; i++) {

          const $spaceImg = $('<div>')
            .attr('id', i)
            .text(data.title)
            .addClass('space-image')
            .css('background-image', `url(${imageUrl})`)
            .appendTo('.container')
            .on('click', openModal)
            console.log(imageUrl);
      })

    })





})




//https://www.cognizantsoftvision.com/blog/handling-sequential-ajax-calls-using-jquery/
