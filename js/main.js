let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

const renderRight = () => {
    let content = "";
    dataGlasses.forEach(data => {
        content += `
        <img id="${data.id}" class="col-4" src="${data.src}" alt="" style="cursor: pointer"> 
        `;
    });
    document.getElementById("vglassesList").innerHTML = content;
}; renderRight();


let imgs = document.querySelectorAll("img");

imgs.forEach((img, index) => {
    img.addEventListener("click", () => {
        let content1 = "";
        let content = "";
        let glasses = dataGlasses[index];
        content = ` <img id="${glasses.id}"  src="${glasses.virtualImg}" alt="" > `;
        content1 = ` <h5 style="margin-bottom: 5px;">${glasses.name}-${glasses.brand}(${glasses.color})</h5>
       <button class="btn btn-danger">${glasses.price}</button> <Span style="color: green; margin-left: 15px;">Stocking</Span>
       <p style="margin-top: 15px;">${glasses.description}</p>`;
        document.getElementById("avatar").innerHTML = content;
        document.getElementById("glassesInfo").innerHTML = content1;
        document.getElementById("glassesInfo").classList.add('animate__animated')
        document.getElementById("glassesInfo").classList.add('animate__fadeInUp')
        document.getElementById("glassesInfo").style.display = "block";
    });
});
