$(document).ready(function(){
  $('#searchUser').on('keyup',function(e){
    let username = e.target.value;

    //Make request to github
    $.ajax({
      url:'https://api.github.com/users/'+username,
      data:{
        client_id:'18fe488831d451f71b6d',
        client_secret:'00c3f9b1543ca6618ebcc614dc2ba3f1e5f2667b'
      }
    }).done(function(user){
      $('#profile').html(`
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">${user.name}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-3">
                <img class="thumbnail" src="${user.avatar_url}">
              </div>
              <div class="col-md-9">

              </div>
            </div>
          </div>
        </div>

      `)
    });
  });
});
