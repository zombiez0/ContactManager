require(["require-config"], function () {

    require(["jquery", "underscore", "backbone", "handlebars", "marionette", "common", "jqueryui", "jScrollPane", "bootstrap"],
     function ($, _, Backbone, Handlebars, Marionette, App, ui) {

        


        init = function () {      /* --- */

            var contactManager = new Backbone.Marionette.Application();
            contactManager.start();


            $("#birth-date-sltr").datepicker({
                dateFormat: 'dd-mm-yy', 
                showOn: "button",
                buttonImage: "../assets/img/calendar-icon.png",
                buttonImageOnly: true
            });

            $('.contact-list-view-left').jScrollPane();
          
        }();

    });

})();