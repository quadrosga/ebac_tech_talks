AOS.init();

//. armazenar a data de interesse 
//. armazenar timestamp da data 
const eventDate = new Date("Mar 16, 2024 19:00:00");
const EventTimestamp = eventDate.getTime();


//. armazenar setInterval em uma const, defininir intervalo como segundo argumento (1000 ms)
//. armazenar data atual
//. armazenar timestamp de data atual  
const timeCounter = setInterval(function() {
    const now = new Date();
    const nowTimestamp = now.getTime();
    
    //. calcular a distancia entre os timestamps
    const distanceToEvent = EventTimestamp - nowTimestamp;

    // Conversões 
    const daysInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minsInMs = 1000 * 60;

    //. transformar os ms em Dias 
    const daysUntilEvent = Math.floor(distanceToEvent / (daysInMs));
    //. recuperar o resto da divisão anterior (%) e transformar em horas 
    const hoursUntilEvent = Math.floor((distanceToEvent % (daysInMs)) / (hoursInMs));
    // 8. recuperar o resto da divisão anterior (%) e transformar em min
    const minsUntilEvent = Math.floor((distanceToEvent % (hoursInMs)) / (minsInMs));
    //. recuperar o resto da divisão anterior (%) e transformar em seg
    const segsUntilEvent = Math.floor((distanceToEvent % (minsInMs)) / 1000);

    // . inserir cronômetro no documento
    document.getElementById('contador').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minsUntilEvent}m ${segsUntilEvent}s`;

    // tratamento para quando a data já passou
    if (distanceToEvent < 0) {
        clearInterval(timeCounter);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000)
// À cada 1s, esse conteúdo será executado 
