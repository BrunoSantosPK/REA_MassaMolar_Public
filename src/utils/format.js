export default function formatar(numero) {
    return numero.toFixed(4).replace(".", ",");
}

export function porcentagem(numero) {
    return (numero * 100).toFixed(2).replace(".", ",") + " %";
}

export function massa(numero) {
    return numero.toFixed(4).replace(".", ",") + " g/mol";
}

export function distribuicao(z) {
    const subniveis = ["1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", "4f", "5d", "6p", "7s", "5f", "6d", "7p"];
    const max = [2, 2, 6, 2, 6, 2, 10, 6, 2, 10, 6, 2, 14, 10, 6, 2, 14, 10, 6];
    const result = [];

    // Faz a distribuição de elétrons nos subníveis
    let contador = z;
    for(let i = 0; i < max.length; i++) {
        if(contador == 0)
            break;
        
        if(contador >= max[i]) {
            result.push(max[i]);
            contador -= max[i];
        } else {
            result.push(contador);
            contador -= contador;
        }
    }

    // Monta a string
    let dist = "";
    for(let i = 0; i < result.length; i++) {
        dist += `${subniveis[i]}${result[i]} `;
    }

    return dist;
}