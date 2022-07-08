export const useMove = (name:string | number):void => {

    switch(name){
       case 'up':  
       case 38:
           dispatch(up());
       break
       case 'down':
       case 40:  
           dispatch(down());
       break
       case 'left':  
       case 37:
           dispatch(left());
       break
       case 'right':  
       case 39:
           dispatch(right());
       break
       default: throw new Error('Something went wrong')
   }
}   