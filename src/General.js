import React , {useState} from 'react';

const General = (MyComponent) => {

    const Gender = () => {

        const [num, setNum] = useState(0);

        const increment = () => {

            setNum(num + 1);

        }
        return <MyComponent my_state = {num} my_function = {increment} />
    }

    return Gender;

}

export default General;
