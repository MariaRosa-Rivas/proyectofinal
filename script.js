
const ACCESS_TOKEN ="ya29.a0Aa4xrXO1u5dnRKtmE6WgwkER-qZ-XSAmxBmC2yPCMXHAzFt6gBgZ22GWdtz7GiTBqZzvgGRMaQUNjt-SjybdiE9lhrelVHtIfVSfFa3_t1TFgQhN_pAlR1fIswlresUEfifArMBT8Fdg2AneGv1ObCvZrpJKaCgYKATASARASFQEjDvL9FRIun0kRuSw_NSug5mMyaQ0163";
const SHEET_ID = "1fME2ibB5-tY9wzeGdUZrYFm2h4Iv5wXZzVn4xO-K8xw";

function onRegistrarDato() {
    const NombreApellido = document.getElementById("nombre-apellido").value;
    const Email= document.getElementById("E-mail").value;
    const Consulta = document.getElementById("consulta").value;

  let data = {};
  
  let values = [];
  
  let fila = [NombreApellido, Email, Consulta];

  values.push(fila);
  
 
  data.range = "consulta";
  
  data.majorDimension = "ROWS";
  data.values = values;
  fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/consulta:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(data)
    }
  ).then(function (response) {
    response.json().then(function (data) {

    });
  });


  document.getElementById("nombre-apellido").value = "";
  document.getElementById("E-mail").value = "";
  document.getElementById("consulta").value = "";
 
};
