/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.


class SomeObject {

    constructor(opts){
      this.opts = opts
    }
    
    getKeys(){
    return Object.keys(this.opts)
    }
  };
  
  const obj = new SomeObject(),x = obj instanceof SomeObject

  console.log(x)