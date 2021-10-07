var fibonacci = function (n, arr) {
    if (arr == null) {
        arr = [1, 1];
    }
    if (n <= 0) {
        return arr;
    }
    else {
        var x = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(x);
        return fibonacci(n - 1, arr);
    }
};
console.log(fibonacci(10, null));
