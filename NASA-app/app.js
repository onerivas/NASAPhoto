$(() => {
  let today = new Date()
  console.log(today);
  // console.log(date);


  let newDayOfMonth = () => {
    for (i = 1; i < 30; i++) {
      today.getDate() - i;
    }
  }

  let dateRequest = () => {
    for (i = 1; i < 30; i++) {
      `https://api.nasa.gov/planetary/apod?api_key=czm8n20NzhRSk6GRW6zD1u7FflGU4VqwyoJohXDp&date=
    ${today.getFullYear()}-${today.getMonth()+1}-${newDayOfMonth}`
    }
  }
  newDayOfMonth()
console.log(dateRequest());

  let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`





  $.ajax({
      url: `https://api.nasa.gov/planetary/apod?api_key=czm8n20NzhRSk6GRW6zD1u7FflGU4VqwyoJohXDp&date=${date}`

    })

    .then((data) => {
      const imageUrl = data.url
      for (i = 0; i < 20; i++) {

        const $spaceImg = $('<div>')
          .text(data.title)
          .addClass('space-image')
          .css('background-image', `url(${imageUrl})`)
          .appendTo('.container')
        console.log(data.url);
      }

      console.log(data);

    })





})
