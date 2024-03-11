// tailwind website 
// 1.navbar 
// 2.countdown 

// 1.navbar start
    function Menu(e) {
        let list = document.getElementById('mobilemenu');
        e.name === 'menu' ? (e.name = "close", list.classList.add('top-[120px]'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
      }
// 1.navbar end 


// 2.countdown part start 
function countdown(first,second,third,four) {
    const studentsElement = document.getElementById('timer1');
    const booksElement = document.getElementById('timer2');
    const coursElement = document.getElementById('timer3');
    const teachersElement = document.getElementById('timer4');


    const interval = setInterval(() => {
      studentsElement.innerText = `${first}`;
      first++;

      if (first == 0, first>96) {
        clearInterval(interval);
      }        
    }, 10);

    const interval1 = setInterval(() => {
      booksElement.innerText = `${second}`;
      second++;

      if (second == 0, second>70) {
        clearInterval(interval1);
      }        
    }, 10);


    const interval2 = setInterval(() => {
      coursElement.innerText = `${third}`;
      third++;

      if (third == 0, third>65) {
        clearInterval(interval2);
      }        
    }, 10);



    const interval4 = setInterval(() => {
      teachersElement.innerText = `${four}`;
      four++;

      if (four == 0, four>130) {
        clearInterval(interval4);
      }        
    }, 10);
 
  }

  countdown(0,0,0,0);
// 2.countdown part end
  





