const Section = (props) => {
    return ( 
        <section style={{ justifyContent: props.center ? 'center' : 'normal', flexDirection: props.reverse ? 'row-reverse' : 'row' }}>
            { props.children }
        </section>
    );
}
 
export default Section;