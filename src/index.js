module.exports = function reverse (n) {

    let res = '';

    res = (n + '').split('');
    res = res.reverse();
    res = res.join('');
    res = parseInt(res);

    return res;
}


/*
const n = -12345;
console.log(n);
const res = module.exports(n);
console.log(res);
*/