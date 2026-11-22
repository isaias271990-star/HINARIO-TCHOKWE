  if ($('fonte-menos')) if ($('fonte-menos')) $('fonte-menos').disabled = tamanho <= TAM_MIN;
}
if ($('btn-tema')) if ($('btn-tema')) $('btn-tema').onclick = function () {
  tema = tema === 'auto' ? 'escuro' : 'auto';
  gravar('tema', tema); aplicarTema();
};
if ($('fonte-menos')) if ($('fonte-menos')) $('fonte-menos').onclick = function () {
  tamanho = Math.max(TAM_MIN, tamanho - 2);
  gravar('tamanho', tamanho); aplicarTamanho();
};
if ($('fonte-mais')) if ($('fonte-mais')) $('fonte-mais').onclick = function () {
