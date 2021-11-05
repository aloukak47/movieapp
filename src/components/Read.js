import React, { useState } from 'react'

const useForm = (value) => {
    const [val,setVal]=useState(value)
    return [val,(event)=>{
        setVal(
            {
                ...val,[event.target.name]:event.target.value
            
            }
        )
    }]
}

export default useForm