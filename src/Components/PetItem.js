import { useState } from "react";

function PetItem({ pet }) {
  const [xyz, setXyz] = useState (pet.image); // we have created a state with initail values of pet.image
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
         <img className="image" alt={pet.name} src={xyz} /> {/*to pust initnal value from top .. we use xyz but we can use anything we need  */}
        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" className="btn btn-info" onClick={(event)=> setXyz(pet.image2)}> {/*to change picture when clicked*/}
            Pet
          </button>
          <button type="button" class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
