import React, { useState } from 'react';
import Calendar from 'react-calendar';


// function Cal() {
//     const [value, onChange] = useState(new Date());

//     return (
//         <div className="calendar">
//             <Calendar
//                 onChange={onChange}
//                 value={value}
//             />
//         </div>
//     );
// }

class Cal extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="calendar">
           <Calendar
                onChange={this.props.func}
                    value={new Date(this.props.value) }
            />
        </div>

        )
    }
}

export default Cal;