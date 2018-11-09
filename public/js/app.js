$(document).ready(function () {
  
  // Users functions
  $("#btnListUsers").click(function () {
    listUsers();
  });

  $("#btnCheckGroupMembership").click( function () {
    window.location.assign('/users/checkGroupMembership');
  });

  $('#formCheckGroupMembership').submit( function(e) {
      e.preventDefault();
      var userName = $('#userName').val();
      var groupName = $('#groupName').val();
      //var postData = $('#formCheckGroupMembership').serialize();
      var postData = '{"userName": "' + userName + '", "groupName": "' + groupName + '"}'
      console.log(postData);
      checkGroupMembership(postData);
  });

  // Groups functions
  $("#btnListGroups").click(function () {
    listGroups();
  });


});

// Users functions
function listUsers() {
  $("#results").hide();
  $.getJSON("/api/v1/listUsers", function (data) {
    var usersHtml = [];
    $.each(data.message, function (key, user) {
      var username = user.sAMAccountName;
      usersHtml.push('<button id="btnUserDetails" class="btn btn-outline-success my-2 btn-block" type="submit" onclick="userDetails(\'' + username + '\')">' + username + '</button>');
    });
    $("#results").html(usersHtml);
  });
  $("#results").show();
}

function userDetails(username) {
  $("#results").hide();
  $.getJSON("/api/v1/listUsers/" + username, function (data) {
    var rows = [];
    $.each(data, function (key, user) {
      if( user.sAMAccountName == undefined ) {
        return true;
      };
      var username = user.sAMAccountName;
      var cn = user.cn;
      var description = user.description;
      var whenCreated = user.whenCreated;
      rows.push('\
      <tr>\
        <td>' + username + '</td>\
        <td>' + cn + '</td>\
        <td>' + description + '</td>\
        <td>' + whenCreated + '</td>\
      </tr>');
    });

    $("#results").html('\
      <table class="table">\
        <thead>\
          <tr>\
            <th scope="col">User Name</th>\
            <th scope="col">Name</th>\
            <th scope="col">Description</th>\
            <th scope="col">Created</th>\
          </tr>\
        </thead>\
        <tbody>' + rows + '</tbody>\
      </table>');
  });
  $("#results").show();
}

function checkGroupMembership(postData) {
  $("#results").hide();
  //var postData = '{"userName": "mross", "groupName": "Administrators"}';
  var jsonData = JSON.parse(postData);
  var result;
  $.post('/api/v1/checkGroupMembership', jsonData, function(res) {    
    $.each(res, function (key, val) {
      if (res.message == false) {
        result = '<h3>False</h3>';
      } else {
        result = '<h3>True</h3>';
      }
    });
    console.log(result);
    $("#results").html(result);
  }, 'json');
  $("#results").show();
}

// Groups functions
function listGroups() {
  $("#results").hide();
  $.getJSON("/api/v1/listGroups", function (data) {
    var groupsHtml = [];
    $.each(data.message, function (key, group) {
      var groupname = group.cn;
      groupsHtml.push('<button id="btnGroupDetails" class="btn btn-outline-success my-2 btn-block" type="submit" onclick="groupDetails(\'' + groupname + '\')">' + groupname + '</button>');
    });
    $("#results").html(groupsHtml);
  });
  $("#results").show();
}

function groupDetails(groupname) {
  $("#results").hide();
  $.getJSON("/api/v1/listGroups/" + groupname, function (data) {
    var rows = [];
    $.each(data, function (key, group) {
      if( group.cn == undefined ) {
        return true;
      };
      var groupname = group.cn;
      var description = group.description;
      rows.push('\
      <tr>\
        <td>' + groupname + '</td>\
        <td>' + description + '</td>\
      </tr>');
    });

    $("#results").html('\
      <table class="table">\
        <thead>\
          <tr>\
            <th scope="col">Group Name</th>\
            <th scope="col">Description</th>\
          </tr>\
        </thead>\
        <tbody>' + rows + '</tbody>\
      </table>');
  });
  $("#results").show();
}
