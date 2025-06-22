require('dotenv').config()

const express = require('express')
const app = express()

const gitHub_data={
  "login": "Nirmal-blip",
  "id": 182194042,
  "node_id": "U_kgDOCtwPeg",
  "avatar_url": "https://avatars.githubusercontent.com/u/182194042?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Nirmal-blip",
  "html_url": "https://github.com/Nirmal-blip",
  "followers_url": "https://api.github.com/users/Nirmal-blip/followers",
  "following_url": "https://api.github.com/users/Nirmal-blip/following{/other_user}",
  "gists_url": "https://api.github.com/users/Nirmal-blip/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Nirmal-blip/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Nirmal-blip/subscriptions",
  "organizations_url": "https://api.github.com/users/Nirmal-blip/orgs",
  "repos_url": "https://api.github.com/users/Nirmal-blip/repos",
  "events_url": "https://api.github.com/users/Nirmal-blip/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Nirmal-blip/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "nirmal joshi",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2024-09-20T05:18:50Z",
  "updated_at": "2025-06-18T21:11:03Z"
}

app.get('/', (req, res) => {
  res.send('Hello nirmal Ji!')
})

app.get('/twitter',(req,res)=>{
    res.send("twitter")
})

app.get('/youtube',(req,res)=>{
    const url="https://www.youtube.com/watch?v=X4Y-py3Axyk";
    res.send(`<h1>Youtube link of Thugesh Show 
     </h1>
        <a href=${url}>link </a>`);
})

app.get('/github',(req,res)=>{
    res.json(gitHub_data);
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
