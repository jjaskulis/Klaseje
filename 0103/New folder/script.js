let filtered = MOCK_DATA.filter(function (item) {
    let isChina = (item.country == "China");
    let endsWithCom = item.email.slice(-4) == ".com";

    return isChina && endsWithCom;
})

let email = filtered.map(function (item) {
    return item.email;
})