

let main = (month, day, year) => {
    /*let month = 5;
    let day = 11;
    let year = 1991;*/

    let target = {};

    // subroutine 1
    let s = ((year/4) - Math.floor(year/4)) == 0 ? 1 : 0;
    let d = year - 1;
    let h = month - 1;

    let e = Math.floor(year/4);
    let f = d - e;
    let g = (365*f) + (366*e);

    console.log(e);
    console.log(f);
    console.log(g);
    
    let hf = [[0, 0], [1, 31], [2, 59], [3, 90], [4, 120], [5, 151], [6, 181], [7, 212], [8, 243], [9, 273], [10, 304], [11, 334]];

    let i = hf[h][1] + s;

    // seed value
    let ne = day + g + i;

    console.log(ne);

    // calculate day
    target.day = ne - (Math.floor(ne/7) * 7);

    console.log(target.day);

    // subroutine 2
    let nh = ne - 227028;
    let a = Math.floor(nh / 10631)

    let b = a * 30;
    let c = a * 10631;

    let x = nh - c;

    let lf = [[354, 1, 0], [709, 2, 354], [1063, 3, 709], [1417, 4, 1063], [1772, 5, 1417], [2126, 6, 1772], [2480, 7, 2126], [2835, 8, 2480],
                [3189, 9, 2835], [3544, 10, 3189], [3898, 11, 3544], [4252, 12, 3898], [4607, 13, 4252], [4961, 14, 4607], [5315, 15, 4961],
                [5670, 16, 5315], [6024, 17, 5670], [6378, 18, 6024], [6733, 19, 6378], [7087, 20, 6733], [7442, 21, 7087], [7796, 22, 7442],
                [8150, 23, 7796], [8505, 24, 8150], [8859, 25, 8505], [9213, 26, 8859], [9568, 27, 9213], [9922, 28, 9568], [10277, 29, 9922],
                [999999999, 30, 10277]
            ];
    
    var y = 0;
    var z = 0;

    for (var m = 0; m < lf.length; m++) {
        if (z < lf[m][0]) {
            y = lf[m][1];
            z = lf[m][2];
            break;
        }
    }
    
    let k = b + y;
    let l = x - z;

    let rf = [[30, 'Moharram', 0], [59, 'Safar', 30], [89, 'Rabi al Awal', 59], [118, 'Rabi al Akhar', 89], [148, 'Jamad ul Awal', 118],
                [177, 'Jamad ul Akhar', 148], [207, 'Rajab', 177], [236, 'Shaban', 207], [266, 'Ramadaan', 236], [295, 'Shawal', 266],
                [325, 'Zilqad', 295], [355, 'Zilhajj', 325]];

    var r = 0;

    for (var m = 0; m < rf.length; m++) {
        if (l < rf[m][0]) {
            r = rf[m][2];
            target.month = rf[m][1];
            break;
        }
    }

    let p = l - r;
    let q = k;

    /*console.log(p);
    console.log(q);

    console.log(target);*/
}

//main(5, 11, 1991);
main(10, 16, 1992);

/*

let a = 5;
let b = 11;
let c = 1991;

let d = c - 1;
let e = Math.floor(d/4);
let f = d - e;
let g = (365 * f)+(366 * e);
let h = a - 1;

let s = 0;

let i = 120 + s;

let ne = b + g + i;

let n1 = ne;
let o1 = n1 - (Math.floor(n1/7) * 7);

let u = c - (Math.floor(c/30) * 30);

let d2 = c - 1;
let e2 = d2/30;
let f2 = Math.floor(e2) * 30;
let g2 = d2 - f2;
let h2 = (f2/30) * 10631;
let i2 = 3544;
let j2 = a - 1;
let k2 = 266;
let nh2 = h2 + i2 + k2 + b;

let nh = ne - 227028;

let d3 = nh / 10631;
let e3 = Math.floor(d3);
let f3 = e3 * 30;
let g3 = e3 * 10631;
let h3 = nh - g3;
let i3 = 1;
let j3 = 0;
let k3 = f3 + i3;
let l3 = h3 - j3;

let MONTH = 'Shawal'
let r3 = 266;
let p3 = l3 - r3;
let q3 = k3;

console.log(o1);
console.log(MONTH);
console.log(p3);
console.log(q3);

*/

