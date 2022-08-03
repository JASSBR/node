const express = require('express')
const Joi = require('joi')
const app = express()
const axios = require("axios");
const crypto = require("crypto");





app.post("/callback", async (req, res) => {
  const body = {
    Bill2Email: '',
 
    clientid: '600001300',
 
    Ecom_Payment_Card_ExpDate_Year: '22',
 
    BillToCompany: 'BillTo arrawaj',
 
    ShipToCompany: '',
 
    BillToStreet3: '',
 
    orderItemCount: '0',
 
    BillToStreet2: '',
 
    BillToStreet1: 'casablanca',
 
    ccnHash: 'NCXxskrYzvcy+oFCU13FN6ua09s72juPnQ6oK5t0kEQ=',
 
    BillToName: 'Amar Di',
 
    URUNKODU: '',
 
    CVVPresence: '1',
 
    EditableEmail: 'false',
 
    ShipToStreet3: '',
 
    ShipToStreet2: '',
 
    dsId: '0',
 
    choix1: 'on',
 
    BAYIIKART: '',
 
    DIMCRITERIA7: '',
 
    ShipToTelVoice: '',
 
    DIMCRITERIA8: '',
 
    DIMCRITERIA9: '',
 
    ShipToStreet1: '',
 
    HASH: 'msBwscAWN78zfVNNPh6hzd9kQFzaosrz+ch7Enm80dfhORG/YE/09B5KALWSJ/aVHJNgZf79/ZmzrKEWzvHsMQ==',
 
    islemtipi: 'PreAuth',
 
    DIMCRITERIA1: '',
 
    DIMCRITERIA2: '',
 
    DIMCRITERIA3: '',
 
    CUSTOMERSURCHARGE: '',
 
    RecurringPaymentNumber: '',
 
    DIMCRITERIA4: '',
 
    DIMCRITERIA5: '',
 
    EDITABLEORDERITEM: '',
 
    DIMCRITERIA6: '',
 
    orgHash: 'lgfWIv2HZGu89URb/opfANbnQBf7Q7uN0AhpwFtyI4RcVHVUglcG2fq9PMlPvftVj+1Vbckm68W6s6byg06KsQ==',
 
    BillToCity: 'BillTo city',
 
    retryXid: 'hNJIP7ThpjQzp0ChRoCkBWvkA6Y=',
 
    ShipToCity: '',
 
    failUrl: 'https://uat-arrawaj.hyperfront.io',
 
    paymentType: 'CARD',
 
    currency: '504',
 
    MaskedPan: '400000***0010',
 
    TransId: '22214KZCJ10981',
 
    'EXTRA.CARDISSUER': 'CDM',
 
    RecurringFrequency: '',
 
    ShipToEmail: '',
 
    ShipToCountry: '',
 
    cardHolderName: 'AZ',
 
    ShipToName: 'society',
 
    'payResults.dsId': '0',
 
    BillToPostalCode: '20000',
 
    printBillTo: 'false',
 
    ReturnOid: 'CMI-ACC00000080-1659432253311',
 
    ShipToPostalCode: '',
 
    'EXTRA.TRXDATE': '02/08/2022 10:25:02',
 
    storetype: '3D_PAY_HOSTING',
 
    refreshtime: '300',
 
    clientIp: '128.78.109.157',
 
    linkType: 'SPL',
 
    paymentLinkToken: '22214KYOJ10351AJR6S4IBDI8WEIJDHGMO',
 
    BillToFax: '0515151515',
 
    MERCHANTSURCHARGE: '',
 
    EditableItemDescription: 'false',
 
    'EXTRA.CVVVERIFICATION': '1000',
 
    TAKSIT: '',
 
    EditableAmount: 'false',
 
    printShipTo: 'false',
 
    xid: 'hNJIP7ThpjQzp0ChRoCkBWvkA6Y=',
 
    callbackUrl: 'https://uat-arrawaj.hyperfront.io/api/script/automatic-runs/cmi-callback?tenant=arrawaj',
 
    EditableAddress: 'false',
 
    HostRefNum: '221410254621',
 
    maskedCreditCard: '4000 00** **** 0010',
 
    failCount: '1',
 
    rnd: 'pPYVLt0BV6WaSNLTaBge',
 
    ShipToFax: '',
 
    encoding: 'UTF-8',
 
    DIMCRITERIA10: '',
 
    BOLUM: '',
 
    RecurringFrequencyUnit: '',
 
    BillToCountry: 'mar',
 
    EditablePhone: 'false',
 
    SettleId: '1',
 
    MAXIMUMPLACE: '',
 
    okUrl: 'https://uat-arrawaj.hyperfront.io/page/bankOperation-accountFundingByCard?step=2&registration=ACC00000080&orderId=CMI-ACC00000080-1659432253311&amount=1000',
 
    orgRnd: '9DY/Do+O+G7pCJCZS0wd',
 
    ErrMsg: '',
 
    Ecom_Payment_Card_ExpDate_Month: '01',
 
    oid: 'CMI-ACC00000080-1659432253311',
 
    ProcReturnCode: '00',
 
    callbackCall: 'true',
 
    lang: 'en',
 
    EditableName: 'false',
 
    amount: '1020',
 
    AuthCode: '964465',
 
    BillToTelVoice: '06126261262',
 
    'EXTRA.CARDBRAND': 'VISA',
 
    Response: 'Approved',
 
    acqStan: '254621',
 
    hashAlgorithm: 'ver3\n'
 
 };
  let data = body;
data = Object.entries(data).map(([key, value]) => ({ key, value }));
console.log(data);
let orderData = (data = data.sort(function (a, b) {
  return a.key.localeCompare(b.key, undefined, {
    numeric: true,
    sensitivity: "base",
  });
}));
console.log(orderData);
let hashval = "";
orderData.forEach((element) => {
  // on trim et on escape les valeurs
  let paramValue =
    typeof element.value == "string" ? element.value.trim() : element.value;
  let escapedParamValue = decodeURI(paramValue.replace("/\n$/", ""));
  escapedParamValue = escapedParamValue
    .replace("|", "\\|")
    .replace("\\", "\\\\");
  let lowerParam = element.key.toLowerCase();
  if (lowerParam != "hash" && lowerParam != "encoding")
    hashval = hashval + escapedParamValue + "|";
});
const CMI_STORE_KEY='Msf_Key_112233'
hashval = hashval + CMI_STORE_KEY;
let actualHash = crypto.createHash("sha512").update(hashval).digest("base64");
console.log(actualHash);

if (actualHash == body.HASH){

const { oid:ORD_ID, amount:ORIG_TRANS_AMT } = body;

const orderid = ORD_ID;
const xxx = orderid.split("-");
const registration =xxx[1];

console.log(registration);

res.json("APPROVED");
let externalBankResponse = {};
  externalBankResponse.bankResponse = body;
  externalBankResponse.transactionId = body.TRANS_ID;
  externalBankResponse.orderId = body.ORD_ID;
  externalBankResponse.message = body.ErrMsg;
  externalBankResponse.status = body.Response;

  let cashInOperation = {
    sourceAccountRegistration: "ACC00000020", //compte du transaction arrawaj
    targetAccountRegistration: registration,
    type: "CASHIN",
    paymentDate: new Date(),
    valueDate: new Date(),
    amount: parseInt(ORIG_TRANS_AMT),
    principal: parseInt(ORIG_TRANS_AMT),
    interest: 0,
    externalBankResponse: externalBankResponse,
  };
  const Token = "eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIiwia2lkIjoialpESEVqN0ZhR3N5OHNUSUZLRWlnejB4TjFEVWlBZWp0S1ZNcEl2Z3dqOCJ9..fG3jCzarEF6q4XAf.jXkPh7lPy4q2ee9bKu0K8rGLE2MgemVM9NJwHFe5pQO484eD24FS-slrAwpeMRoCHmmgH19sZDWr0mjPNN4xJ7StY7HeGh8BbY8ZyvG-_G5hnu7FUdcv1VXVOrkUgR5S4atsxqVFNQoXpr12XKlCtg7aNDrCNGuN6yrc7FIZ675GxsntxBVjlVUMcOGW0pXaRQOpss_aRrcw-Gjql6NmVhrlC1iGRBa8ASD0WOhDdn4Q4zMx5klB1p7j7gzn1X9cDvQoJSF62FrSwjQgGX0CoQzuYtYIsJYQ3adLB9KRRKrsi_mH2_Ssxi8XAfJpxqdkdrDNLp7L-jfN4TVkVyqRCVv4YEIo7ByywWE8m-_JaVt-3SNlY5hzNaWxrF7oxHA6XDE1xauuKmeKH-dNUm_EhdX-bmiehxqGCZlpUhQnup2zjgSKftWP9XlJPgNDHiXo6Qhgki_qj1u5uXIXtTZQyd6jKX_NhfhoeUirysUgU6NaDnSmJnxxgAkCwcswdmqyyVd4bVdL_UQXvZ9iZnW7f-Fhrf35Ci_Knh7jhwqROipPrUzDMqb9-_r-_oWw5m_-E_M7qJ0cTGGyYVjm1CErgeHGNFdm1OXy7aWN5TkiLk7k4oLlQ9g9ez87vGHmhrj9oDHTj0wLLKVkI8zDd6OZALl33RGfD8kvdUgcAgHCST58kt9Eaf8DbDVhYUazIBc-4sbSvxVeudwYi3XArJlgWpOpDU_W70kMlg5jXPAWZzPtNrj3nhrq7c-HLaNogW_Ae_qNeDMfTuUzaiWZOlhpy6EzX0BiE4j4vOkP7x-Nb_ZZCqnuVki8moDXGt9iEEqsd85Xd9dl44PaYv1cByLFOGVHG9mmIxOx5O0qTwkA0g.rAE8Il1QBJChX_mCUqdMtg"
  let axiosOptions = {
    headers: { Authorization: `Bearer ${Token}` },
  };
  try {
     let CashIn = await axios.post(
    `https://uat-arrawaj.hyperfront.io/api/bank/bank-operations`,
    cashInOperation,
    axiosOptions
  );
  console.log(CashIn);
  } catch (error) {
    console.error(error);
  }
 
} 
else res.json("FAILURE");
})

const port = process.env.port || 3000;

app.listen(3000,()=> console.log('App listening on port '+port+'...'));