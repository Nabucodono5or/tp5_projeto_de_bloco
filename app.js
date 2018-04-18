(function () {
  let c1 = app.getComponente('c1');
  let $ctrl = c1.$ctrl;

  function inverteString(string){
    let resultado = '';

    if(string){
      for(let i = string.length -1; i >= 0; i--){
        resultado += string[i];
      }
    }

    return resultado;
  }


  $ctrl.onClickResultado = function(){
    console.log('clicado');

    let resposta = inverteString($('#InpPalavra').val());
    $('#resultado').text(resposta);
}
})();
