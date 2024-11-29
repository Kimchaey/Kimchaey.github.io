// projects.js

// 프로젝트 데이터 가져오기
fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const portfolioGrid = document.getElementById('portfolio-grid');
    portfolioGrid.innerHTML = ''; // 초기화

    data.forEach(project => {
      // 카드 생성
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="card-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      `;

      // 클릭 이벤트로 팝업 표시
      card.addEventListener('click', () => {
        openPopup(project);
      });

      portfolioGrid.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading project data:', error));

// 팝업 열기 함수
function openPopup(project) {
    const popup = document.getElementById('popup');
    const popupDetails = document.getElementById('popup-details');
  
    popupDetails.innerHTML = `
      <h2>${project.title}</h2>
      <img src="${project.image}" alt="${project.title}">
      <p>${project.detailedDescription}</p>
      <ul class="tech-stack">
        ${project.technologies
          .map(
            tech => `
          <li>
            <i class="${tech.icon}"></i> ${tech.name}
          </li>
        `
          )
          .join('')}
      </ul>
      <a href="${project.github}" target="_blank" class="github-icon">
        <i class="fab fa-github"></i>
      </a>
    `;
  
    popup.classList.add('show');
  }

// 팝업 닫기 함수
function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('show');
}
