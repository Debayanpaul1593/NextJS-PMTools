/**
 * store item as a string*/

export function storeAsString(key, val){
  try{
    localStorage.setItem(key, val);
  }catch(err){
    console.log('Failed to store item', err);
  }
}


export function loadAsString(key){
  try{
    return localStorage.getItem(key);
  }catch{
    return false;
  }
}

export function store(key, val){
  try{
    const str = JSON.stringify(val);
    localStorage.setItem(key, str);
  }catch(err){
    console.log('Failed to store item', err);
  }
}

export function load(key){
  try{
    return JSON.parse(localStorage.getItem(key));
  }catch{
    return false;
  }
}


