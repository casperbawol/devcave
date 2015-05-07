Meteor.startup(function () {


    // Method to get data from authentic jobs api
    Meteor.methods({


        getJobs: function (catId, pageN, skill) {
            this.unblock();
            var result = HTTP.get('http://www.authenticjobs.com/api/?api_key=ef748860564cae6607b1905ddb9c95d6&method=aj.jobs.search&perpage=' + pageN + '&type=' + catId + '&category=' + skill, {
                params: {
                    format: 'json'

                }
            });

            var respond = result.content;
            return respond;
            
            // respond into session variable
            Session.set('authjobs', respond);

        }
    });


    // create dummy project if theres none
    if (Projects.find().count() === 0) {


        // dummy project data
        var sampleProjects = [

            {

                username: 'CasperB',
                projectName: 'Modeling Agency web app',
                short: 'App for amateur models',
                github: 'https://github.com/username/project',
                description: 'Lorizzle shit shizzlin dizzle fo shizzle amet consectetuer adipiscing daahng dawg. Ma nizzle sapien hizzle, ma nizzle own yo suscipit quizzle, gravida vizzle, you son of a bizzle. Pellentesque things tortizzle. Sizzle erizzle. Fusce izzle dolor dapibizzle shit phat bling bling. Maurizzle pellentesque fo et izzle. Crunk izzle tortizzle. Pellentesque shizzlin dizzle rhoncizzle nisi. In hac stuff gizzle dictumst. Crunk dapibizzle. Mofo tellizzle urna, pretium eu, mattis izzle, eleifend vitae, nunc. Check out this suscipit. Shizzle my nizzle crocodizzle semper velit sizzle phat.',
                roles: 'Front end developer',
                skills: ['html5', 'mean', 'meteor', 'aws'],
                time: 'September 2015',
                createdAt: '04/05/2015'




            },

            {

                username: 'CasperB',
                projectName: 'Agency website',
                short: 'Web design agency website',
                github: 'https://github.com/username/project',
                description: 'Lorizzle shit shizzlin dizzle fo shizzle amet consectetuer adipiscing daahng dawg. Ma nizzle sapien hizzle, ma nizzle own yo suscipit quizzle, gravida vizzle, you son of a bizzle. Pellentesque things tortizzle. Sizzle erizzle. Fusce izzle dolor dapibizzle shit phat bling bling. Maurizzle pellentesque fo et izzle. Crunk izzle tortizzle. Pellentesque shizzlin dizzle rhoncizzle nisi. In hac stuff gizzle dictumst. Crunk dapibizzle. Mofo tellizzle urna, pretium eu, mattis izzle, eleifend vitae, nunc. Check out this suscipit. Shizzle my nizzle crocodizzle semper velit sizzle phat.',
                roles: 'Front end developer',
                skills: ['css3', 'animations', 'photoshop'],
                time: 'June 2015',
                createdAt: '02/05/2015'


            }



        ];


        // loop over each sample project and insert into database
        _.each(sampleProjects, function (project) {
            Projects.insert(project);
        })

    }






});
