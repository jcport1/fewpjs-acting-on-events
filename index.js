// Your code here

//move dodger to the left 

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  }); 

  //move dodger to the right

  function moveDodgerRight () {
      let rightNumbers = dodger.style.left.replace("px", "");
      let right = parseInt(rightNumbers, 10);
      if (right > 0){
          dodger.style.left = `${right + 1}px`;
        }
      }
      
      document.addEventListener("keydown", function(e) {
          if (e.key === "ArrowRight") {
              moveDodgerRight();
            }
          }); 
      