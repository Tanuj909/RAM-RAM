const heading=React.createElement("h1",{},"Ram Ram bhai react ki taraf se")
    //for creating a new element we use document.createElement() in js 
    // in Reactjs we use React.createElement("" , {} , "")it takes three argument first is tag name , object and what you want to insert in tag
    // {} at this place we can give attributes to the tag like id class etcc......

console.log(heading); //returns an object

    const root = ReactDOM.createRoot(document.getElementById("root"))
    // const root: This is like reserving a spot and giving it the name "root."

    // ReactDOM.createRoot: This is React's way of saying, "I'm creating a new space for my stuff."

    // (document.getElementById("root")): It's saying, "I want to put my stuff in the HTML element with the ID 'root.'"

    // So, in plain terms, the second line is creating a space called root in your webpage where your React components will appear, and it's pointing to an HTML element with the ID "root" where this space will be.

    root.render(heading)   //yha pr heading object, Html mei conevert hog and puts up into the dom



//lets make another html css using react

// {/* <div id ="parent">

//     <div id = "child">

//         <h1> H1 tag ke andar hai ladder </h1> 

//     </div>
    
// </div> */}

const parent = React.createElement("div" , {id :"parent"},  
  React.createElement("div" , {id: "child"} , 
  React.createElement("h1", {} , "Ram ram ladder h1 tag mei aagye hai")
  )
  )

  root.render(parent)


//lets make another html css using react

// {/* <div id ="parent">

//     <div id = "child">

//         <h1> H1 tag ke andar hai ladder </h1> 
//         <h2> H1 tag ke andar hai ladder </h2> 

//     </div>
    
// </div> */}

const parent1 = React.createElement("div" , {id :"parent"},  
React.createElement("div" , {id: "child"} , 
[React.createElement("h1", {} , "Ram ram ladder h1 tag mei aagye hai"),React.createElement("h2", {} , "Ram ram ladder h2 tag mei aagye hai")]
)
)

//yha humei 2 second div mei 2 tag add krne the h1 h2 toh isliye humnei 2nd div ka 3rd place pr array [] create kr deingei aur fr uss array mei h1 h2 tag daal deingei

root.render(parent1)

const parent2 = React.createElement("div",{},
React.createElement("div",{},
React.createElement("div",{}, [React.createElement("p",{},"p1 ke andr aagya hu"), React.createElement("ul",{},
[React.createElement("li",{},"first li"),React.createElement("li",{},"second li")])]
)))

root.render(parent2)

//yha 3 div bnai hai 3rd div mei 1 paragraph aur 1 unordered list hai aur uss unordered list mei 2 ordered list hai



const parent3 = React.createElement("div",{},[
React.createElement("div",{},
React.createElement("div",{}, [React.createElement("p",{},"p1 ke andr aagya hu"), React.createElement("ul",{},
[React.createElement("li",{},"first li"),React.createElement("li",{},"second li")])]
)),
React.createElement("div",{},
React.createElement("div",{}, [React.createElement("p",{},"p1 ke andr aagya hu"), React.createElement("ul",{},
[React.createElement("li",{},"first li"),React.createElement("li",{},"second li")])]
))])

root.render(parent3)

//ek div ke andar 2 div aur dono div ke andar , yha 3 div bnai hai 3rd div mei 1 paragraph aur 1 unordered list hai aur uss unordered list mei 2 ordered list hai