//Variables
let INput = document.querySelector(".container > input");
let Button = document.querySelector(".container > button");
let divData = document.querySelector(".data");
//==========================================
Button.onclick = (element) =>
{

  if (INput.value === "")
  {
    document.querySelector(".data").innerHTML = "You Forget Post Id";
  } else if (INput.value < 1  )
  {
    element.preventDefault();
    document.querySelector(".data ").innerHTML = "Id Not Valid";
  } else if (INput.value > 100)
  {
    document.querySelector(".data ").innerHTML = "Id Not Valid";
    element.preventDefault();
  }else
  {
    getRepo(INput.value)
  }
};

//Function
function getRepo(parameter)
{
  parameter--;
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) =>
    {
      return response.json();
    }).then((data) =>
    {
      divData.innerHTML = "";

        let devMain = document.createElement("div");

        devMain.setAttribute("class", "box");

        let headMain = document.createElement("h1");

        let head = document.createElement("h2");

        let dev = document.createElement("div");

        let para = document.createElement("p");

        let title = document.createElement("h2")

        headMain.appendChild(document.createTextNode(`ID : ${data[parameter]["id"]}`));

        head.appendChild(document.createTextNode(`User Id :${data[parameter].userId}`))


        title.appendChild(document.createTextNode(`title : ${data[parameter]["title"]}`))

        para.appendChild(document.createTextNode(`body : ${data[parameter]["body"]}`))

        dev.appendChild(head)

        dev.appendChild(title);

        dev.appendChild(para);

        devMain.appendChild(headMain);

        devMain.appendChild(dev);

        divData.appendChild(devMain)

    });
}
