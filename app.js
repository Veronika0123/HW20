let num = +prompt('введите число');
result = 'простое'; 
  for (let i = 2; i < num-1; i++) {
    if (num % i === 0) {
      result = 'не простое';  // не простое где то остаток //простое везде остаток
    }
  }
 alert (result);