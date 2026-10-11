const BaseUrl = "https://fakestoreapi.com";
var product = document.getElementById("product")

async function apicall() {
    await fetch(`${BaseUrl}/products`)

        .then(async function (response) {
            const db = await response.json()
            console.log(db)
            for (var value of db) {
                console.log(value)
                product.innerHTML += `
                <div class='col col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div class="card" >
                        <img src=${value.image} alt="...">

                        <div class="card-body">
                            <h5 class="card-title">${value.title}</h5>
                            <p class="card-text">${value.description}</p>
                            <a href='./productDetail.html?id=${value.id}' class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                
                `
            }



        })
        .catch(function (e) {
            console.log(e)

        })
}

apicall()