const cep = document.querySelector('#cep');
const cidade = document.querySelector('#cidade');
const rua = document.querySelector('#rua');

cep.addEventListener('change', () => {
    if (cep.value.length !== 8) {
        alert('CEP inválido.');
        return;
    }

    const pesquisa = fetch(`http://viacep.com.br/ws/${cep.value}/json/`);

    pesquisa.then(res => {
        if (!res.ok) {
            alert('Não foi possível consultar o CEP informado.');
            return;
        }

        const body = res.json();

        body.then(body => {
            if (!body.cidade && !body.logradouro) {
                alert('CEP não encontrado.');
                cidade.value = '';
                rua.value = '';
                return;
            }

            cidade.value = body.localidade;
            rua.value = body.logradouro;
        });
    });
});