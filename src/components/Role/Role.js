import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Role() {
    const [role, setRole] = useState(null);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = () =>{
        dispatch({ type: AUTH, data: { ...data, role } });
        history.push('/admin/dashboard')
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select onChange={e => setRole(e.target.value)}>
                    <option value="student">student</option>
                    <option value="mentor">mentor</option>
                    <option value="company">company</option>
                </select>
                <button type="submit">Done</button>
            </form>
        </div>
    )
}

export default Role
