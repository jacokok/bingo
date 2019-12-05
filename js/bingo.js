$(function () {

    var bingo = ["Handdoeke", "Badmatjie", "Laken", "Pas laken", "Kussing slope", "Vaddoeke", "Waslappe", "Sout potjie", "Peper potjie", "Asyn houer", "Olie houer", "Koek pan", "Muffin pan", "Brood pan", "Ys houer", "Messe", "Vurke", "Lepels", "Tee koppies", "Tee pot", "Tee lepels", "Koek staander", "Glase", "Wit wyn glase", "Rooi wyn glase", "Whiskey glase", "Tupperware", "Koek roller", "Waspoeier houer", "Koek blik", "Koffie bekers", "Tee koppie", "Sny bord", "Hour bord", "Kaas bord", "Kaas Mes", "Sop lepel", "Mash drukker", "Sker", "Spatula", "Kaas snyer", "Rasper", "Sif", "Maatbeker", "Maat lepels", "Mandjies", "Caserole", "Cake lifter", "Op-skep bakke", "Tert bak", "Koffie houer", "Tee houer", "Kerse", "Plantjies", "Handy Andy", "Waspoeier", "Sunlight Liquid", "Doom", "Speserye", "Blompot", "Kussings", "Lekker ruik stokkies", "Houtlepel", "Borde", "Klein bordjies", "Bakkies", "Sop Bakkies", "Melk beker", "Suiker pot"];

    var w = 5;
    var h = 5;
    var numberOfBingo = 30;

    var content = $("#content");
    var existing = [];

    for (var c = 0; c < numberOfBingo; c++) {
        existing = [];
        var table = "<table>";
        if (c > 0 && c % 2 == 0) {
            table = "<table class='pagebreak'>";
        }
        table += "<thead><tr><td>B</td><td>I</td><td>N</td><td>G</td><td>O</td></tr></thead><tbody>";
        for (var i = 1; i <= w; i++) {
            table += "<tr>"
            for (var j = 1; j <= h; j++) {
                table += "<td>";
                if (i == 3 && j == 3) {
                    table += "<img src='img/ring.png' style='height: 70px;'></img>";
                }
                else {
                    table += getRandomWord();
                }
                table += "</td>";
            }

            table += "</tr>"
        }

        table += "</tbody></table>"
        content.append(table);
    }

    function getRandomWord() {
        var retry = 0;
        var word = bingo[Math.floor(Math.random() * bingo.length)];
        while (existsInArray(word) && retry < 10000) {
            word = bingo[Math.floor(Math.random() * bingo.length)];
            retry++;
        }
        existing.push(word);
        return word;
    }

    function existsInArray(val) {
        for (var i = 0; i <= existing.length; i++) {
            if (existing[i] == val) {
                return true;
            }
        }
        return false;
    }

});