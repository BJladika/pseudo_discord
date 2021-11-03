function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function formServerList(){
  for (var i = 1; i <= 5; i++){
    const ul = document.getElementById("server-list-list");
    const li = document.createElement("li");
    if (i == 1) li.classList.add("nav-item");
    //li.setAttribute("role","presentation");
    const abc = document.createElement("a");
    abc.title = "Random Server "+i;
    abc.href = "#";
    abc.className = "nav-link py-3 link-light";
    abc.setAttribute("data-bs-toggle","tooltip");
    abc.setAttribute("data-bs-placement","right");
    abc.onclick = function() { alert('Server is clicked'); };

    var rand_int = getRandomInt(7)+1;

    const img = document.createElement('img'); 
    img.src = 'testimg/randimg'+rand_int+'.png';
    img.style.cssText = "width:48px; height: 48px; -webkit-border-radius: 50px; -moz-border-radius: 50px; border-radius: 50px";

    abc.appendChild(img);
    li.appendChild(abc);  
    ul.appendChild(li);
  }
}

function formUserList(){
  for (var i = 1; i <= 23; i++){
    const ul = document.getElementById("user-list-list");
    const li = document.createElement("li");
    if (i == 1) li.classList.add("nav-item");
    const abc = document.createElement("a");
    abc.title = "Random Server "+i;
    abc.href = "#";
    abc.className = "nav-link text-white";
    abc.onclick = function() { alert('User is clicked'); };

    var rand_int = getRandomInt(10)+1;

    const img = document.createElement('img'); 
    img.src = 'testimg/randimg'+rand_int+'.png';
    //img.style.cssText = "width:48px; height: 48px; -webkit-border-radius: 50px; -moz-border-radius: 50px; border-radius: 50px";
    img.className = "rounded-circle me-2";
    img.width = 32;
    img.height = 32;


    abc.appendChild(img);
    abc.append(document.createTextNode(" Random User #"+i+" "));
    li.appendChild(abc);  
    ul.appendChild(li);
  }
}

function formChatList(){
  for (var i = 1; i <= 23; i++){
    const div = document.getElementById("chat-list-list");

    const abc = document.createElement("a");
    abc.href = "#";
    abc.className = "list-group-item list-group-item-action d-flex gap-3 py-3";
    abc.ariaCurrent = true;

    var rand_int = getRandomInt(10)+1;

    const img = document.createElement('img'); 
    img.src = 'testimg/randimg'+rand_int+'.png';
    img.className = "rounded-circle flex-shrink-0";
    img.width = 32;
    img.height = 32;
    img.alt = "twbs";

    const div2 = document.createElement("div");
    div2.className = "d-flex gap-2 w-100 justify-content-between";

    const div3 = document.createElement("div");

    const small = document.createElement("small");
    small.className = "opacity-50 text-nowrap";
    small.append(document.createTextNode(i+" min ago"));

    const h6 = document.createElement("h6");
    h6.className = "mb-0";
    h6.append(document.createTextNode(" Random User #"+(getRandomInt(23)+1)+" "));
    h6.append(small);

    const p = document.createElement("p");
    p.className = "mb-0 opacity-75";
    p.append(document.createTextNode("I am writing something for fun!"));

    div3.appendChild(h6);
    div3.appendChild(p);
    div2.appendChild(div3);
    abc.appendChild(img);
    abc.appendChild(div2);
    div.appendChild(abc);
  }
}

formServerList();
formUserList();
formChatList();


/*if(window.attachEvent) {
  window.attachEvent('onload', formServerList);
} else {
  if(window.onload) {
      var curronload = window.onload;
      var newonload = function(evt) {
          curronload(evt);
          formServerList(evt);
      };
      window.onload = newonload;
  } else {
      window.onload = formServerList;
  }
}*/
