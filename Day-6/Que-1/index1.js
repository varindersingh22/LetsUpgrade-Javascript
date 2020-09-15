let heroes = [{
    name: "Ronaldo",
    age: 35,
    city: "Lisbon",
    salary: "10000000",
  },
  {
    name: "Messi",
    age: 34,
    city: "Barcelona",
    salary: "1000000",
  },
  {
    name: "Demon",
    age: 100,
    city: "Earth",
    salary: "6000000000",
  },{
    name: "Shadow",
    age: 20,
    city: "Nowhere",
    salary: "10000000000",
  },{
    name: "Supreme",
    age: 100,
    city: "Nowhere",
    salary: "100000000000",
  }];
  
  function display(superarray) {
    let tabledata = "";
  
    superarray.forEach(function (superhero, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${superhero.name}</td>
      <td>${superhero.age}</td>
      <td>${superhero.city}</td>
      <td>${superhero.salary}</td>
      <td>
      <button onclick='deleteSuperhero(${index})'>delete</button>
      </td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display(heroes);
  
  function addSuper(e) {
    e.preventDefault();
    let superhero = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;
    superhero.name = name;
    superhero.age = Number(age);
    superhero.city = city;
    superhero.salary = salary;
  
    heroes.push(superhero);
  
    display(heroes);
  
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "";
  }
  
  function searchByName() {
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = heroes.filter(function (superhero) {
      return (
        superhero.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  function deleteSuperhero(index) {
    heroes.splice(index, 1);
    display(heroes);
  }
  
  let updateIndex;
  
  function copySuperhero(index) {
    updateIndex = index;
    let superhero = heroes[index];
  
    document.getElementById("upname").value = superhero.name;
    document.getElementById("upage").value = superhero.age;
    document.getElementById("upcity").value = superhero.city;
    document.getElementById("upsalary").value = superhero.salary;
  }
  
  function updateSuperhero(e) {
    e.preventDefault();
    let superhero = heroes[updateIndex];
    console.log(superhero);
    let name = document.getElementById("upname").value;
    let age = document.getElementById("upage").value;
    let city = document.getElementById("upcity").value;
    let salary = document.getElementById("upsalary").value;
    superhero.name = name;
    superhero.age = Number(age);
    superhero.city = city;
    superhero.salary = salary;
    console.log(superhero);
  
    display(heroes);
  
    // code for hiding from anywhere
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  }
  
  
  
 