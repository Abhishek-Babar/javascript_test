$(document).ready(function () {
    teams.map(function (item) {
        const teamImg = $("<img>").attr("src", item.teamIcon).addClass("card-img");
        const imgWrap = $("<div>").addClass("img-wrap").append(teamImg).css("border", `3px solid ${item.border}`);
        const teamName = $("<h3>").addClass("team-name").html(item.fullName);
        const wins = $("<b>").html(item.champioshipsWon);
        const titles = $("<p>").addClass("title").html("Title wins: ").append(wins)
        const card = $("<article>").addClass("card").append(imgWrap, teamName, titles).css({
            "border": `3px solid ${item.border}`,
            "color": item.border
        });
        card.hover(function () {
            $(this).css({
                "background": item.background,
                "color": "#fff"
            })
        }, function () {
            $(this).css({
                "background": "#fff",
                "color": item.border
            })
        })
        card.click(function () {
            window.location.assign(`./teamDetails.html?team_id=${item.id}`)
        })
        $("#teams").append(card);
    });
    $("#search-btn").click(function () {
        const search = $("#search-val").val().toLowerCase();
        $("#search-section").empty();
        if(search.length > 0) {
        const players = player.filter(item =>
            item.playerName.toLowerCase().includes(search) || item.from.toLowerCase().includes(search));
        const team = teams.filter(item => item.fullName.toLowerCase().includes(search));
        for(let i = 0; i < team.length; i++) {
            const remainingPLayers = player.filter(item => team[i].key === item.from)
            players.push(...remainingPLayers);
        }
        players.map(function(item) {
            const img = $("<img>").addClass("searched-player").attr("src",item.image);
            const team = teams.find(item1 => item1.key === item.from);
            const name = $("<h3>").html(item.playerName);
            const teamName = $("<h3>").html(team.fullName);
           const card = $("<div>").addClass("searched").append(img,name,teamName);
           card.click(function() {
               window.location.assign(`./playerDetails.html?player_id=${item.id}`);
           })
           $("#search-section").append(card);
        })
    }
    })
    $("#add").click(function() {
        $("#add-player").css("display","flex")
    })
    $("#close").click(function() {
        $("#add-player").css("display","none");
    })
    $("#success").click(function(e) {
        e.preventDefault();
        const name = $("#name").val();
        const team = $("#team").val().toUpperCase();
        const price = $("#price").val();
        const role = $("#role").val();
        const img = $("#image").val();
        const value = $("[type=radio]:checked").val()
        const playing =  value === "true" ? true : false;
        const newPlayer = {
            id: player.length + 1,
            playerName: name,
            from: team,
            price: price,
            isPlaying: playing,
            description: role,
            image:img
        }
        player.push(newPlayer);
        localStorage.setItem("players", JSON.stringify(player));
        $("#name").val("");
        $("#team").val("");
        $("#role").val("");
        $("#image").val("");
        $("#price").val("");
        $("[name='isPlaying']").val("");
        $("#add-player").css("display","none")
    })
})
