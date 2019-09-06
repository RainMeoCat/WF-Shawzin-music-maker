function NewSongQuery() {
    var tab = document.getElementById('SongTable')
    

    for (i = 1;i<=16;i++){
 let tr = document.getElementById('SongTable').tHead.children[0],
        tr2 =  document.getElementById('tbm').children[0],
        th = document.createElement('th'),
        td = document.createElement('td');
    th.innerHTML = tab.rows[0].cells.length+1;
    td.innerHTML = ''
    tr.appendChild(th);
    tr2.appendChild(td);
    }
   

    // open loop for each row and append cell

}
