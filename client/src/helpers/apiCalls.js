import axios from "axios";

export async function sendMail(info) {
  try {
    await axios.post(
      "https://us-south.functions.appdomain.cloud/api/v1/web/ICC_IBM_dev/default/email-api-sendgrid",
      {
        recipientEmail: "lsoares@ibm.com,kelvinsilva@ibm.com",
        subject: "Uma de nossas demos foi acessada!",
        html: `<head>  <style>    body {      font-family: arial, sans-serif;    }    table {      border-collapse: collapse;      width: 100%;    }    td,    th {      border: 1px solid #DDDDDD;      text-align: center;      padding: 8px;    }    tr:nth-child(odd) {      background-color: #A6C8FF;    }    .tableHeader {      font-weight: bold;    }    .centered {      text-align: center;    }  </style></head><body>  <h1>Olá, Innovation Studio São Paulo!</h1>  <h2>    Você está recebendo este e-mail automático como sinalização de que uma de    nossas demos foi acessada!  </h2>  <p>O acesso foi realizado no dia <b>${
          info.date
        }</b>. Detalhes abaixo:</p>  <table>    <tr>      <td class="tableHeader">Asset Apresentado</td>      <td class="tableHeader">Cliente/Parceiro abordado</td>      <td class="tableHeader">Responsável</td>      <td class="tableHeader">Motivo</td>    </tr>    <tr>      <td>${
          info.asset
        }</td>      <td>${info.client}</td>      <td>${
          info.responsible
        }</td>      <td>${info.class}</td>    </tr>  </table> ${
          info.oportunityNumber
            ? `<p>O número de oportunidade associado foi: <b>${info.oportunityNumber}</b>.</p>`
            : "<p>Nenhum número de oportunidade foi associado.</p>"
        }  <h3 class="centered">    Caso esta seja uma iniciativa desconhecida, seria bom entrarmos em contato    com o responsável!  </h3></body>`,
      }
    );
  } catch (err) {
    console.log(err);
  }
}
