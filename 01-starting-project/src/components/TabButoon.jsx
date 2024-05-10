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

export default function TabButton({ children, onSelect } ) {
    console.log('TABBUTTON COMPONENT EXECUTING')
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
} 