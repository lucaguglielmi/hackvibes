$(document).ready(function(){

  $("#save").on('click', function() {
      console.log('okkkk');

      // need to add role
      var nickname = $('#nickname').val();
      var other_specifics = $('#other_specifics').val();
      var developer_kind = $('#developer_kind').val();
      var developer_tech = $('#developer_tech').val();
      var designer_type = $('#designer_type').val();
      var designer_work = $('#designer_work').val();
      var marketing_entrepreneur = $('#marketing_entrepreneur').val();
      var marketing_moment = $('#marketing_moment').val();
      var funfact = $('#funfact').val();
      var idea = $('#idea').val();
      var question = $('#question').val();
      var email = $('#email').val();

      var isComplicated = $('#cb_complicated').is(":checked");
      var isMarketing = $('#cb_marketing').is(":checked");
      var isDesigner = $('#cb_designer').is(":checked");
      var isDeveloper = $('#cb_developer').is(":checked");

      // check if nickname exists

      var formData = {
        nickname: nickname,
        isComplicated: isComplicated.toString(),
        isMarketing: isMarketing.toString(),
        isDesigner: isDesigner.toString(),
        isDeveloper: isDeveloper.toString(),
        other_specifics: other_specifics,
        developer_kind: developer_kind,
        developer_tech: developer_tech,
        designer_type: designer_type,
        designer_work: designer_work,
        marketing_entrepreneur: marketing_entrepreneur,
        marketing_moment: marketing_moment,
        funfact: funfact,
        idea: idea,
        question: question,
        email: email
      };

      console.log(formData);

      $.ajax({
        url : 'https://hackvibes-server.herokuapp.com/register/',
        // url : 'http://127.0.0.1:8000/register/',
        type : 'POST',
        dataType:'json',
        data : JSON.stringify(formData),
        success : function(data) {
            console.log('Data: '+ data);
            console.log(data.status)
            // data.status = user-exists   ---> nickname already taken
            // data.status = saved         ---> saved to db
        },
        error : function(request,error)
        {
            console.log("Request: "+ JSON.stringify(request));
            console.log(JSON.stringify(request))
        }
    });

  })
});
