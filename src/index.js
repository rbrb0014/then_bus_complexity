const timeline = document.querySelector(".timeline");
//const token = require("./config.json");

function getAPI(bus_num,busstop,time,token){
    fecth(`https://t-data.seoul.go.kr/apig/apiman-gateway/tapi/TaimsTpssA18RouteSection/1.0?apikey=${token}&startRow=1&rowCnt=3&stdrDe=20220101`)
        .then((response)=>response.json())
        .then((json)=>{
            json.CardBusTimeNew.row.forEach(element => {
                console.log(element.BUS_STA_NM, element.STND_BSST_ID);
            });
            //const check = json.CardBusTimeNew.row[0].BUS_STA_NM;
            //timeline.innerText = `${check}`;
        });
    
}

function init(){
    getAPI(273,1,3,"cbb8d299-1bf8-4ace-97aa-be9ed204ec94");
}
init();
