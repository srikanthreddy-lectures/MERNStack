import * as React from "react";

const {useState} = React
export default function Test() {

  const [counter,setCounter] = useState(0)
  const [apiData,setAPIData] = useState('')
  const [userInfo, setUserInfo] = useState([])


  const fetchAPIData = () =>{
    fetch('https://randomuser.me/api')
      .then(response=>response.json())
      .then(data => {
        setAPIData(JSON.stringify(data,null,2))
        setUserInfo(data.results)
    })
  .catch(error => console.log('ERROR'+error))
}

const getUsername = (userinfo) =>{
  const {name : {first, last}}= userinfo
  return `${first} ${last}`
}


  return (
    <div>
      <h1>Hello World</h1>
      <p>Counter : {counter}</p>
      <button onClick={
        ()=>{
          setCounter(counter+1)
        }
      }>Click Here</button>

    <button onClick={
        ()=>{
          fetchAPIData()
        }
      }>Fetch User from API</button>
      <p className='myP'>
        {
          userInfo.map((userInfo, id) => (
            <div>
              <img src={userInfo.picture.thumbnail} alt=""/>
                {getUsername(userInfo)}
            </div>
            
          )
        )}
      </p>
    </div>
  );
}


