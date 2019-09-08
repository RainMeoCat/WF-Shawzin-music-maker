var SongFlag = 0
var SongScale = 1

function NewSongQuery() {

    for (i = 1; i <= 16; i++) {
        let tr = tab.tHead.children[0],
            tr2 = document.getElementById('tbm').children[0],
            th = document.createElement('th'),
            td = document.createElement('td');
        th.innerHTML = tab.rows[0].cells.length + 1;
        td.classList.add("editMe")
        td.innerHTML = ''
        tr.appendChild(th);
        tr2.appendChild(td);

    }
    // open loop for each row and append cell
}

function create_hell_song() {
    const data = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    const notes = "BRhJCSKEUkiM";
    const totalValues = Math.pow(data.length, 2);
    let output = String(Math.floor(Math.random() * 7) + 1);
    for (let i = 0; i < 100; i++) {
        output += notes[Math.floor(Math.random() * notes.length)];
        const c1 = data[Math.floor(i / data.length)];
        const c2 = data[i % data.length];
        output += c1 + c2;
    }
    document.getElementById("HellSongString").value = output
    const input = document.querySelector('#HellSongString');
    input.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
        console.log('複製成功');
        $("[data-toggle='HSSpopover']").popover("toggle");
        setTimeout(function () {
            $("[data-toggle='HSSpopover']").popover('hide');
        }, 2000);
    }
}

function copySong() {
    const input = document.querySelector('#SongString');
    input.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
        console.log('複製成功');
        $("[data-toggle='SSpopover']").popover("toggle");
        setTimeout(function () {
            $("[data-toggle='SSpopover']").popover('hide');
        }, 2000);
    }
}

function FlagMove(direction, moveNum) {

    if (direction == "-" && SongFlag != 0) {
        tab.rows[0].cells[SongFlag].style.background = "#343a40";
        SongFlag--;
        document.getElementById("FlagJump").value--
        tab.rows[0].cells[SongFlag].style.background = "red";
    } else if (direction == "+" && SongFlag != tab.rows[0].cells.length - 1) {
        tab.rows[0].cells[SongFlag].style.background = "#343a40";
        SongFlag++;
        document.getElementById("FlagJump").value++
        tab.rows[0].cells[SongFlag].style.background = "red";
    }
}

function FJump(e) {
    let tempF = document.getElementById(e).value
    if (tempF >= tab.rows[0].cells.length - 1) {
        let tableng = tab.rows[0].cells.length
        tab.rows[0].cells[SongFlag].style.background = "#343a40";
        SongFlag = tableng - 1;
        tab.rows[0].cells[SongFlag].style.background = "red";
        document.getElementById(e).value = tableng
    } else {
        tab.rows[0].cells[SongFlag].style.background = "#343a40";
        SongFlag = tempF - 1;
        tab.rows[0].cells[SongFlag].style.background = "red";


    }

}

function ScaleChange(SN, id) {
    if (SN != SongScale) {
        var NT = document.getElementById('NameTable')
        document.getElementById("ScaleMenu").innerHTML = document.getElementById("SC" + SN).innerHTML

        document.getElementById("SC" + SongScale).classList.remove("active")
        document.getElementById("SC" + SN).classList.add("active")
        SongScale = SN
        $("#NameTable").fadeOut("normal", function () {
            NT.tHead.children[0].innerHTML = "<th colspan=2>" + document.getElementById("SC" + SN).innerHTML + "</th>"
            var TBFlag = 2

            for (i = 11; i >= 0; i--) {

                NT.rows[TBFlag].cells[1].innerText = notename[SN][i]
                TBFlag++
            }
        });
        $("#NameTable").fadeIn("normal");
    }



}

function SongInput(input){

tab.rows[1].cells[SongFlag].innerHTML=input
}