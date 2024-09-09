function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = '<p class="item-resultado">Digite o nome de um herói no campo de busca!</p>';
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = "";
  let titulo = "";
  let descricao = "";

  // Itera sobre cada dado da pesquisa
  for (let dado of dados) {
    titulo = dado.localized_name.toLowerCase();
    descricao = dado.attack_type.toLowerCase();
    // se dado.titulo includes campoPesquisa, faça...
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      // Cria o HTML para cada resultado, formatando o nome, tipo de ataque e link
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.localized_name}</a>
          </h2>
          <p class="descricao-meta">${dado.attack_type}</p>
          <a href="https://dota2.fandom.com/pt/wiki/${dado.localized_name}" target="_blank">Mais informações</a>
        </div>
      `;
    }
    if (!resultados) {
      resultados = '<p class="item-resultado">Nenhum herói foi encontrado!</p>'
    }
  }


    
  // Insere os resultados formatados na seção HTML
  section.innerHTML = resultados;
}