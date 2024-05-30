export default function CoreConcept(props) {
    // function CoreConcept(title, description, image){} // we can also use this and write directly {title} inplace of {props.title}
    return(
    <li>
        <img src={props.img} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </li>
    );
} 