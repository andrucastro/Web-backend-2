const person = { 
    name:'Max',
    age: 29, 
    greet() {
        console.log('hi, I am ' + this.name)
    } 
};

const hobbies = ['Sports', 'Cooking']; 

// tray to remeberd how map works 
//console.log(hobbies.map(hobby => 'Hobby: ' + hobby));  Modify all the elements of the array 
//console.log(hobbies); 

//hobbies.push('programming');  to Add a new element to the array 

/*const toArray = (...args) => { Rest let rhe paremeters open to be defined  / create a copy of an array 
    return args 
}*/



