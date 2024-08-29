
fetch('dados.json').then(resposta => resposta.json()).then(corpo =>{
    console.log(corpo)

    document.getElementById('imagem').innerHTML = corpo.image;
    document.getElementById('nome').innerHTML = corpo.name;
    document.getElementById('cor').innerHTML = corpo.modelo;
    document.getElementById('preco').innerHTML = corpo.price;

    document.getElementById('imagem2').innerHTML = corpo.image2;
    document.getElementById('nome2').innerHTML = corpo.name2;
    document.getElementById('cor2').innerHTML = corpo.modelo2;
    document.getElementById('preco2').innerHTML = corpo.price2;
})