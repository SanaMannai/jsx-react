import { product } from "../product"



export const Image =()=>{
    
    return(

        <div>

        <img src={product.image} alt="Not found" style={{width:"286px"}} />

        </div>
    )
}

export default Image