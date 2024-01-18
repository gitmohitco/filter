let data=[];
let product = document.getElementById("prod");
fetch("https://fakestoreapi.com/products")
.then(function(res){
    console.log(res);
    return res.json();
})
.then(function (p){
    console.log(p);
    arr = p;
    arr.forEach(
        function(val){
            const img = document.createElement('img')
            img.src = val.image;
            img.style.height='200px';
            const title = document.createElement('h2');
            title.innerHTML = val.title;
            const desc = document.createElement('p');
            desc.innerHTML = val.description;
            const price = document.createElement('h3');
            price.innerHTML = `Price: $${val.price}`;
            const rate = document.createElement('h4')
            rate.innerHTML = `Rating: ${val.rating.rate} <=> ${val.rating.count}`;
            const btn = document.createElement('a')
            btn.href = '#';
            btn.className = 'add-to-cart';
            btn.innerHTML = "Add to Cart";
            const subDiv = document.createElement('div');
            subDiv.append(img,title,desc,price,rate,btn);
            subDiv.classList.add("subDiv");
            product.appendChild(subDiv);
        })
})
let button1 = document.getElementById('btn');
button1.addEventListener('click', function(e) {
fetch("https://fakestoreapi.com/products")
.then(function(res){
    console.log(res);
    return res.json();
})
.then(function(newArr){
    const filterData = newArr.filter((item)=>{
        return item.category === "men's clothing";
    })
    for(i=0;i<=newArr;i++){
        if(item.category === "men's clothing"){
            return res.json();
        }
    }
    console.log(filterData);
})
})
let button2 = document.getElementById('btn1');
button2.addEventListener('click', function(e) {
fetch("https://fakestoreapi.com/products")
.then(function(res){
    console.log(res);
    return res.json();
})
.then(function(newArr){
    const filterData = newArr.filter((item)=>{
        return item.category === "electronics";
    })
    for(i=0;i<=newArr;i++){
        if(item.category === "men's clothing"){
            return res.json();
        }
    }
    console.log(filterData);
})
})
let button3 = document.getElementById('btn2');
button3.addEventListener('click', function(e) {
fetch("https://fakestoreapi.com/products")
.then(function(res){
    console.log(res);
    return res.json();
})
.then(function(newArr){
    const filterData = newArr.filter((item)=>{
        return item.category === "jewelery";
    })
    for(i=0;i<=newArr;i++){
        if(item.category === "men's clothing"){
            return res.json();
        }
    }
    console.log(filterData);
})
})
let button4 = document.getElementById('btn3');
button4.addEventListener('click',function(e){
    fetch("https://fakestoreapi.com/products")
    .then(function(res){
        console.log(res);
        return res.json();
    })
    .then(function(newArr){
        const filterData = newArr.filter((item)=>{
            return item.category === "women's clothing";
        })
        for(i=0;i<=newArr;i++){
            if(item.category === "men's clothing"){
                return res.json();
            }
        }
        console.log(filterData);
    })
})
// .catch((){

// })
