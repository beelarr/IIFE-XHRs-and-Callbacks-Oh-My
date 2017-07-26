/**
 * Created by beelarr on 7/24/17.
 */
var Predator = (function () {
    let carnivores = [];
    let herbivores = [];

    return {
        loadCarnivores: function (callbackToInvoke) {
            var loader = new XMLHttpRequest();
            loader.addEventListener("load", function() {
                carnivores = JSON.parse(this.responseText);
                showCarnivores(carnivores);
            });
            loader.open('GET', 'carnivores.JSON');
            loader.send();
        },

        loadHerbivores: function (callbackToInvoke) {
            var herbivores_request = new XMLHttpRequest();

            herbivores_request.addEventListener('load', function() {
                herbivores = JSON.parse(this.responseText);
                showHerbivores(herbivores);
            });
            herbivores_request.open('GET', 'herbivores.JSON');
            herbivores_request.send();
        }
    }
}
)();
