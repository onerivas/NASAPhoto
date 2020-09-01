$(() => {
  // let currentMonth = today.getMonth()
  let today = new Date()
  let adjustMonth = 1;
  let currentMonth = today.getMonth() + adjustMonth;
  console.log(today.getMonth());
  const findMonth = () => {
    currentMonth = today.getMonth() + adjustMonth;
  }
  // let clicked = false;
  const $closeBtn = $('#close-modal')
  // testing variable for date
  // console.log(today);
  // console.log(date);
  //opening the Modal
  const openModal = (event) => {
    let newModalBackground = $(event.currentTarget).css('background-image')
    console.log(newModalBackground);
    $('#modal').css('display', 'block')
    $('#modal-image').css('display', 'block').css('background-image', newModalBackground)
    // console.log('clicked');
  }
  const closeModal = () => {
    $('#modal').css('display', 'none')
  }
  $closeBtn.on('click', closeModal)

  // //function for the day of the month
  // let newDayOfMonth = () => {
  //   for (i = 1; i < 31; i++) {
  //     if (i < 10) {
  //       console.log('0' + i);
  //       // '0' + i;
  //     } else {
  //       console.log(i);
  //     }
  //     // console.log(today.getDate() - i);
  //   }
  // }
  // console.log(newDayOfMonth);
  // newDayOfMonth()
  let currentYear = today.getFullYear()

  const $previousBtn = $('#previousBtn')

  const previousMonth = () => {
    $('.gallery').empty()
    adjustMonth -= 1
    findMonth()
    console.log(today.getMonth());
    console.log(adjustMonth)
    console.log(currentMonth);
    dataRequest()

  }
  $previousBtn.on('click', previousMonth)
  const $nextBtn = $('#nextBtn')
  const nextMonth = () => {
    $('.gallery').empty()
    adjustMonth += 1
    findMonth()
    console.log(today.getMonth());
    console.log(adjustMonth)
    console.log(currentMonth);
    dataRequest()
  }
  $nextBtn.on('click', nextMonth)
  // Getting the photos for all the divs

  let dataRequest = () => {
    for (i = 1; i <= 31; i++) {
      $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=czm8n20NzhRSk6GRW6zD1u7FflGU4VqwyoJohXDp&date=${currentYear}-${currentMonth}-${i}`
      }).then((data) => {
        // console.log(i);
        const explanation = data.explanation
        const imageUrl = data.url
        const $spaceHolder = $('<div>').addClass('holder').appendTo('.gallery')
        const $spaceImg = $('<div>')
          .attr('id', i)
          .addClass('space-image')
          .css('background-image', `url(${imageUrl})`)
          .appendTo($spaceHolder)
          .on('click', openModal)
        const $imageText = $('<div>')
          .text(data.title).css('color', 'white')
          .appendTo($spaceHolder)
        console.log(data);

      })
      //    console.log('https://api.nasa.gov/planetary/apod?api_key=czm8n20NzhRSk6GRW6zD1u7FflGU4VqwyoJohXDp&date='
      // `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-i}`)
    }
  }
  dataRequest()
  // newDayOfMonth()
  // console.log(dateRequest());
  // function for todays date in the formatt that is needed for the request.
  // let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
  // console.log(date);
  //grabbing modal elements
  // let currentImage = $(event.currentTarget).css('background-image')
  // console.log(currentImage);
  // // let image = $(event.currentTarget).attr('id')
  //
  // console.log(`this is the ${currentImage}`);




  // $.ajax({
  //     url:
  //       // dateRequest()
  //       // `https://api.nasa.gov/planetary/apod?api_key=czm8n20NzhRSk6GRW6zD1u7FflGU4VqwyoJohXDp&date=${dateRequest()}`
  //       `https://api.nasa.gov/planetary/apod?api_key=czm8n20NzhRSk6GRW6zD1u7FflGU4VqwyoJohXDp&date=2019-09-12`
  //
  //   })
  //
  //   .then((data) => {
  //     // for (i = 0; i < 20; i++) {
  //
  //     const imageUrl = data.url
  //     const $spaceImg = $('<div>')
  //       .attr('id', i)
  //       .text(data.title).css('color', 'white')
  //       .addClass('space-image')
  //       .css('background-image', `url(${imageUrl})`)
  //       .appendTo('.container')
  //       .on('click', openModal)
  //     console.log(imageUrl);
  //     // }
  //
  //   })
  // // console.log(data);
  // $.ajax({
  //     url: `https://api.nasa.gov/planetary/apod?api_key=czm8n20NzhRSk6GRW6zD1u7FflGU4VqwyoJohXDp&date=2019-09-09`
  //
  //
  //   })
  //   .then((data) => {
  //     const imageUrl = data.url
  //     // for (i = 0; i < 20; i++) {
  //
  //     const $spaceImg = $('<div>')
  //       .attr('id', i)
  //       .text(data.title).css('color', 'white')
  //       .addClass('space-image')
  //       .css('background-image', `url(${imageUrl})`)
  //       .appendTo('.container')
  //       .on('click', openModal)
  //     console.log(imageUrl);
  //   })






})




//https://www.cognizantsoftvision.com/blog/handling-sequential-ajax-calls-using-jquery/
