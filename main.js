$(document).ready(function() {
    // Manipula o envio do formulário
    $("#formTarefa").submit(function(event) {
        event.preventDefault();

        // Obtém o valor do campo de texto
        var nomeTarefa = $("#nomeTarefa").val();

        // Adiciona uma nova tarefa à lista
        adicionarTarefa(nomeTarefa);

        // Limpa o campo de texto
        $("#nomeTarefa").val("");
    });

    // Manipula o clique nos itens da lista
    $(document).on("click", "#listaTarefas li", function() {
        // Adiciona ou remove o efeito de linha através do CSS
        $(this).toggleClass("concluida");

        // Adiciona ou remove um efeito de grifar através do CSS
        $(this).toggleClass("grifada");
    });

    // Função para adicionar uma tarefa à lista
    function adicionarTarefa(nomeTarefa) {
        // Cria um novo elemento <li> e adiciona à lista
        $("#listaTarefas").append("<li>" + nomeTarefa + "</li>");
    }
});
