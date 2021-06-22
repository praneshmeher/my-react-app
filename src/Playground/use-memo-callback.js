import React, {useState, useCallback, useMemo, Fragment, useEffect} from 'react'

const App = ()=>{
    const[callBackCount, setCallBackCount] = useState(0)
    const[memoCount, setMemoCount] =useState(0)

    const memoFunction = ()=>{
        console.log('memo called', memoCount)
    }

    useMemo(memoFunction, [memoCount])

    const callBackFunction = useCallback(()=>{
        console.log('callback called', callBackCount)
        return callBackCount
    }, [callBackCount])

   return(

       <Fragment>


            <ChildComponent action={callBackFunction} />
            <div>
                <button onClick={()=>setCallBackCount(callBackCount+1)}>
                    Increment callback count
                </button>
                <button onClick={()=>setCallBackCount(callBackCount-1)}>
                    Decrement callback count
                </button>
           </div>
           <div>
                <button onClick={()=>setMemoCount(memoCount+1)}>
                    Increment callback count
                </button>
                <button onClick={()=>setMemoCount(memoCount-1)}>
                    Decrement callback count
                </button>
           </div>
       </Fragment>
   )
}

const ChildComponent = ({action})=>{
    const[value, setValue] = useState(0)

    useEffect(()=>{
        let val = action()
        setValue(val)
    }, [action])

    console.log('child rendered')
    return(
        <Fragment>
            Child : {value}
        </Fragment>
    )
}

export default App