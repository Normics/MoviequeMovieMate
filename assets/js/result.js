var result = new Vue({
    el: '#result',
    mounted: function() {
        $('#loading').show();
        $('#container').hide();
    },
    methods: setTimeout(function() {
        $('#loading').hide();
        $('#container').show();
    }, 4000)
});