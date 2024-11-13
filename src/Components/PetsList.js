import { useState } from "react";
import pets from "../petsData"; // we can call it waht ever we want perfer matching it with petsData
import PetItem from "./PetItem";
import petsData from "../petsData";

function PetsList() {

  const [query, setQuery]= useState (""); //create a state called query and a method called setQuery. The initial value should be “” this should be at top

  const [type, setType]= useState (""); // always on top

  const [adopt,setAdopt]= useState(pets) // to show initial list from petsData

  const handleAdopt = (idToBeRemoved)=>{ // idToBeRemoved call be called anything
   let adoptedList = adopt.filter((pet)=> pet.id !== idToBeRemoved);
   setAdopt(adoptedList);
  }
  // !== to remove
  // handleAdopt must ,match one down, and adoptedlist to be set as set state setAdopt

  let filterDataPets=adopt.filter((pet)=>pet.name.includes(query)); // to filter, we make a new const called filteredDatapet and givt it a 
  // filter on pets from petsData .. and to filetr it it should check the name at pet.name includes the query that was inputted
  // filter before map 
  // we changed to adopt for this challange

  //now filter again by type
  let filterPetType =filterDataPets.filter((pet)=>pet.type.includes(type));

  const petList = filterPetType.map((pet) => <PetItem pet={pet} key={pet.id} myFunction={handleAdopt} />); // value in fuction must match top cont.
// to filter, we use the anarky .. thereofr first we filter by name and then by type
// myFunction { handleAdopt} called
  
  console.log(query)
  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(event)=> setQuery(event.target.value)} // created an onChange with input event that calles setQuery and gives it event.tagrt.value
                />
              </div>
              <br />
              Type:
              <select className="form-select" onChange={(event)=>setType(event.target.value)}> {/* to add a filter by type */}
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
