const iniciar = () => {
    let imagens = [
        'pexels-mo-eid-1268975-11592813.jpg',
        'pexels-mo-eid-1268975-10377281.jpg'
    ];
    let indiceAtual = 0;

    const clickTroca = (evento) => {
        evento.preventDefault();
        let imag2 = document.getElementById('rosinha');
        indiceAtual = (indiceAtual + 1) % imagens.length; 
        imag2.src = imagens[indiceAtual]; 
    };

    document.getElementById('troca').addEventListener('click', clickTroca);
};

document.addEventListener('DOMContentLoaded', iniciar);