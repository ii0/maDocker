/*global dockerApp, Backbone*/

dockerApp.Routers = dockerApp.Routers || {};

(function () {
    'use strict';

    dockerApp.Routers.MainRouter = Backbone.Router.extend({

        routes: {
            "dockerps": "dockerps",
            "dockerimages": "dockerImages",
            "": "dockerHome",
        },

        dockerHome: function() {
            console.log('dockerhome');
            var homeView = new dockerApp.Views.HomeView();
            $('.app-container').html(homeView.render().el);
        },

        dockerps: function () {
            console.log(dockerApp);
            var list = new dockerApp.Collections.ContainerCollection();
            var dpsView = new dockerApp.Views.DockerpsView({
                collection: list,
            });
            $('.app-container').html(dpsView.render().el);
        },

        dockerImages: function () {
            var list = new dockerApp.Collections.ImagesCollection();
            var imageView = new dockerApp.Views.ImageView({
                collection: list,
            });
            $('.app-container').html(imageView.render().el);
        }
    });

})();
