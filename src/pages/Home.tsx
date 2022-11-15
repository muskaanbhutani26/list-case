import React, { useEffect, useState } from "react";
import DropDown from "../components/dropdown/DropDown";
import SelectDropDown from "../components/dropdown/SelectDropDown";
import { IBreed } from "../interfaces/breed";
import { IDropdownOption } from "../interfaces/dropdown";
import { fetchBreeds } from "../services/fetchBreeds";
import { getTransformBreeds } from "../utils/helper";

const Home = () => {

    const [breeds, setBreeds] = useState<IDropdownOption[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>();
    const [error, setError] = useState<string|null>(null);
    const [breedOptions, setBreedOptionsSelected] = useState({
      'breedOption1': null,
      'breedOption2': null,
    });

    useEffect(() => {
        setIsLoading(true)
        fetchBreeds()
        .then(response => {
            setError(null)
            return response.json()
        }).then(result => modifyResponse(result))
        .catch(error => setError(error))
    }, []);

    const modifyResponse = (breedList: IBreed[]) => {
        const breedDogs = getTransformBreeds(breedList)
          if(breedDogs.length > 0) {
                setIsLoading(false)
                setBreeds(breedDogs)
          }
    }

    const handleChange = (option: IDropdownOption) => {
      setBreedOptionsSelected(prevState => ({ ...prevState, breedOption1: option }));
  }

  const handleChangeBreedOption = (option: IDropdownOption) => {
    setBreedOptionsSelected(prevState => ({ ...prevState, breedOption2: option }));
}

  return (
    <div className="home-page">
      <div className="flex-block">
          {!isLoading && error && (
            <>
              <div>{error}</div>
            </>
          )}
          {!isLoading && breeds && (
          <div className="flex-content">
            <DropDown placeHolder='Select' 
              name = "breedOption1"
              value={breedOptions.breedOption1}
              onChange={handleChange}
              options={breeds}/>
          </div>
          )}

        {!isLoading && breeds && (
          <div className="flex-content">
            <SelectDropDown placeHolder='Select' 
                name = "breedOption2"
                options={breeds} 
                value={breedOptions.breedOption2}
                onChange={handleChangeBreedOption}
            />
                
          </div>

        )}    
  </div>
    <div className="flex-block">
      {breedOptions && breedOptions.breedOption1 && 
      <div className="flex-content"> 
        You selected breedOption1 :{breedOptions.breedOption1.label}
      </div>}
      {breedOptions && breedOptions.breedOption2 && 
      <div className="flex-content">
        You selected breedOption2 :{breedOptions.breedOption2.label}
        </div>}
  </div> 
</div>     
    )
}

export default Home;