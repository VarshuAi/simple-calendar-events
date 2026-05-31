
            const grid = document.getElementById('cal-days');
            for(let i=1; i<=30; i++) {
                const day = document.createElement('div');
                day.className = 'cal-day';
                day.innerText = i;
                day.addEventListener('click', () => {
                    alert('Day ' + i + ' selected!');
                });
                grid.appendChild(day);
            }
        