import React from 'react'

const NOTES = () => {


    let name: string; //string
    let age: number; //number
    let isStudent: boolean; //bool
    let hobbies: string[]; //array
    let role: [number, string]; //tuple
    
    //object...NOPE! INTERFACE / TYPE
    
    type Person = {
      name: string,
      age?: number
    }
    
    //OR interface
    //important NO = IN INTERFACE
    
    //if you want to add stuff from a 
    //type to an interface, you go:
    interface anotherPerson extends X {
      name: string,
      age?: number
    }
    
    type X = {
      a: string,
      b: number
    }
    
    //if you want to add stuff from 
    //and interface to a type, you go:
    
    interface aThirdPerson {
      name: string,
      age?: number
    }
    
    type Y = aThirdPerson & {
      c: string,
      d: number
    }
    
    
    // let Z: Y = {
    //   c: 'efdas!',
    //   d: 54
    // }
    
    let Y = {c: 'bob', d: 54}
    
    //obj
    let person: Person = { 
      name: 'Max',
      age: 30,
    }
    
    //arr of obj
    let lotsOfPeople: Person[] = [
      {
        name: 'Neil',
        age: 3
      },
      {
        name: 'Poppy',
        age: 86
      },
      {
        name: 'Wilbur',
      }
    ];
    
    let personName: unknown;
    
    //union
    let union: number | string;
    
    //two ways to define a function:
    //1. function declaration
    let printName: (name:string) => never;
    

  return (
    <div>NOTES</div>
  )
}

export default NOTES