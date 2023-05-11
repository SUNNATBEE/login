const elUserList = document.querySelector(".login-list");
const elTemplate = document.querySelector(".login-temp").content;
const nextPage = document.querySelector(".next-page");
const backPage = document.querySelector(".back-page");

function renderUser(arr,node){
    const elFragment = document.createDocumentFragment();
    arr.forEach(item => {
      node.innerHTML = "";
        const elCloneTemplate = elTemplate.cloneNode(true);
        elCloneTemplate.querySelector(".login-id").textContent = item.id;
        elCloneTemplate.querySelector(".login-img").src = item.avatar;
        elCloneTemplate.querySelector(".login-first-name").textContent = item.first_name;
        elCloneTemplate.querySelector(".login-last-name").textContent = item.last_name;
        elFragment.appendChild(elCloneTemplate);
    });
    node.appendChild(elFragment);
}


async function getInfoUser(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    renderUser(data.data, elUserList);
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
}
getInfoUser("https://reqres.in/api/users?page=1");

nextPage.addEventListener("click" , () => {
  getInfoUser("https://reqres.in/api/users?page=2");
  nextPage.classList.add("d-none");
  backPage.classList.remove("d-none")
})

backPage.addEventListener("click", () => {
  getInfoUser("https://reqres.in/api/users?page=1");
  nextPage.classList.remove("d-none");
  backPage.classList.add("d-none");
});