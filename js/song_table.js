let song_list;

(function load_table() {

  let song_table_req = new XMLHttpRequest();
  song_table_req.onreadystatechange = () => {
    if (this.readyState === 4 && this.status === 200) {
      song_list = JSON.parse(this.responseText);
      make_album_table(false); // alphabetical order
    }
  }
  song_table_req.open('GET', 'js/song_list.json', true);
  song_table_req.send();
})();

// have to copy paste this from album_table.js because ES6 module imports are not supported???
function make_album_table(reverse) {
  let table_list = reverse ? song_list.reverse() : song_list;
  let table = document.getElementById("misc-songs");
  table.innerHTML += `
  <tr> 
    <th>name</th>
    <th>info</th>
    <th>link</th>
  </tr>`;

  for (let i = 0; i < table_list.length; i++) {
    let song = table_list[i];
    let formatted_info = song.info.replace(/\n/g, '<br>')
    table.innerHTML += `
    <tr>
      <td>${song.name}</td>
      <td>${formatted_info}</td>
      <td><a href="${song.link}">download coming soon</a></td>
    </tr>`;
  }
}