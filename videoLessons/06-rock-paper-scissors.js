     const randomNumber = Math.random();
            let computerMove = '';
            let result = '';

                if (randomNumber >=0 && randomNumber < 1/3){
        computerMove ='rock';
      } else if (randomNumber >=1/3 && randomNumber < 2/3){
        computerMove = 'paper';
      } else if (randomNumber >=2/3 && randomNumber < 3){
        computerMove = 'scissors';
      }

        /*
        STRATEGY FOR JS
        * Think about what steps needed to do
        * Converting those steps into code
        */

        /*
        STEPS (ALGORITHM): When the buttons are clicked 
        * Computer randomly selects a move
        * Compare the moves to get the result
        * Display the result in a popup
        */

        //Math.random() generates aa random number between 0 and 1 ( 0 >= and <= 1)

        //dividing the condition into 3
        //if random number between 0 and 1/3  - rock
        //if between 1/3 and 2/3 - paper
        // if between 2/3 and 1 - scissors

        //LOGICAL OPERATORS will be needed
        //e.g 
        //if (randomNumber >=0 also randomNumber <= 1/3){}
        //to check two both booleans value are true, with use the AND Operator &&
        // console.log(booleanTrue && booleanTrue) - (true)
        // console.log(booleanTrue && booleanFalse) - output (false)



  //STEP 1 - Computer randomly selects a move

  //const randomNumber = Math.random();

    /*   if (randomNumber >=0 && randomNumber < 1/3){
        console.log('rock');
      } 
      else if (randomNumber >=1/3 && randomNumber < 2/3){
        console.log('paper');
      } 
      else if (randomNumber >=2/3 && randomNumber < 3){
        console.log('scissor');
      } 

      //STEP 2 - Compare the moves to get the result
      //instead of console.log - variable with be used

      const randomNumber = Math.random();
      let computerMove = ""
      //to make it accessible to all conditions

      if (randomNumber >=0 && randomNumber < 1/3){
        computerMove('rock');
      } 
      else if (randomNumber >=1/3 && randomNumber < 2/3){
        computerMove('paper');
      } 
      else if (randomNumber >=2/3 && randomNumber < 3){
        computerMove('scissor');
      }
      console.log(computerMove);


      let result = ""
      if (computerMove === 'rock'){
        result = 'Tie';
      } else if (computer === 'paper'){
        result = 'You Win';
      } else if (computerMove===Scissors){
        result = 'You Lose';
      }

      alert(result)
      */