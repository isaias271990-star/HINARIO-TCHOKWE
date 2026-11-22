  if ($('fonte-menos')) $('fonte-menos').disabled = tamanho <= TAM_MIN;
  if ($('fonte-mais')) $('fonte-mais').disabled = tamanho >= TAM_MAX;
}
if ($('btn-tema')) $('btn-tema').onclick = function () {
  tema = tema === 'auto' ? 'escuro' : 'auto';
  gravar('tema', tema); aplicarTema();
};
if ($('fonte-menos')) $('fonte-menos').onclick = function () {
if ($('fonte-mais')) $('fonte-mais').onclick = function () {
