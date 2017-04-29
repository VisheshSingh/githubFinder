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
      $.ajax({
        url:'https://api.github.com/users/'+username+'/repos',
        data:{
          client_id:'18fe488831d451f71b6d',
          client_secret:'00c3f9b1543ca6618ebcc614dc2ba3f1e5f2667b',
          sort: 'created: asc',
          per_page: 5
        }
      }).done(function(repos){
        $.each(repos, function(index, repo){
          $('#repos').append(`
            <div class="well">
              <div class="row">
                <div class="col-md-7">
                  <strong>${repo.name}</strong>: ${repo.description}
                </div>
                <div class="col-md-3">
                  <span class="label label-default">Forks: ${repo.forks_count}</span>
                  <span class="label label-primary">Gists: ${repo.watchers_count}</span>
                  <span class="label label-success">Stars: ${repo.stargazers_count}</span>
                </div>
                <div class="col-md-2">
                  <a href="${repo.html_url}" target="_blank" class="btn btn-default">Repo page</a>
                </div>
              </div>
            </div>
          `);
        });
      });
      $('#profile').html(`
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2 class="panel-title"><strong>${user.name}</strong></h2>
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
              </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 class="page-header">Latest repos</h2>
        <div id="repos"></div>

      `)
    });
  });
});
