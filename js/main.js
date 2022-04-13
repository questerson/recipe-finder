//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


//const clear = document.getElementById('stuff')
 // stuff.innerHTML = ""


 







document.querySelector('button').addEventListener('click', getFood)

function getFood(){
  // clear the li out of "example" ul 
  const list = document.getElementById('example');
  list.innerHTML = '';
     let food = document.querySelector('input').value
     console.log(food)
     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      



      // let max = data.meals.length-1
      
      document.querySelector('h2').innerText = data.meals[0].strMeal
      document.querySelector('img').src = data.meals[0].strMealThumb
     document.querySelector('h3').innerText = data.meals[0].strInstructions

     // let result = ""
     //  for(let i = 1; i < 15; i++)
   //   if( data.meals[counter]['strIngredient' + i] !== null & data.meals[counter]['strIngredient' + i] != "") {
      // result += data.meals[counter]['strIngredient' + i]
      //         if (data.meals[counter]['strMeasure' + i] !== null){
      //             result += " (" + data.meals[counter]['strMeasure' + i] + "), "
            
      //             //creat new li 
      //             const newLi = document.createElement('li')
                  
      //             // pass the content 
          
      //             newLi.textContent = result
      //             example.appendChild(newLi);
      //             result = ''
      //         }
      //     }




    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }
  document.querySelector('.arrow-right').addEventListener('click', getmeal2)
   let counter = 1
   function getmeal2(){
    // clear the li out of "example" ul 
    const list = document.getElementById('example');
    list.innerHTML = '';
  
    let meal = document.querySelector('input').value
    console.log('test')
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let max = data.meals.length-1
      if( counter < max) {counter ++
        console.log(max)
      console.log(counter)
    }
      else if(counter === max){
        counter = 0
      }
      document.querySelector('h2').innerText = data.meals[counter].strMeal
      document.querySelector('img').src = data.meals[counter].strMealThumb
      document.querySelector('h3').innerText = data.meals[counter].strInstructions
      let result = ""
          for(let i = 1; i < 15; i++)
              if( data.meals[counter]['strIngredient' + i] !== null & data.meals[counter]['strIngredient' + i] != "") {
          result += data.meals[counter]['strIngredient' + i]
                  if (data.meals[counter]['strMeasure' + i] !== null){
                      result += " (" + data.meals[counter]['strMeasure' + i] + "), "
                
                      //creat new li 
                      const newLi = document.createElement('li')
                      
                      // pass the content 
              
                      newLi.textContent = result
                      example.appendChild(newLi);
                      result = ''
                  }
              }
          
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }
  
  //     let result = ""
  //     for(let i = 1; i < 15; i++)
  //     if( data.meals[0]['strIngredient' + i] !== null) {
  //       result += data.meals[0]['strIngredient' + i]
  //               if (data.meals[0]['strMeasure' + i] !== null){
  //                   result += " (" + data.meals[0]['strMeasure' + i] + "), "
  //     document.querySelector("ul").innerText = result 
  //    }
      
  // }
  
  
  document.querySelector('.arrow-left').addEventListener('click', getmeal3)
  
  function getmeal3(){
   // clear the li out of "example" ul 
   const list = document.getElementById('example');
   list.innerHTML = '';
    let meal = document.querySelector('input').value
    console.log(counter)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let max = data.meals.length -1
      if(counter > 0 ){counter --}
      else if(counter <= 0){counter = max}
      console.log(counter)
      document.querySelector('h2').innerText = data.meals[counter].strMeal
      document.querySelector('img').src = data.meals[counter].strMealThumb
      document.querySelector('h3').innerText = data.meals[counter].strInstructions
  
      let result = ""
      for(let i = 1; i < 15; i++)
          if( data.meals[counter]['strIngredient' + i] !== null & data.meals[counter]['strIngredient' + i] != "") {
      result += data.meals[counter]['strIngredient' + i]
              if (data.meals[counter]['strMeasure' + i] !== null){
                  result += " (" + data.meals[counter]['strMeasure' + i] + "), "
            
                  //creat new li 
                  const newLi = document.createElement('li')
                  
                  // pass the content 
          
                  newLi.textContent = result
                  example.appendChild(newLi);
                  result = ''
              }
          }
  
  
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }