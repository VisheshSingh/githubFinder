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
                <img class="avatar thumbnail" src="${user.avatar_url}">
                <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
              </div>
              <div class="col-md-9">
              <span class="label label-default">Public repos: ${user.public_repos}</span>
              <span class="label label-primary">Public gists: ${user.public_gists}</span>
              <span class="label label-success">Followers: ${user.followers}</span>
              <span class="label label-info">Following: ${user.following}</span>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item"><strong>Company:</strong> ${user.company}</li>
                <li class="list-group-item"><strong>Website/blog:</strong> ${user.blog}</li>
                <li class="list-group-item"><strong>Location:</strong> ${user.location}</li>
                <li class="list-group-item"><strong>Member since:</strong> ${user.created_at}</li>
              </ul
              </div>
            </div>
          </div>
        </div>

      `)
    });
  });
});
