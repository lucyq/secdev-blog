function displayEntries(entries) {
  console.log(entries);
  var count = 0;
  var row = null;
  for (var e of entries) {
    if (count % 2 === 0) {
      // make new row
      if (row !== null) {
        $('#entries').append(row);
      }
 
      row = document.createElement('div');
      row.className = 'row';
    }
    
    var entry = document.createElement('div');
    entry.className = 'col entry';

    entry.innerHTML = '<img src="'+ e.image + '"/>'

    row.append(entry);


    count++;
  }

    $('#entries').append(row);

}