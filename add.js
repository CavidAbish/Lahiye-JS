
let conteiner = document.querySelector(".container");
let divInput = document.querySelector(".containerDivInput");
let ximg = document.querySelector(".containerImgInput");
let inp = document.querySelector(".containerInput");
let sirala = document.querySelector(".siralama");
let btn = document.querySelector(".btnimg");
let btn1 = document.querySelector(".btnimg1");
let plus = document.querySelector(".plus");
ximg.addEventListener("mouseenter", (e) => {
    ximg.src = "./Layihe şekiller/Group 70.svg";
    ximg.alt = "Yeni Şəkil";
});
ximg.addEventListener("mouseleave", (e) => {
    ximg.src = "./Layihe şekiller/Group 77.svg";
    ximg.alt = "Yeni Şəkil";
});
ximg.addEventListener("click", (e) => {
    inp.value = "";
    inp.focus();
});

let queue = false;
sirala.addEventListener("mousemove", (e) => {
    if (!queue) {
        sirala.src = "./Layihe şekiller/Group 73.svg";
        sirala.alt = "Yeni Şəkil";
    } else {
        sirala.src = "./Layihe şekiller/Group 91.svg";
        sirala.alt = "Yeni Şəkil";
    }
});

sirala.addEventListener("mouseleave", (e) => {
    if (!queue) {
        sirala.src = "./Layihe şekiller/Group 74.svg";
        sirala.alt = "Yeni Şəkil";
    } else {
        sirala.src = "./Layihe şekiller/Group 90.svg";
        sirala.alt = "Yeni Şəkil";
    }
});

sirala.addEventListener("click", (e) => {
    queue = !queue;
    if (queue) {
        sirala.src = "./Layihe şekiller/Group 90.svg";
        sirala.alt = "Yeni Şəkil";
    } else {
        sirala.src = "./Layihe şekiller/Group 74.svg";
        sirala.alt = "Yeni Şəkil";
    }
});

let listData = [];
let newDiv = document.createElement("div");
newDiv.classList.add("newDiv");
let newOl = document.createElement("ol");
newOl.classList.add("newOl")

inp.addEventListener("input", () => {
    if (inp.value.trim() === "") {
        inp.focus();
        btn.disabled = true;
    } else {
        
       btn.disabled = false;
       
        btn.addEventListener("click", () => {
    btn.classList.add("buttonn");
    

});

btn.addEventListener("click", (e) => {

    inp.remove();
    ximg.remove();
    newDiv1.remove();
    btn.disabled = true;
    if (inp.value.trim() === "") {
        inp.value = "";
    }
    if (inp.value !== "") {
        listData.push(inp.value);
    }

    newOl.innerHTML = "";
    for (let i = 0; i < listData.length; i++) {
        let newL = document.createElement("li");
        newL.textContent = listData[i];
        let newXimg = document.createElement("img");
        newXimg.src = "./Layihe şekiller/Group 77.svg";
        newXimg.alt = "yeni x şəkil";
        newXimg.classList.add("yeniXimg");
        newL.append(newXimg);
        newOl.append(newL);
        newXimg.addEventListener("mouseenter", () => {
            newXimg.src = "./Layihe şekiller/Group 70.svg";
            newXimg.alt = "Yeni alt mətn";
        });
        newXimg.addEventListener("mouseleave", () => {
            newXimg.src = "./Layihe şekiller/Group 77.svg";
            newXimg.alt = "Yeni alt mətn";
        });
        newXimg.addEventListener("click", () => {
            const index = listData.indexOf(newL.textContent);
            if (index > -1) {
                listData.splice(index, 1);
            }
            newL.remove();
            console.log(listData);

        });
    }

    newDiv.append(newOl);
    divInput.append(newDiv);
    inp.value = "";
    plus.disabled = false;
});
    }
});


const parentDiv = inp.parentNode;
let parentDiv1 = ximg.parentNode;
let parenttDiv2 = btn1.parentNode;

plus.addEventListener("click", (e) => {
    parentDiv1.append(ximg);
    parentDiv.append(inp);
    parenttDiv2.append(btn1);
    inp.style.width = "900px";
    inp.value = "";
    btn.disabled = false;
    newDiv.innerHTML = "";
    plus.disabled = true;
    newDiv.remove();
    inp.style.height = "40px"

});

let newDiv1 = document.createElement("div");
newDiv1.classList.add("newDiv1");
let newOl1 = document.createElement("ol");
newOl1.classList.add("newOl1");

plus.addEventListener("click", (e) => {
    inp.focus()
    if (listData.length === 0) {
        newOl1.remove();
        newDiv1.remove();
        newL1.remove();
    }
   


    if (inp.value !== "" && !listData.includes(inp.value)) {
        listData.push(inp.value);
    }

    newOl1.innerHTML = "";

    for (let i = 0; i < listData.length; i++) {
        let newL1 = document.createElement("li");
        newL1.textContent = listData[i];
        let newXimg1 = document.createElement("img");
        newXimg1.src = "./Layihe şekiller/Group 77.svg";
        newXimg1.alt = "yeni x şəkil";
        newXimg1.classList.add("yeniXimg");
        newL1.append(newXimg1);
        newOl1.append(newL1);

        newXimg1.addEventListener("mouseenter", () => {
            newXimg1.src = "./Layihe şekiller/Group 70.svg";
            newXimg1.alt = "Yeni alt mətn";
        });

        newXimg1.addEventListener("mouseleave", () => {
            newXimg1.src = "./Layihe şekiller/Group 77.svg";
            newXimg1.alt = "Yeni alt mətn";
        });

        newXimg1.addEventListener("click", () => {
            const index = listData.indexOf(newL1.textContent);
            if (index > -1) {
                listData.splice(index, 1);
            }
            newL1.remove();


            if (listData.length === 0) {
                newDiv1.remove();
            }



            console.log(listData);
           
        });
    }
    newDiv1.append(newOl1);
    conteiner.insertBefore(newDiv1, conteiner.children[2]);
    console.log(conteiner.children);
});
btn.addEventListener("click", () => {
    newDiv1.remove();
    newOl1.remove();
})

let sortAscending = true;

sirala.addEventListener("click", () => {
    if (sortAscending) {
        listData.sort((a, b) => {
            if (typeof a === 'number' && typeof b === 'number') return a - b;
            if (typeof a === 'string' && typeof b === 'string') return a.localeCompare(b);
            if (typeof a === 'number') return -1;
            return 1;
        });
    } else {
        listData.reverse();
    }
    sortAscending = !sortAscending;

    renderList(newOl, listData);
    renderList(newOl1, listData);
});

function renderList(container, data) {
    container.innerHTML = "";
    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;

        const img = document.createElement("img");
        img.src = "./Layihe şekiller/Group 77.svg";
        img.alt = "yeni x şəkil";
        img.classList.add("yeniXimg");

        img.addEventListener("mouseenter", () => {
            img.src = "./Layihe şekiller/Group 70.svg";
            img.alt = "Yeni alt mətn";
        });

        img.addEventListener("mouseleave", () => {
            img.src = "./Layihe şekiller/Group 77.svg";
            img.alt = "Yeni alt mətn";
        });

        img.addEventListener("click", () => {
            const index = data.indexOf(item);
            if (index > -1) data.splice(index, 1);
            li.remove();
            console.log(data);
        });

        li.append(img);
        container.append(li);
    });
}
