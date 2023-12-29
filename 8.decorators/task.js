//Задача № 1
 function cachingDecoratorNew(func) {
   let cache = [];
   function wrapper(...args) {
     const hash = md5(args);
     let objectInCache = cache.find( item => item.hash === hash);
     if (objectInCache) {
       console.log(`Из кеша: ${objectInCache.value}`);
       return `Из кеша: ${objectInCache.value}`;
     }

     let result = func(...args);
     cache.push({"hash": hash, "value": result});
     if (cache.length > 5) {
       cache.shift();
     }
     console.log(`Вычисляем: ${result}`);
     return `Вычисляем: ${result}`;
   }
   return wrapper;
 }
//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeout;
    let count = 0;

    function debounced(...args) {
        debounced.allCount++;
        if (!timeout) {
            count++;
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
            timeout = null;
        }, delay);
    }

    Object.defineProperty(debounced, 'count', {
        get: function () {
            return count;
        }
    });

    debounced.allCount = 0;

    return debounced;
}