
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
     waitOn: function() { return Meteor.subscribe('projects'); }
});

// route for homepage
Router.route('/', function () {
  this.render('home');
});


// route for projects list
Router.route('/projects', function () {
  this.render('projectsList');
},{name:'projects'});

// route for adding new project
Router.route('/newproject', function () {
  this.render('projectForm');
});

// route for each project
Router.route('/project/:_id', function () {
   this.render('projectPage', {data: function(){
       return Projects.findOne({_id: this.params._id});
   }
 });
});

// route for jobs
Router.route('/jobs', function () {
  this.render('jobs');
});
