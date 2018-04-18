(function () {
  function inverteString(string){
    let resultado = '';
    for(let i = string.length -1; i >= 0; i--){
      resultado += string[i];
    }

    return resultado;
  }

  let string = "rovaf rop rovaf";
  console.log(inverteString(string));

})();
