
var end = new Date('05/26/2017 11:59 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'Time to get married!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = days + ' days until the big day';
        /*document.getElementById('countdown').innerHTML += hours + ' hours ';
        document.getElementById('countdown').innerHTML += minutes + ' minutes ';
        document.getElementById('countdown').innerHTML += seconds + ' seconds';*/
    }

    timer = setInterval(showRemaining, 1000);