const ImageBox = (props) => {

    const imageSize = props.imageSize ? props.imageSize : '200';
    const imageUrl = 'https://picsum.photos/' + imageSize;

    return ( 
        <figure>
            <img src={imageUrl} alt=""/>
            <figcaption>
                { props.content ? props.content : 'Default Text' }
            </figcaption>
        </figure>
    );
}
 
export default ImageBox;