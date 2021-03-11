import React,{useState,useEffect} from 'react'

export default function ApiPage() {

  const [state, setstate] = useState(null)

  useEffect(() => {

    fetch('/api/getinfo')
    .then(response=>{
      return response.json()
    }).then(data=>{
      setstate(data)
    }).catch(error=>{
      console.log(error);
    })

  }, [])

  return (
    <div>
      <h1>API PAGE</h1>

      {
        state ?
          <ul>
            <li>Name:{state.name}</li>
            <li>Age:{state.age}</li>
            <li>Address:{state.address}</li>
            <li>Nationality:{state.nationality}</li>
          </ul>
        :
        <h1>loading....</h1>
      }

    </div>
  )
}
