//動畫用
  // 監聽滾輪事件
  window.addEventListener('scroll', handleScroll);

  function handleScroll() {
    const targetSection = document.querySelector('.target-section');
// 文本
    const targetSection1 = document.querySelector('.target-section1');
// logo
      
    const sectionTop = targetSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    // 當滾輪滑動到指定位置時觸發動畫
    if (sectionTop < windowHeight * 0.8) {
      targetSection.classList.add('show');        
      // 可以在這裡添加其他的動畫效果
    }

    if (sectionTop < windowHeight * 0.8) {
        targetSection1.classList.add('rotate-in-center');                     
      }

  }
