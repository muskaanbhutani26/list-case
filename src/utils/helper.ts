import { IBreed } from "../interfaces/breed";

export const getTransformBreeds = (breedsItems: IBreed[]) => {
    return breedsItems.map((breed) => {
        return {
          value: breed.id,
          hint: breed.temperament,
          label: breed.name,
          color: setColor(parseInt(breed.id))
          
        }
    });
}

const getColor = (idN: number) => {
    if(idN === 2) {
        return "green";
    } else if(idN === 3){
        return "blue";
    } else {
        return "yellow";
    }
    
}

const setColor = (id: number) => {
    if(id > 3){
        for (let i=id; i>=1; i=i-3){
            if(i === 1) {
                return "yellow";
            } else if(i === 2){
                return "green";
            } else if(i === 3){
                return "blue";
            }
        }
    } 
    else {
        return getColor(id);
    }
}
