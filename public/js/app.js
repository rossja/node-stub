$(document).ready(function () {
  $('#msgSubmit').click(function (msg) {
    msg.preventDefault()
    var messageText = $('#msgText').val()
    console.log('sending %s to server...', messageText)
    $.post({
      url: '/echo',
      data: { messageText: messageText },
      success: function (data) {
        $('#msgData').css('visibility', 'visible')
        $('#msgData').html(data.message)
      },
      error: function (err) {
        console.log(err)
      }
    })
  })
})
