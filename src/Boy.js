import General from './General'

const Boy = (props) => {
    
    
    return (
        <div>
    
            <h1>Boy state = {props.my_state}</h1>
            <button onClick={props.my_function}>Add</button>
            
        </div>
    )
}

export default General(Boy);
