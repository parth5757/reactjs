// export default function TabButton({ label } ) {
//     return (
//         <li>
//             <button>{label}</button>
//         </li>
//     )
// } //one methods with use label


// export default function TabButton(props) {
    //     return (
        //         <li>
        //             <button>{props.children}</button>
//         </li> 
//     )
// } //one methods with use with just props

export default function TabButton({ children,   onSelect, isSelected } ) {  //this 3 parameter of TabButton are the props
    console.log('TABBUTTON COMPONENT EXECUTING')
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    )
} 