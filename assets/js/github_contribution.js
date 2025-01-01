const username = 'jiyeonyooo'; // GitHub 사용자명
const year = 2024; // 원하는 년도

fetch(`https://api.github.com/users/${username}/events`)
  .then(response => response.json())
  .then(data => {
    // 활동 내역에서 특정 년도만 필터링
    const filteredEvents = data.filter(event => {
      const eventDate = new Date(event.created_at);
      return eventDate.getFullYear() === year;
    });

    console.log(filteredEvents); // 해당 년도의 활동 내역 출력
    // 이 데이터를 기반으로 그래프를 그릴 수 있습니다.
  });
