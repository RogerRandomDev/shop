const {getProducts}=require("../database")


const buildProduct=(product)=>{
    return `<li><h1>${product.name}</h1><h6>${product.category}</h6><h3>$${product.price}</h3></li>`
}



const getProductList=(filterType="",category="",search="")=>{
    let out=getProducts();
    search=search.toLowerCase()
    category=category.toLocaleLowerCase()
    filterType=filterType.toLowerCase()
    out=out.filter(product=>(product.category.toLowerCase()==category||category=="")&&product.name.toLowerCase().includes(search))
    switch(filterType){
        case "ascending":out.sort((a,b)=>a.price-b.price);break
        case "descending":out.sort((a,b)=>b.price-a.price);break
        case "A to Z":out.sort((a,b)=>b.name<a.name);break
        case "Z to A":out.sort((a,b)=>b.name>a.name);break
        default:break
    }
    return out.map(product=>{return buildProduct(product)})
}




module.exports={getProductList}