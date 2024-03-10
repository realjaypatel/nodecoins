api = 'https://api.coinranking.com/v2/coins'



async function fetchcoins() {
    const response = await fetch(api);
    const coins = await response.json();
    return coins
  }

// htmlelem = `<div class="card-header"><div><span><img src="https://assets.codepen.io/285131/zeplin.svg" /></span><h3>${coins.data.coins[i].symbol}</h3></div><label class="toggle"><input type="checkbox" checked><span></span></label></div><div class="card-body"><p>Collaboration between designers and developers.</p></div><div class="card-footer"><a href="#">View integration</a></div>`
fetchcoins()



async function mainfxn(){
    
    mainclass =document.querySelector('.card-grid')
    coins = await fetchcoins();
    if (coins == null || coins.length == 0){
        return 
    }
    console.log(coins.data.coins)
    for (var i = 0; i<coins.data.coins.length; i++) {
        secelement = document.createElement('article')
        secelement.className = 'card'
        
        secelement.innerHTML = `<div style="color:${coins.data.coins[i].color}" class="card-header"><div><span><img src="${coins.data.coins[i].iconUrl}" /></span><h3>${coins.data.coins[i].name}</h3></div><span>${coins.data.coins[i].change}%</span></label></div><div class="card-body"><p>${coins.data.coins[i].price}$</p></div><div class="card-footer"><a href="#">Market Cap:${coins.data.coins[i].marketCap}$</a></div>`

        mainclass.appendChild(secelement)
    }
    
    

}
mainfxn()

