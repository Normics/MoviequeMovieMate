var main = new Vue({
    el: '#main',
    data: {
        title: '나의 무비끄 영화메이트는?'
    },
    mounted: function() {
        $('#m1').show();
        $('#m2').hide();
        $('#m3').hide();
        $('#m4').hide();
        $('#m5').hide();
        $('#m6').hide();
        $('#m7').hide();
        $('#m8').hide();
    },
    methods: {
        next1: function() {
            setTimeout( function() {
            $('#m1').hide();
            $('#m2').show();
            $('#m3').hide();
            $('#m4').hide();
            $('#m5').hide();
            $('#m6').hide();
            $('#m7').hide();
            $('#m8').hide();
            }, 500)
        },
        next2: function() {
            setTimeout( function() {
                $('#m1').hide();
                $('#m2').hide();
                $('#m3').show();
                $('#m4').hide();
                $('#m5').hide();
                $('#m6').hide();
                $('#m7').hide();
                $('#m8').hide();
                }, 500)
        },
        next3: function() {
            setTimeout( function() {
                $('#m1').hide();
                $('#m2').hide();
                $('#m3').hide();
                $('#m4').show();
                $('#m5').hide();
                $('#m6').hide();
                $('#m7').hide();
                $('#m8').hide();
                }, 500)
        },
        next4: function() {
            setTimeout( function() {
                $('#m1').hide();
                $('#m2').hide();
                $('#m3').hide();
                $('#m4').hide();
                $('#m5').show();
                $('#m6').hide();
                $('#m7').hide();
                $('#m8').hide();
                }, 500)
        },
        next5: function() {
            setTimeout( function() {
                $('#m1').hide();
                $('#m2').hide();
                $('#m3').hide();
                $('#m4').hide();
                $('#m5').hide();
                $('#m6').show();
                $('#m7').hide();
                $('#m8').hide();
                }, 500)
        },
        next6: function() {
            setTimeout( function() {
                $('#m1').hide();
                $('#m2').hide();
                $('#m3').hide();
                $('#m4').hide();
                $('#m5').hide();
                $('#m6').hide();
                $('#m7').show();
                $('#m8').hide();
                }, 500)
        },
        next7: function() {
            setTimeout( function() {
                $('#m1').hide();
                $('#m2').hide();
                $('#m3').hide();
                $('#m4').hide();
                $('#m5').hide();
                $('#m6').hide();
                $('#m7').hide();
                $('#m8').show();
                }, 500)
        },
    }
});