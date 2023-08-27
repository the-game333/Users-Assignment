import { useEffect } from "react";
import "./cardData.css";
import  Card from "./Card.js";
import { useState } from "react";

function CardData(props) {
  const [avatarUrl,setAvatarUrl] =useState('');
  let [uName,setUname]=useState('');
  let [name,setName]=useState('');
  let [pRepos, setPrepos] =useState('');
  let [pGists, setPgists] =useState('');
  let [created, setCreated]=useState('');

  useEffect(()=>{

    const fetchApi = async ()=>{
    const url = `https://api.github.com/users/${props.value}`
    const data = await fetch(url);
    const res = await data.json();
    console.log(res.avatar_url);

    setUname(res.login);
    setAvatarUrl(res.avatar_url);
    setName(res.name);
    setPrepos(res.public_repos);
    setPgists(res.public_gists);
    setCreated(res.created_at.substring(0,10));
  }
  fetchApi();
  },[])
  return (
    <div className="App">
      <div className="col">
        <Card
          imgSrc = {avatarUrl}
          user={uName}
          title={name}
          prepos={pRepos}
          pgists ={pGists}
          created={created}
        />
      </div>
     
    </div>
  );
}

export default CardData;