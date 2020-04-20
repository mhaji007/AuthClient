import React, { Component } from 'react'

class Signup extends Component {
    state = {  }
    render() { 
        return (
        <form>
            <fieldset>
                <label htmlFor="">Email</label>
            </fieldset>
            <fieldset>
                <label htmlFor="">Pasword</label>
            </fieldset>
        </form>
        );
    }
}
 
export default Signup;