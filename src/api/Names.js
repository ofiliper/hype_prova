const name = ["Armário", "Navio", "Mala", "Base", "Hidroavião", "Revista", "Carretel", "Minissaia", "Tamborim",
    "Andador", "Geladeira", "Estátua", "Rolo", "Crachá", "Peneira", "Bafômetro", "Desentupidor",
    "Guarda-chuva", "Espanador", "Escudo", "Raquete", "Vaso sanitário", "Lancheira", "Cofre",
    "Helióstato", "Medalha", "Foguete", "Lata", "Sintetizador", "Grampo", "Bucha", "Catraca",
    "Alfinete", "Caneca", "Fita", "Moeda", "Gel", "Maquete", "Interfone", "Gaveta", "Helicóptero",
    "Vela de cera", "Quimono", "Necessaire", "Machado", "Tecido", "Vareta de freio", "Obra de arte",
    "Canga"]

const adverbs = ["prepotente", "valioso", "legítimo", "desleixado", "Natural", "inteligente", "disciplinado",
    "louvável", "amargurado", "honesto", "odioso", "vergonhoso", "horroroso", "magnífico", "gordo",
    "romântico", "sublime", "mesquinho", "injusto", "medroso", "otário", "quente", "intenso", "Sábio",
    "zeloso", "desapegado", "faceiro", "companheiro", "empenhado", "espantoso", "traidor",
    "perfeccionista", "Qualificado", "feio", "tolerante", "orgulhoso", "ignorante", "lutador", "desejado",
    "exigente", "nostálgico", "próspero", "compreensivo", "excelente", "estourado", "malvado",
    "windsurfista", "falso", "melhor", "terno"]

const nameGenerator = (element) => {

    return element[Math.floor(Math.random() * element.length)]

}

const products = localStorage.getItem("products");

const getProducts = async () => {
    let response = await fetch(`https://picsum.photos/v2/list?page=${Math.round(Math.random() * 10)}`)
    let json = await response.json();
    return setProducts(json);
}


const setProducts = json => {
    const productList = [];

    fetch(`https://baconipsum.com/api/?callback=?paras=30`)
        .then(res => res.json())
        .then(res => {

            json.forEach((element, index) => {




                if (index < 12) {

                    let nameLength = nameGenerator(name);
                    let descrLength = res[0].substr(Math.random() * 50, Math.random() * 200);

                    let productPrice = 10 + nameLength.length * ((500 - descrLength.length) / (3 - nameLength.length))

                    // console.log(Math.abs(productPrice))
                    let el = {
                        id: index,
                        name: `${nameLength} ${nameGenerator(adverbs)}`,
                        price: Math.abs(productPrice) === null || Math.abs(productPrice) == Infinity ? 768.55 : Number(Math.abs(productPrice)).toFixed(2),
                        description: descrLength,
                        img: element.download_url,
                    };
                    productList.push(el)
                }
            });
            localStorage.setItem("products", JSON.stringify(productList));
            return productList;

        })


}

if (products == null || products.length <= 20) {

    getProducts();

}

export default getProducts;