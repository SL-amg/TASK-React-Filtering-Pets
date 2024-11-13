import { useState } from "react";

// this file is only for one pet at a time
function PetItem(props) {

  const { pet, myFunction } = props; // to define props, pet and my function

  //this is for part 1
  const [xyz, setXyz] = useState (pet.image); // we have created a state with initail values of pet.image
  const handleClick =() =>{ // to change the image from image 1 to image 2
    if (xyz === pet.image){
      setXyz(pet.image2)}
      else{
        setXyz(pet.image)
      }
    }
  
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
         <img className="image" alt={pet.name} src={xyz} /> {/*to pust initnal value from top .. we use xyz but we can use anything we need  */}
        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" className="btn btn-info" onClick={handleClick}> {/*to change picture when clicked check the video class 19 for a better solution*/}
            Pet
          </button>
          <button type="button" class="btn btn-info  m-2" onClick={()=> props.myFunction(props.pet.id)} > {/*to make a function and push values*/}
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
