    let array = [5,3,7,4,2,6,3,2]
    let len = array.length;
    for (let i = 0; i < len; i++)
    {
        for (let j = i + 1; j < len; j++)
         {
            if (array[i] < array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            
        }
    }
    console.log(array)
