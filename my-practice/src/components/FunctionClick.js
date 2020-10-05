import React from 'react';

function FunctionClick(){
    function clickHandler(){
        alert("i am being clicked")
    }
    return(
        <div>
            <button onClick={()=>{clickHandler()}}>
                Click Me!
            </button>
        </div>
    )

}

export default FunctionClick;