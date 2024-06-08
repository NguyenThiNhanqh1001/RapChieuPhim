var jsonFilePath = './dtb.json';
fetch(jsonFilePath)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const movies = data.cinema.movies;

        movies.forEach(movie => {
            const title = movie.title;
            const thumbnail = movie.thumbnail;
            const origin = movie.origin;
            const genre = movie.genre;
            const release_date = movie.release_date;
            const showtime = movie.showtime;
            const time = movie.time;
            const ageLimit = movie["age-limit"];

            // Hiển thị dữ liệu hoặc làm gì đó với các biến
            const contentDiv = document.getElementsByClassName('hinhanh');
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('filmm');
            movieDiv.innerHTML = `
                   <div class="hinhanh">
                    <img src="${thumbnail}" alt="${title}">
                </div>
                <div class="noidung">
                    <div class="phandau">
                        <p>${genre.join(', ')}</p>
                        <p>${time} phút</p>
                        <p class="categoryy">2D</p>
                    </div>
                    <h4>${title} - P${ageLimit}</h4>
                    <p>Xuất sứ <span>${origin}</span></p>
                    <p>Khởi chiếu <span>${release_date}</span></p>
                    <p class="text-danger">${ageLimit}.</p>
                    <p>Lịch chiếu:</p>
                    ${showtime.map(time => `<button>${time}</button>`).join('')}
                </div>
            `;
            document.body.appendChild(movieDiv);
        });
    });