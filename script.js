// Aguarda o DOM (estrutura do HTML) carregar completamente
document.addEventListener("DOMContentLoaded", () => {
  const leadForm = document.getElementById("lead-form");
  const successMessage = document.getElementById("success-message");

  // Escuta o evento de submit do formulário
  leadForm.addEventListener("submit", (event) => {
    // 1. Previne o comportamento padrão (recarregar a página)
    event.preventDefault();

    // 2. Captura os dados digitados pelo usuário
    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById(email).value;

    // 3. Cria o objeto "Lead" que simula o que iria para o banco de dados
    const newLoad = {
      name: nameInput,
      email: emailInput,
      date: new Date().toISOString()
    };

    // 4. Salva temporariamente no localStorage
    // Captura se já existem leads cadastrados antes ou inicia um array vazio
    const existingLeads = JSON.parse(localStorage.getItem("leads")) || [];
    existingLeads.push(newLead);

    // Salva o array atualizado de volta no localStorage em formato string
    localStorage.setItem("leads", JSON.stringify(existingLeads));

    //Log no console para mostrar que os dados foram manipulados
    console.log("Simulação de envio de dados para API bem sucedida:", newLead);

    // 5. Troca visual das telas (Esconde o formulário e mostra a mensagem de sucesso)
    leadForm.classList.add("hidden");
    successMessage.classList.remove("hidden");
  });
});