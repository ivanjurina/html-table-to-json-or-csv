function tableToCSV(table) {
    let csv = [];
    for (let i = 0; i < table.rows.length; i++) {
      let row = [], cols = table.rows[i].cells;
      for (let j = 0; j < cols.length; j++) {
        let text = cols[j].innerText.replace(/"/g, '""');
        row.push('"' + text + '"');
      }
      csv.push(row.join(";"));
    }
    return csv.join("\n");
  }
  
  function tableToJSON(table) {
    let jsonData = [];
    let headers = [];
    for (let i = 0; i < table.rows[0].cells.length; i++) {
      headers[i] = table.rows[0].cells[i].innerText.trim();
    }
    for (let i = 1; i < table.rows.length; i++) {
      let tableRow = table.rows[i];
      let rowData = {};
      for (let j = 0; j < tableRow.cells.length; j++) {
        rowData[headers[j]] = tableRow.cells[j].innerText.trim();
      }
      jsonData.push(rowData);
    }
    return JSON.stringify(jsonData, null, 2);
  }
  
  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
  
  document.addEventListener('contextmenu', function(e) {
    window.rightClickedElement = e.target;
  }, true);
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    let element = window.rightClickedElement;
    while (element != null && element.nodeName !== "TABLE") {
      element = element.parentElement;
    }
    if (element != null && element.nodeName === "TABLE") {
      if (request.action === "copyTableCSV") {
        const csvData = tableToCSV(element);
        copyToClipboard(csvData);
      } else if (request.action === "copyTableJSON") {
        const jsonData = tableToJSON(element);
        copyToClipboard(jsonData);
      }
    }
  });
  

  