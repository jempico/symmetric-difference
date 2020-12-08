function diffArray(arr1, arr2) {
    let result = [];
    //Creamos una función que compare cada elemento del primer array con los elementos del segundo array. Si el elemento del primer array no se incluye en el array2, éste se añade a result.
    
    function compare(array1, array2) {
    array1.forEach(function(element) {
      if (!array2.includes(element)) {
        result.push(element);
      }});
    }
    
    //Pasamos los arrays como argumentos de la función creada para comparar los elementos de los dos arrays y obtener el resultado de ambas comparaciones.
    
    compare(arr1, arr2);
    compare(arr2, arr1);
    
    return result;
      }
    
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);