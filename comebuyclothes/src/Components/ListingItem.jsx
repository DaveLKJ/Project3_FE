function ListingItem(props){
    const {clothes} = props
    return(
        <div>
      <img style={{width:'50px'}} src={clothes.imgUrl}></img>
      <h1>{clothes.name}</h1>
      <p>{clothes.price}</p>
        </div>
    )
}
export default ListingItem