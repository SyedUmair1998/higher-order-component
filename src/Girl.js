import General from './General';

const Girl = (props) => {
    
    return (
        <div>
    
            <h1>Girl state = {props.my_state}</h1>
            <button onClick={props.my_function}>Add</button>
            
        </div>
    )
}

export default General(Girl);
