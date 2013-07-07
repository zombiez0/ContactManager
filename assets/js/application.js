require(["require-config"], function () {

    require(["jquery", "underscore", "backbone", "handlebars", "marionette", "common", "jqueryui",  "applayout", "appview", "appmodel", "appcollection", "approuter", "jScrollPane", "bootstrap"],
     function ($, _, Backbone, Handlebars, Marionette, App, ui) {


        var getRegionManager = function() {

            if(!App.Regions.RegionManager)
                App.Regions.RegionManager = new Marionette.RegionManager();
            return App.Regions.RegionManager;
        };

        var initializeRegions = function() {

            App.Regions.AppRegion = getRegionManager().addRegions({
                headerRegion : '#header',
                wrapperRegion : '#wrapper'

            });                
        
        };

          
        var init = (function() {

            App.MarionetteApp.ContactManager = new Backbone.Marionette.Application();
            
            //Create Regions
            initializeRegions();
            
            //Initialize the router  
            App.MarionetteApp.ContactManager.addInitializer(function(options){               
                new App.Router();         
            });

            App.MarionetteApp.ContactManager.on("initialize:after", function(){        
                if (Backbone.history)
                    Backbone.history.start();          
            });

            App.MarionetteApp.ContactManager.start();   /* Start the app */

        })();


        



        // init = function () {      /* --- */

        

        //     $("#birth-date-sltr").datepicker({
        //         dateFormat: 'dd-mm-yy', 
        //         showOn: "button",
        //         buttonImage: "../assets/img/calendar-icon.png",
        //         buttonImageOnly: true
        //     });

        //     $('.contact-list-view-left').jScrollPane();

        //     $('.item-row-contact-details-content').on('click', function() {
        //             $('#contact-modal').modal('show');
        //     });

            
          
        // }();

    });

})();