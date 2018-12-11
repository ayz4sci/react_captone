import React from 'react';
import TextInput from '../common/TextInput'

class LoginForm extends React.Component{
    render(){
        return (
            <form>
                <TextInput
                    name="username"
                    label="Username"
                    // value={course.category}
                    // onChange={onChange}
                    // error={errors.category}
                     />
                <TextInput
                    name="password"
                    label="Password"
                    // value={course.category}
                    // onChange={onChange}
                    // error={errors.category} 
                    />
                <button className="button">Login or Register</button>
            </form>
        )
    }
}

export default LoginForm;