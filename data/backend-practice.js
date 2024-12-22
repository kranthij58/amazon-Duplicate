const xems = new XMLHttpRequest();
let res;
xems.addEventListener('load', () =>{
  res = xems.response;
  console.log(res);
});
xems.open('GET','https://supersimplebackend.dev');
xems.send();

