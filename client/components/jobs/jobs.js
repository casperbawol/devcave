//
//Template.jobs.helpers({
//    jobItem: function(jobCat){
//       HTTP.get( "http://www.authenticjobs.com/api/?api_key=ef748860564cae6607b1905ddb9c95d6&method=aj.types.getlist",
//                 {data: {some: "json", stuff: 1}},
//
//          function (error, result) {
//            if (!error) {
//             console.log(result);
//            }
//          });
//
//   }
//
//
//
//
//
//});

//
//Meteor.http.call("GET", "http://www.authenticjobs.com/api/?api_key=ef748860564cae6607b1905ddb9c95d6&method=aj.types.getlist", function (err, result){
//    jobsList = result.content;
//    console.log(jobsList);
//})


//Template.jobs.helpers({
//    jobsList: function(){
//        var link = ' http://www.authenticjobs.com/api/?api_key=ef748860564cae6607b1905ddb9c95d6&method=aj.types.getlist';
//
//      HTTP.call("GET", link,
//          {data: {some: "json", stuff: 1}},
//          function (error, result) {
//            if (!error) {
//              return Session.set('jobsList', true);
//            }
//          });
//    }
//
//
//});

Template.jobs.onRendered(function () {
    Session.set('category', 2);

    var category = Session.get('category');

    Meteor.call('getJobs', 1, 20, category, function (error, result) {
        var data = result;
        var respond = JSON.parse(data);
        if (!error) {
            Session.set('apires', respond);
        }
    });


});

Template.jobs.events({

    "click .category": function (event, template) {
        event.preventDefault();
        var cat = event.currentTarget.getAttribute("data-category");
        var catId = Session.set('catId', cat);
        var category = Session.get('category');
        Meteor.call('getJobs', Session.get('catId'), 20, category, function (error, result) {
            var data = result;
            var respond = JSON.parse(data);
            if (!error) {


                Session.set('apires', respond);
            }
        });

    }

    ,

    "click .skill": function (event, template) {
        var skill = event.currentTarget.getAttribute("data-skill");
        event.preventDefault();

        var category = Session.set('category', skill);
        Meteor.call('getJobs', Session.get('catId'), 20, Session.get('category'), function (error, result) {
            var data = result;
            var respond = JSON.parse(data);
            if (!error) {


                Session.set('apires', respond);
            }
        });

    }

});


Template.jobs.helpers({
    showJobs: function () {
        var data = Session.get('apires');

        return data;
    }



});




//Template.jobs.helpers({
//    showJobs: function(){
//            Meteor.call('getJobs', function(error,result){
//                var data = result;
////                var respond = JSON.parse(data);
//                if(!error){
//
//                    console.log(data);
//                    return JSON.parse(data).showJobs;
//                }
//            });
//    },
//
//    authjobs: function(){
//        return Session.get('authjobs');
//
//    }
//
//
//
//});
