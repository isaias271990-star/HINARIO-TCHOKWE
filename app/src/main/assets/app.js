  $('fonte-menos').disabled = tamanho <= TAM_MIN;
}
$('btn-tema').onclick = function () {
  tema = tema === 'auto' ? 'escuro' : 'auto';
  gravar('tema', tema); aplicarTema();
};
$('fonte-menos').onclick = function () {
$('fonte-mais').onclick = function () {
