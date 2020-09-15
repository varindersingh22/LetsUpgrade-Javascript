window.onload = function () {
  let initialbus = [];

  if (localStorage.getItem("bus") == null) {
    localStorage.setItem("bus", JSON.stringify(initialbus));
  }
};

function display(superarray = undefined) {
  let tabledata = "";
  let bus;
  if (superarray == undefined) {
    bus = JSON.parse(localStorage.getItem("bus"));
  } else {
    bus = superarray;
  }

  bus.forEach(function (bu, index) {
    let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${bu.name}</td>
      <td>${bu.number}</td>
      <td>${bu.cap}</td>
      <td>${bu.source}</td>
      <td>${bu.dest}</td>
      </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
  //   document.getElementById("tdata").innerHTML = tabledata;
}

display();

function addBus(e) {
  e.preventDefault();
  let bu = {};
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let cap = document.getElementById("cap").value;
  let source = document.getElementById("source").value;
  let dest = document.getElementById("dest").value;
  bu.name = name;
  bu.number = number;
  bu.cap = Number(cap);
  bu.source = source;
  bu.dest = dest;

  //   superheroes.push(superhero);

  let bus = JSON.parse(localStorage.getItem("bus"));
  bus.push(bu);
  localStorage.setItem("bus", JSON.stringify(bus));

  display();

  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("cap").value = "";
  document.getElementById("source").value = "";
  document.getElementById("dest").value = "";
}

function searchByName() {
  let searchValue = document.getElementById("searchName").value;
  let bus = JSON.parse(localStorage.getItem("bus"));
  let newdata = bus.filter(function (bu) {
    return (
      bu.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

  display(newdata);
}



let updateIndex;

function copybus(index) {
  let bus = JSON.parse(localStorage.getItem("bus"));
  updateIndex = index;
  let bu = bus[index];

  document.getElementById("upname").value = bu.name;
  document.getElementById("upnumber").value = bu.number;
  document.getElementById("upcap").value = bu.cap;
  document.getElementById("upsource").value = bu.source;
  document.getElementById("updest").value = bu.dest;
}

function updatebus(e) {
  e.preventDefault();
  let bus = JSON.parse(localStorage.getItem("bus"));
  let bu = bus[updateIndex];
  console.log(bu);
  let name = document.getElementById("upname").value;
  let number = document.getElementById("upnumber").value;
  let cap = document.getElementById("upcap").value;
  let source = document.getElementById("upsource").value;
  let dest = document.getElementById("updest").value;
  bu.name = name;
  bu.number = number;
  bu.cap = Number(cap);
  bu.source = source;
  bu.dest = dest;

  localStorage.setItem("bus", JSON.stringify(bus));
  display(bus);

  // code for hiding from anywhere
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}

