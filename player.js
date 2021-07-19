$(document).ready(function() {
    const search = window.location.search;
    const playerID = search.split("=")[1];
    const currentPlayer = player.find(item => item.id === parseInt(playerID));
    const team = teams.find(item => item.key === currentPlayer.from);
    const playerImg = $("<img>").attr("src", currentPlayer.image);
    $("#player-img-wrap").append(playerImg);
    const playerName = $("<h2>").html(currentPlayer.playerName);
    const teamName = $("<p>").html(`Team: ${team.fullName}`)
    const price = $("<p>").html(`Price: ${currentPlayer.price}`);
    let isPlaying = null;
    if(currentPlayer.isPlaying === true) {
         isPlaying = "Playing"
    } else {
        isPlaying = "On Bench"
    }
    const status = $("<p>").html(`Status: ${isPlaying}`);
    const role = $("<p>").html(`Role: ${currentPlayer.description}`);
    $("#player-details").append(playerName,teamName,price,status,role);
    $("#player-info-section").css({
        "border": `4px solid ${team.border}`,
        "background": team.background
    })
    $("nav").css("background",team.background);
})

