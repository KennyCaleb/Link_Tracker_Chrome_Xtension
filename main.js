// chrome://extensions/

const inputBox = document.getElementById("input-box");
const descrBox = document.getElementById("descr-box");
const addBtn = document.getElementById("submit-btn");
const linkList = document.querySelector(".link-list");

const links = JSON.parse(localStorage.getItem("leadtracker")) || [];

links && renderList();

// adding links
addBtn.addEventListener("click", addToList);
function addToList() {
  if (inputBox.value != "") {
    const newLink = inputBox.value;
    const newDescr = descrBox.value;

    links.push({ link: newLink, descr: newDescr });

    // saving to localStorage
    localStorage.setItem("leadtracker", JSON.stringify(links));

    console.log(links);

    inputBox.value = "";
    descrBox.value = "";
  }

  renderList();
}

function renderList() {
  let linkTag = "";

  for (let obj of links) {
    const { link, descr } = obj;

    // linkTag += `<li><a href=${link} target="_blank">${link}</a></li>`;

    linkTag += `<li>
                <p><a href=${link} target="_blank">${link}</a></p>
                <p class="link_descr">${descr}</p>
            </li>`;
  }

  linkList.innerHTML = linkTag;
}
