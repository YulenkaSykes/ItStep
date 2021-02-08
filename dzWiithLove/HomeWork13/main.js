// исключает повторение Set
// сранивать массивы только циклом, 3 равно не сработает;

// function eventKeys(func){

//     const needToPress = [...arguments].filter(e=>typeof e == "string");
//     const pressed = [];

//     window.addEventListener("keydown", function(e){
//        pressed.push(e.key);
//        let pressedUnique = Array.from( new Set(pressed) );
    
//        needToPress.every(el=>pressed.some(elm => elm == el )) ? func() : false;

//        window.addEventListener("keyup", function(evt){
//            pressedUnique = pressedUnique.filter(elmnt => !elmnt == evt.key);
//        });

//     });

// }

// eventKeys(()=>{console.log("Hello")}, 'q', 'w');