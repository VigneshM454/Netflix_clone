const b1=document.getElementById('b1')
const toggle1=document.querySelectorAll('[name="toggle1"]')
const togbtn1=document.querySelectorAll('.togbtn1')
const bgroup=document.querySelectorAll('.bgroup')
console.log(toggle1);
bgroup.forEach((elem,i)=>{
    elem.onclick=()=>{
        //j===i toggle
        //j!==i add
        toggle1.forEach((f,j)=>{
            if(j===i){
                toggle1[j].classList.toggle('tog1')
                togbtn1[i].innerText= toggle1[i].classList.contains('tog1')? '+':'x'
            }
            else{
                toggle1[j].classList.add('tog1')
                togbtn1[j].innerText= toggle1[j].classList.contains('tog1')? '+':'x'
            }
        })
      }
})

//b1.onclick=()=>{
  //  if(toggle1.classList.contains('tog1'))
  //  toggle1.classList.toggle('tog1')
 //   togbtn1.innerText= toggle1.classList.contains('tog1')? '+':'x'
//}/