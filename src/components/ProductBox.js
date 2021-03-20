const ProductBox = (props) => {
    return ( 
        <div>
            <img src={props.img} />
            <h4>{props.name}</h4>
        </div>
    );
}
 
export default ProductBox;