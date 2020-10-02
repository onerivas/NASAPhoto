$(() => {

  /////////////////
  // Setting Variables for the date and adjusting the month.
  /////////////////
  let today = new Date()
  let adjustMonth = 1;
  let yearAdjust = 0
  let currentMonth = today.getMonth() + adjustMonth;
  const findMonth = () => {
    currentMonth = today.getMonth() + adjustMonth;
  }
  let currentYear = today.getFullYear() - yearAdjust
  const findYear = () => {
    if (currentMonth === 0) {
      yearAdjust++
      currentMonth = 11
      adjustMonth = 1
      currentYear = currentYear - yearAdjust
    }
  }
  //////////////////
  // declating the close button
  //////////////////


  //////////////
  // The Functions to open adn close the modal.
  //////////////
  const $closeBtn = $('#modal')
  const openModal = (event) => {
    let newModalBackground = $(event.currentTarget).css('background-image')

    $('#modal').css('display', 'block')
    $('#modal-image').css('display', 'block').css('background-image', newModalBackground)

  }
  const closeModal = () => {
    $('#modal').css('display', 'none')
  }
  $closeBtn.on('click', closeModal)


  ////////////////////////
  // declaring the previous and next button and setting up the functions to make them work
  ///////////////////////
  const $previousBtn = $('#previousBtn')
  const previousMonth = () => {
    $('.gallery').empty()
    adjustMonth -= 1
    findMonth()
    findYear()

    console.log(currentMonth);
    console.log(currentYear);
    monthDataRequest(31)

  }
  $previousBtn.on('click', previousMonth)
  const $nextBtn = $('#nextBtn')
  const nextMonth = () => {
    $('.gallery').empty()
    adjustMonth += 1
    findMonth()

    monthDataRequest(31)
  }
  $nextBtn.on('click', nextMonth)
  /////////////////////
  // creating the function to retrieve the photos for all the divs from NASA through their api
  // Using a for loop to send 31 requests for all the days there can be in a month
  // using if else to only get the posts that are photos and then creating div with text and appending it to the gallery div. each div has a built in event listener for the modal.
  /////////////////////
  const monthDataRequest = (numOfDays) => {
    for (i = 1; i <= numOfDays; i++) {
      $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=czm8n20NzhRSk6GRW6zD1u7FflGU4VqwyoJohXDp&date=${currentYear}-${currentMonth}-${i}`
      }).then((data) => {
        if (data.media_type === 'image') {

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

        }
      })

    }
  }

  /////////////////
  // function for data is ran.
  ////////////////
  monthDataRequest(today.getDate())

  // jquery closing bracket
})
