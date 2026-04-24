// const url = "https://getbootstrap.com/docs/5.3/getting-started/introduction/";

// fetch("https://cleanuri.com/api/v1/shorten", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
//   body: `url=${encodeURIComponent(url)}`
// })
//   .then(res => res.json())
//   .then(data => {
//     console.log("Short URL:", data.result_url);
//   })
//   .catch(err => console.error(err));


const url = "https://getbootstrap.com/docs/5.3/getting-started/introduction/";
const a=document.querySelector('.section-sub');
const b='school'
console.log(a);
console.log(b);
fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`)
  .then(res => res.text())
  .then(data => {
    console.log("Short URL:", data);
  })
  .catch(err => console.error(err));