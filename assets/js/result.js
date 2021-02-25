var result = new Vue({
    el: '#result',
    data: {
        title: "나의 무비끄 영화메이트는?"
    },
    mounted: function() {
        $('#loading').show();
        $('#container').hide();
    },
    methods: setTimeout(function() {
        $('#loading').hide();
        $('#container').show();
    }, 4000)
});