import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
    state = {  }
    render() { 
        return (
        <div>
            This is the feature!
        </div>
         );
    }
}
 
export default requireAuth(Feature);