$(function() {
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '01/2018',
            a: 3326,
            b: 2133
        }, {
            y: '02/2018',
            a: 3325,
            b: 2334
        }, {
            y: '03/2018',
            a: 3324,
            b: 4217
        }, {
            y: '04/2018',
            a: 3323,
            b: 5371
        }, {
            y: '05/2018',
            a: 3322,
            b: 8323
        }, {
            y: '06/2018',
            a: 10321,
            b: 10512
        }, {
            y: '07/2018',
            a: 10320,
            b: 15354
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Khách', 'Người Dùng'],
        hideHover: 'auto',
        resize: true
    });
    
});
