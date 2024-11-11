const searchButton = document.getElementById("searchButton");
const cepInput = document.getElementById("cepInput");
const output = document.getElementById("output");

const fetchCepData = async (cep) => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) throw new Error("Erro na consulta do CEP");
        const data = await response.json();
        if (data.erro) throw new Error("CEP não encontrado");

        output.innerHTML = `
            <strong>Logradouro:</strong> ${data.logradouro || "Não disponível"}<br>
            <strong>Bairro:</strong> ${data.bairro || "Não disponível"}<br>
            <strong>Cidade:</strong> ${data.localidade || "Não disponível"}<br>
            <strong>Estado:</strong> ${data.uf || "Não disponível"}
        `;
    } catch (error) {
        output.innerHTML = `<span style="color: red;">${error.message}</span>`;
    }
};

searchButton.addEventListener("click", () => {
    const cep = cepInput.value.trim();
    
    if (/^\d{8}$/.test(cep)) {
        output.innerHTML = "Carregando...";
        fetchCepData(cep);
    } else {
        output.innerHTML = `<span style="color: red;">Por favor, insira um CEP válido com 8 dígitos.</span>`;
    }
});
