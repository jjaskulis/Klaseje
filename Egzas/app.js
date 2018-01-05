//formos elementai
let result = document.getElementById(`result`);
let nameInput = document.getElementById(`name-input`);
let dateInput = document.getElementById(`date-input`);
let submitBtn = document.querySelector(`.btn-show`);

//laiko dalykai
let today = new Date();
let weekday = [`sekmadienį`, `pirmadienį`, `antradienį`, `trečiadienį`, `ketvirtadienį`, `penktadienį`, `šeštadienį`];



submitBtn.addEventListener(`click`, showResult);

function showResult() {
    let resultHtml = ``;
    let name = nameInput.value;
    let date = dateInput.value;
    let yearNow = today.getFullYear();

    let birthYear = date.split(`-`)[0];
    let birthMonth = date.split(`-`)[1] - 1;
    let birthDay = date.split(`-`)[2];

    if (!name) {
        resultHtml += `<p>Neįvestas vardas!</p>`;
        nameInput.className = `not-valid`;
    }

    if (!date) {
        resultHtml += `<p>Neįvesta gimimo data!</p>`;
        dateInput.className = `not-valid`;
    } else if (birthYear <= 1918 || birthYear > yearNow) {
        resultHtml += `<p>Neteisinga gimimo data!</p>`;
        date = ``;
        dateInput.className = `not-valid`;
    }

    if (name && date) {
        let birthDate = new Date(birthYear, birthMonth, birthDay);
        let age = yearNow - birthYear;
        let day = weekday[birthDate.getDay()];
        let daysElapsed = Math.round((today.getTime() - birthDate.getTime()) / (1000 * 3600 * 24));

        nameInput.className = ``;
        dateInput.className = ``;

        resultHtml += `
            <h2>${name}</h2>
            <p>Gimtadienis: ${date}</p>
            <p>Amžius: ${age}</p>
            <p>Gimė ${day} prieš ${daysElapsed} dienų.</p>
        `
        resultHtml += getPeopleBornOn(birthDay, birthMonth, PEOPLE);

    }

    result.innerHTML = resultHtml;
}

function getPeopleBornOn(day, month, list) {
    let html = `<p></p>
    Žmonės gimę šią dieną:  `;
    let sameBirthdays = ``;

    sameBirthdays = list.filter(function (person) {
        let sameDay = day == person.gimimoDiena.split(`-`)[2];
        let sameMonth = month == person.gimimoDiena.split(`-`)[1]
        return sameDay && sameMonth;
    })

    if (sameBirthdays.length > 0) {
        sameBirthdays.forEach(function (person) {
            html += `${person.vardas} ${person.pavarde}, `
        })
        html = html.slice(0, -2) + `.`;
    }else{
        html += `tokių nėra. Valio!`
    }
    return html;
}