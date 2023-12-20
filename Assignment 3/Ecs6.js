let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        images:"Mobile Phone Images/Sumsung  Images 1.jpeg"
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        images:"Mobile Phone Images/Sumsung Images 2.jpeg"
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        images:"Mobile Phone Images/Sumsung Images 3jpeg.jpeg"
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        images:"Mobile Phone Images/Vivo 1.jpeg"
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        images:"Mobile Phone Images/Vivo 2.jpeg"
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        images:"Mobile Phone Images/Vivo 3.jpeg"
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        images:"Mobile Phone Images/Vivo 4.jpeg"
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        images:"Mobile Phone Images/Iphone Image 3.jpeg"
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        images:"Mobile Phone Images/Iphone Image 1.jpeg"
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        images:"Mobile Phone Images/Iphone Image 2.jpeg"
    },
]
const Cards = document.getElementById("Cards");

arr.forEach(element => {
    const createCarddiv = document.createElement("div")
        let cards_Info = (`<img src="${element.images}">
        <div class="card_text"><h3 class="Title">brand : ${element.brand}</h3><h3>camera : ${element.camera}</h3><h3>Model : ${element.model}</h3><h3>Price :${element.price}</h3><hr><h3>Rom :${element.rom}</h3><h3>Ram :${element.ram}</h3></div>`)
        Cards.innerHTML += cards_Info
        Cards.appendChild(createCarddiv)
    });  



