
export default function UserPanel (props){

    return <div>
        <h1>Witaj {props.email} </h1>
        <br/>
        <a onClick={() => props.onLogout()}>Wyloguj</a>
    </div>

}