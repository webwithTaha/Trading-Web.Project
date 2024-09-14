let slides = document.querySelectorAll(
    ".reviews .flex .slides-container .slide"
  );
  
  let index = 0;
  
  next = () => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  };
  
  prev = () => {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
  };
  
  let monthBtn = document.querySelector(
    ".pricing .toggle-buttons .month-btn "
  );
  
  let yearBtn = document.querySelector(
    ".pricing .toggle-buttons .year-btn"
  );
  
  let monthlyPlan = document.querySelectorAll(
    ".pricing .box-container .box .month"
  );
  
  let yearlyPlan = document.querySelectorAll(
    ".pricing .box-container .box .year"
  );
  
  yearBtn.onclick = () => {
      monthBtn.classList.remove('active');
      yearBtn.classList.add('active');
  
      monthlyPlan.forEach(mo => {
          mo.style.display = "none"
      })
  
      yearlyPlan.forEach(yr => {
          yr.style.display = "block"
      })
  }
  
  monthBtn.onclick = () => {
      yearBtn.classList.remove('active');
      monthBtn.classList.add('active');
  
      yearlyPlan.forEach(mo => {
          mo.style.display = "none"
      })
  
      monthlyPlan.forEach(yr => {
          yr.style.display = "block"
      })
  }