$(document).ready(function () {
    const search = window.location.search;
    const teamId = search.split("=")[1];
    const team = teams.find(item => item.id === parseInt(teamId));
    const teamPlayers = player.filter(item => item.from === team.key);
    $("h1").html(team.fullName + " Page").css("color", team.border);
    $(".team").html(team.key)
    $("#title-wins").html(team.champioshipsWon);
    $("#players-count").html(teamPlayers.length)
    //team icon 
    const icon = player.find(item => team.team_icon === item.playerName);
    const topBowler = player.find(item => team.top_bowler === item.playerName);
    const topBatsman = player.find(item => team.top_batsman === item.playerName);
    for (let i = 0; i < 3; i++) {
        let player;
        let h2;
        if (i === 0) {
            player = icon;
            h2 = $("<h2>").html("Team Icon")
        } else if (i === 1) {
            player = topBowler;
            h2 = $("<h2>").html("Top Bowler")
        } else if (i === 2) {
            player = topBatsman;
            h2 = $("<h2>").html("Top Batsman")
        }
        const image = $("<img>").attr("src", player.image);
        const imageWrap = $("<div>").addClass("img-wrapper").append(image);
        const h3 = $("<h3>").html(player.playerName);
        const info = $("<div>").addClass("info").append(imageWrap, h3);
        const card = $("<article>").append(h2, info)
        $("#team-details").append(card);

    }
    teamPlayers.map(function (player) {
        const playerImg = $("<img>").attr("src", player.image);
        const playerWrap = $("<div>").addClass("img-wrapper").append(playerImg)
        const playerName = $("<h3>").addClass("player-name").html(player.playerName);
        const teamName = $("<p>").html(`Team: ${player.from}`);
        const price = $("<p>").html(`Price: ${player.price}`)
        const isplaying = null;
        if (player.isPlaying === true) {
            isPlaying = "Playing";
        } else {
            isPlaying = "On Bench";
        }
        const status = $("<p>").html(`Status: ${isPlaying}`);
        const role = $("<p>").html(`Role: ${player.description}`)
        const playerCard = $("<article>").addClass("player-info").attr("id", player.id)
                 .append(playerWrap, playerName, teamName, price, status, role);
        playerCard.click(function() {
            window.location.assign(`./playerDetails.html?player_id=${player.id}`)
        })
        $("#all-players").append(playerCard);
    })
    $(".img-wrapper").css("background", team.background);
    $("nav").css("background",team.background);
})

