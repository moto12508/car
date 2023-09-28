   
        const menuHamburger = document.querySelector(".menu-hamburger")
        const navLinks = document.querySelector(".nav-links")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })//導行列 漢堡
//-----------------------------------------------------------------------
function myFunction(x) {
    
  x.classList.toggle("change");
  console.log("aa");
} //動態漢堡   
// ------------------------------------------------------------------------
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  // 導航列隱藏功能
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.transition = "top 0.3s ease, transform 0.3s ease";  
  } else {
    document.getElementById("navbar").style.top = "-200px";
    document.getElementById("navbar").style.transition = "top 0.3s ease, transform 0.3s ease";
    
  }
  
  // 變色功能
  if (currentScrollPos > 200) {
    var element = document.getElementById("navbar");
    element.style.backgroundColor = "rgba(0,0,0, 0.8)";
  
  } else {
    var element = document.getElementById("navbar");
    element.style.backgroundColor = "rgba(0, 0, 0,0.5)";
  
  }
  
  prevScrollpos = currentScrollPos;
};

// 是用id抓的
// -------------------------------------------------------------
function scrollToTarget() {
      // 使用JavaScript中的scrollIntoView()方法滑動到目標元素
      const targetElement = document.getElementById('target');
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }




//按鈕滑到指定頁面


// -------------------------------------------------------------

// 輸入框效果
    const labels = document.querySelectorAll('label');
    // 全部

    labels.forEach(label => {
        label.innerHTML = label.innerText
            .split('')
            .map((letter, i) =>
                `<span style="transition-delay:${i * 100}ms">${letter}</span>`
            )
            .join('');
    });

// -------------------------------------------------------------
    
// Get the modal

// Get the modal
// var modal1 = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal1) {
//     modal1.style.display = "none";
//   }
// }


// 會員登入外圍關閉

// 沒用暫時放棄

//---------------------------------------------------------------------------------------------------------


