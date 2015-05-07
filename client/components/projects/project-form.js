Template.projectForm.events({
    
    'submit form': function(event){
       var technologies =  $(".tags-input").tagsinput('items');
        var date = new Date();
       event.preventDefault();
        
        var newProject = {
            
                username:'CasperB',
                projectName: event.target.projectName.value,
                github: event.target.github.value,
                short: event.target.short.value,
                description: event.target.description.value,
                roles: event.target.roles.value,
                technologies: technologies,
                createdAt: date.toLocaleDateString()
                
                
            
                
            };
        
        Projects.insert(newProject);
        Router.go('/projects');
        
      
    }
    
});
