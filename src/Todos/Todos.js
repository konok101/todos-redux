import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from './actions/todoActions';

const Todos = () => {
    const {isloading, todos, error}= useSelector((state)=> state)

    const dispatch=useDispatch()

    useEffect(()=>{

        dispatch(getAllTodos)

    }, [])
    return (
        <div>
            <h1>This is todos app</h1>

            {isloading && <p>loading</p>}

        </div>
    );
};

export default Todos;