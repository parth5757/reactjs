// export default function TabButton({ label } ) {
//     return (
//         <li>
//             <button>{label}</button>
//         </li>
//     )
// } //one methods with use label

// export default function TabButton({ children } ) {
//     return (
//         <li>
//             <button>{children}</button>
//         </li>
//     )
// } //one methods with use with just props


export default function TabButton(props) {
    return (
        <li>
            <button>{props.children}</button>
        </li>
    )
}