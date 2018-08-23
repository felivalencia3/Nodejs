exports.nowDate = function() {
    var a = new Date("2003-9-19");
    var b = new Date();
    var dif = (b - a)/1000;
    return dif
}