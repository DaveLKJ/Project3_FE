function ListingItem(props){
    const {clothes} = props
    return(
        <div>
      <h1>{clothes.name}</h1>
      <p>{clothes.price}</p>
      <img style={{width:'50px'}} src={clothes.imgUrl}></img>
        </div>
    )
}
export default ListingItem