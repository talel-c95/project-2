document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            name: "Erayba bio smooth smoothing 2-PHASE 200ml",
            img: "images/product1.jpg",
            oldPrice: "$50",
            newPrice: "$35",
        },
        {
            name: "Touche d'Or Henné neutre 200 g",
            img: "images/product2.jpg",
            oldPrice: "$40",
            newPrice: "$30",
        },
        {
            name: "Cosmaline repair 9 crème hydratante sans rinçage 250ml",
            img: "images/product3.jpg",
            oldPrice: "$60",
            newPrice: "$45",
        },
        {
            name: "Cosmaline oh my curls crème sans rinçage légère 250ml",
            img: "images/product4.jpg",
            oldPrice: "$70",
            newPrice: "$50",
        },
        {
            name: "Phytovolume spray brushing volumateur 150ml - Phyto",
            img: "images/product5.jpg",
            oldPrice: "$80",
            newPrice: "$60",
        },
        {
            name: "Gradual smoothing mist Bye Bye frizz 200ml - Cadiveu",
            img: "images/product6.jpg",
            oldPrice: "$20",
            newPrice: "$15",
        },
        {
            name: "Byphasse mousse définition boucles 300ml",
            img: "images/product7.jpg",
            oldPrice: "$55",
            newPrice: "$40",
        },
        {
            name: "Gel aloe vera 100% naturel 170 gr - bio - touche d'or",
            img: "images/product8.jpg",
            oldPrice: "$120",
            newPrice: "$100",
        },
        {
            name: "Crème coiffante plissée instantanée o'solemio 125ml -diego dalla palma",
            img: "images/product9.jpg",
            oldPrice: "$65",
            newPrice: "$50",
        },
        {
            name: "Keratine active split ends 150ml -h.zone",
            img: "images/product10.jpg",
            oldPrice: "$90",
            newPrice: "$70",
        },
        {
            name: "Phyto 7 crème de jour hydratante aux 7 plantes cheveux secs 50ml- phyto",
            img: "images/product11.jpg",
            oldPrice: "$30",
            newPrice: "$25",
        },
        {
            name: "K-REINE Pack Soin capillaire Protéine Kératine 4-5-6 avec Brosse",
            img: "images/product12.jpg",
            oldPrice: "$100",
            newPrice: "$85",
        },
        {
            name: "Vernis couleur miracle gel n°110 14.7 ml - sally hansen",
            img: "images/product13.jpg",
            oldPrice: "$40",
            newPrice: "$30",
        },
        {
            name: "Lip shadow mat poudre sensuel n°006- bellaoggi",
            img: "images/product14.jpg",
            oldPrice: "$50",
            newPrice: "$45",
        },
        {
            name: "I brow liner n°01 blonde blonde -bellaoggi",
            img: "images/product15.jpg",
            oldPrice: "$200",
            newPrice: "$150",
        },
        {
            name: "Lot de 6 embouts de ponceuse à ongles en acier inoxydable",
            img: "images/product16.jpg",
            oldPrice: "$110",
            newPrice: "$95",
        },
        {
            name: "Provocalips 16h kissproof lip colour n°780 - rimmel london",
            img: "images/product17.jpg",
            oldPrice: "$60",
            newPrice: "$50",
        },
        {
            name: "Topface Fondation instyle perfect coverage pt463-005",
            img: "images/product18.jpg",
            oldPrice: "$75",
            newPrice: "$65",
        },
        {
            name: "Brillant à lèvres Supernova Volume PT209 011 - Topface",
            img: "images/product19.jpg",
            oldPrice: "$130",
            newPrice: "$110",
        },
        {
            name: "Pack duo vernis couleur miracle gel & top coat n°470 - sally hansen",
            img: "images/product20.jpg",
            oldPrice: "$85",
            newPrice: "$70",
        },
        {
            name: "Coupe-capsule faux-ongles professionnel",
            img: "images/product21.jpg",
            oldPrice: "$45",
            newPrice: "$35",
        },
        {
            name: "Rouge a lèvre instyle mat pt155 011 - Topface",
            img: "images/product22.jpg",
            oldPrice: "$95",
            newPrice: "$80",
        },
        {
            name: "The only one lipstick n°610 - rimmel london",
            img: "images/product23.jpg",
            oldPrice: "$55",
            newPrice: "$45",
        },
        {
            name: "Coffret 2 brosse nettoyante & éponge rose -ruby face",
            img: "images/product24.jpg",
            oldPrice: "$65",
            newPrice: "$55",
        },
        {
            name: "Faux ongles impress Press-on Pedicure Nails IMT22X - Enjoy Today - kiss new york",
            img: "images/product25.jpg",
            oldPrice: "$120",
            newPrice: "$100",
        },
        {
            name: "Stylo Lipliner waterproof PT618. 009 - Topface",
            img: "images/product26.jpg",
            oldPrice: "$85",
            newPrice: "$70",
        },
        {
            name: "Focus point perfect gleam lipgloss pt207- 113 -topface",
            img: "images/product27.jpg",
            oldPrice: "$140",
            newPrice: "$120",
        },
        {
            name: "Colle faux cils permanante blanc 3.8gr cc3003 - clarissa",
            img: "images/product28.jpg",
            oldPrice: "$160",
            newPrice: "$140",
        },
    ];
    const productGrid = document.getElementById("productGrid");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    let total = 0;

    if (!productGrid) {
        console.error("Product grid container not found!");
        return;
    }

    products.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">
                <span class="old-price">${product.oldPrice}</span> 
                <span class="new-price">${product.newPrice}</span>
            </p>
            <button class="btn" data-index="${index}">Buy Now</button>
        `;

        productGrid.appendChild(productCard);
    });

    productGrid.addEventListener("click", (event) => {
        if (!event.target.classList.contains("btn")) return;
    
        const index = event.target.dataset.index;
        const product = products[index];
    
        cartItems.innerHTML += `<li>${product.name} - ${product.newPrice}</li>`;
    
        total += parseFloat(product.newPrice.slice(1)); 
        cartTotal.textContent = total.toFixed(2);
    });  
    
});
const restart=document.querySelector(".btn")
restart.addEventListener("click",function(){
    window.location.href = "index.html"
})
