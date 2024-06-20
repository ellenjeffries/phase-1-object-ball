function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismark Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
  }

const allPlayers= {...gameObject().home.players, ...gameObject().away.players}

const homeColors= gameObject().home.colors;
const awayColors= gameObject().away.colors;
const allColors=[...homeColors,...awayColors]

  function homeTeamName() {
    return gameObject()["home"]["teamName"];
  }
 
  function numPointsScored(playersName) {
    for(let player in allPlayers){
        if (player === playersName)
        return allPlayers[player].points
    }
  }

  function shoeSize(playersName) {
    for(let player in allPlayers)
        if (player === playersName) {
            return allPlayers[player].shoe
        }
  }

  function teamColors(teamName) {
    if (gameObject().home.teamName === teamName) {
        return gameObject().home.colors;
    } else if (gameObject().away.teamName === teamName) {
        return gameObject().away.colors;
    } else {
        return 'Team colors not found'; // Optional: Handle case where teamName doesn't match either home or away
    }
}

function teamNames() {
    return [gameObject().home.teamName, gameObject().away.teamName];
}

function playerNumbers(teamName) {
    const game = gameObject()

    if (game.home.teamName === teamName) {
        return Object.values(game.home.players).map(player => player.number);
    }
    if (game.away.teamName === teamName){
        return Object.values(game.away.players).map(player => player.number)
    }
}

function playerStats(playersName) {
    for (let player in allPlayers) {
        if (player === playersName) {
            return allPlayers[player];
        }
    }
}


function bigShoeRebounds() {
    let largestShoeSize = -Infinity;
    let playerWithLargestShoe = null;

    for (let team in gameObject()) {
        for (let player in gameObject()[team].players) {
            let currentShoeSize = gameObject()[team].players[player].shoe;
            
            if (currentShoeSize > largestShoeSize) {
                largestShoeSize = currentShoeSize;
                playerWithLargestShoe = gameObject()[team].players[player];
            }
        }
    }

    if (playerWithLargestShoe) {
        return playerWithLargestShoe.rebounds;
    } else {
        return null; 
    }
}


