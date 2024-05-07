function Checkout (props){

    const {cart} = props
    return(
        <div>
            You are seeing Checkout Page
            {cart.map((item)=>{
                return (
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.quantity}</p>
                        <p>total price: ${(item.price)*(item.quantity)}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Checkout