import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }

    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(
                email,
                password
            );

            this.setState({email:'', password:''});

        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                console.error("User Does not Exist");
            }else if(error.code === 'auth/wrong-password'){
                console.error("Incorrect Password");
            }
            else{
                console.error(error);
            }
            
        }
        return;
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    handleSignInWithGoogle = (event) => {
        event.preventDefault();
        signInWithGoogle();
    }

    render(){
        return(
            <div className="sign-in">
                <h2> I already have an account </h2>
                <span> Sign in with your email and password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput  name='email' 
                                type='email'
                                label='email'
                                value={this.state.email}
                                handleChange={this.handleChange}
                                required>
                    </FormInput>
                    <FormInput  name='password' 
                                type='password' 
                                label='password'
                                value={this.state.password} 
                                handleChange={this.handleChange}
                                required>
                    </FormInput>
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton onClick={this.handleSignInWithGoogle} isGoogleSignIn >
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;