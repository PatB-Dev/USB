fetch('devices.json')
    .then(response => response.json())
    .then(data => {
        var deviceList = document.getElementById("device-list");
        for (var i = 0; i < data.length; i++) {
            var device = data[i];
            var deviceName = device["Device Name"];
            var deviceDesc = device["Device Description"];
            var deviceHWID = device["Device Hardware ID"];

            var row = deviceList.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            cell1.innerHTML = deviceName;
            cell2.innerHTML = deviceDesc;
            cell3.innerHTML = deviceHWID;
        }
    })
    .catch(error => {
        console.log(error);
    });
