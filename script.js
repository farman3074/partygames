// Game State
let gameState = {
    players: [],
    currentPlayerIndex: 0,
    currentRound: 1,
    maxRounds: 10,
    heatLevel: 1,
    maxHeatLevel: 5,
    actionType: 'mixed',
    actionList: [],
    punishmentList: [],
    scores: {},
    isPunishmentPhase: false
};

// Default Action Lists by Category and Heat Level
const defaultActionLists = {
    truth: {
        1: [
            "What's your biggest fear?",
            "Who was your first crush?",
            "What's the most embarrassing thing that's happened to you?",
            "What's a secret you've never told anyone?",
            "What's your worst habit?",
            "Who do you have a secret crush on?",
            "What's the worst lie you've ever told?",
            "What's something you're ashamed of?",
            "What's your most embarrassing childhood memory?",
            "What's the meanest thing you've ever said to someone?"
        ],
        2: [
            "What's your most embarrassing moment in public?",
            "What's something you've done that you hope your parents never find out?",
            "Who in this room would you most like to kiss?",
            "What's the worst thing you've ever done to a friend?",
            "What's a secret about yourself that would ruin your reputation?",
            "What's the most trouble you've ever gotten into?",
            "What's something illegal you've done?",
            "What's your biggest regret?",
            "What's the most hurtful thing someone has said to you?",
            "What's something you're glad your family doesn't know about you?"
        ],
        3: [
            "What's the most embarrassing thing in your search history?",
            "What's something you've done that you're most ashamed of?",
            "What's your wildest fantasy?",
            "What's the worst thing you've done while drunk?",
            "What's something you've never told your best friend?",
            "What's the most inappropriate thing you've done in public?",
            "What's a secret that could ruin a friendship?",
            "What's the worst thing you've done to get revenge?",
            "What's something you've done that you'd never want anyone to know?",
            "What's your most embarrassing sexual experience?"
        ],
        4: [
            "What's the most scandalous thing you've done?",
            "What's something you've done that would shock everyone here?",
            "What's your darkest secret?",
            "What's the worst thing you've done to someone you love?",
            "What's something you've done that you can't believe you did?",
            "What's the most inappropriate place you've been intimate?",
            "What's a secret that would change how people see you?",
            "What's the worst thing you've done for money?",
            "What's something you've done that you're terrified of being found out?",
            "What's your most shameful moment?"
        ],
        5: [
            "What's the most extreme thing you've ever done?",
            "What's a secret that would destroy your relationships?",
            "What's the worst thing you've done that you've never told anyone?",
            "What's something you've done that you can't forgive yourself for?",
            "What's your most dangerous secret?",
            "What's the most shocking thing you've ever done?",
            "What's something you've done that would make people hate you?",
            "What's your most controversial opinion?",
            "What's the worst thing you've done to someone who trusted you?",
            "What's a secret that would ruin your life if it got out?"
        ]
    },
    dare: {
        1: [
            "Do your best impression of someone in the room",
            "Sing a song chosen by the group",
            "Dance with no music for 1 minute",
            "Let the group go through your phone for 30 seconds",
            "Eat a spoonful of a condiment",
            "Call your mom and tell her you love her",
            "Do 20 push-ups",
            "Let someone else post a status on your social media",
            "Wear your clothes inside out for the rest of the game",
            "Speak in an accent for the next 3 rounds"
        ],
        2: [
            "Let the group look through your photos for 1 minute",
            "Call your ex and hang up immediately",
            "Do your best sexy dance",
            "Let someone read your last 5 text messages out loud",
            "Eat a raw piece of garlic",
            "Post an embarrassing photo of yourself on social media",
            "Call a random number and sing happy birthday",
            "Let the group give you a new hairstyle",
            "Do 50 sit-ups",
            "Text your crush and tell them you like them"
        ],
        3: [
            "Kiss the person to your left",
            "Let someone go through your entire phone",
            "Strip down to your underwear",
            "Call your crush and confess your feelings",
            "Do your best impression of a porn star",
            "Let the group read your last 10 text messages",
            "Post the most embarrassing photo on your phone to social media",
            "Eat something off the floor",
            "Let someone else control your social media for 1 hour",
            "Do a body shot off someone in the room"
        ],
        4: [
            "Kiss the person to your right",
            "Let the group see your browser history",
            "Strip down to your bra/underwear",
            "Call your ex and tell them you miss them",
            "Do a striptease",
            "Let someone read your private messages",
            "Post a nude photo (censored) on social media",
            "Kiss three different people in the room",
            "Let the group give you a wedgie",
            "Do something sexual with an inanimate object"
        ],
        5: [
            "Kiss everyone in the room",
            "Strip completely naked",
            "Have sex with someone in the room",
            "Let the group watch you masturbate",
            "Do something extremely sexual",
            "Have a threesome",
            "Perform oral sex on someone",
            "Let the group film you doing something sexual",
            "Have sex in front of everyone",
            "Do the most extreme thing you can think of"
        ]
    },
    mixed: {
        1: [
            "What's your biggest fear?",
            "Do your best impression of someone in the room",
            "Who was your first crush?",
            "Sing a song chosen by the group",
            "What's the most embarrassing thing that's happened to you?",
            "Dance with no music for 1 minute",
            "What's a secret you've never told anyone?",
            "Let the group go through your phone for 30 seconds",
            "What's your worst habit?",
            "Eat a spoonful of a condiment"
        ],
        2: [
            "What's your most embarrassing moment in public?",
            "Let the group look through your photos for 1 minute",
            "Who in this room would you most like to kiss?",
            "Call your ex and hang up immediately",
            "What's the worst thing you've ever done to a friend?",
            "Do your best sexy dance",
            "What's something you've done that you hope your parents never find out?",
            "Let someone read your last 5 text messages out loud",
            "What's a secret about yourself that would ruin your reputation?",
            "Post an embarrassing photo of yourself on social media"
        ],
        3: [
            "What's the most embarrassing thing in your search history?",
            "Kiss the person to your left",
            "What's your wildest fantasy?",
            "Let someone go through your entire phone",
            "What's the worst thing you've done while drunk?",
            "Strip down to your underwear",
            "What's something you've never told your best friend?",
            "Call your crush and confess your feelings",
            "What's the most inappropriate thing you've done in public?",
            "Do your best impression of a porn star"
        ],
        4: [
            "What's the most scandalous thing you've done?",
            "Kiss the person to your right",
            "What's your darkest secret?",
            "Let the group see your browser history",
            "What's the worst thing you've done to someone you love?",
            "Strip down to your bra/underwear",
            "What's something you've done that you can't believe you did?",
            "Call your ex and tell them you miss them",
            "What's the most inappropriate place you've been intimate?",
            "Do a striptease"
        ],
        5: [
            "What's the most extreme thing you've ever done?",
            "Kiss everyone in the room",
            "What's a secret that would destroy your relationships?",
            "Strip completely naked",
            "What's the worst thing you've done that you've never told anyone?",
            "Have sex with someone in the room",
            "What's something you've done that you can't forgive yourself for?",
            "Let the group watch you masturbate",
            "What's your most dangerous secret?",
            "Do something extremely sexual"
        ]
    }
};

// Default Punishment List
const defaultPunishments = [
    "Drink 3 shots",
    "Do 30 push-ups",
    "Sing a song chosen by the group",
    "Dance with no music for 2 minutes",
    "Let the group go through your phone for 1 minute",
    "Eat a spoonful of a random condiment",
    "Call your mom and tell her you love her",
    "Post an embarrassing status on social media",
    "Wear your clothes inside out for the rest of the game",
    "Do your best impression of someone in the room",
    "Let someone read your last 10 text messages",
    "Do 50 sit-ups",
    "Call a random number and sing happy birthday",
    "Eat something off the floor",
    "Let the group give you a new hairstyle"
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
    setupEventListeners();
    loadSavedLists();
});

function initializeGame() {
    const playerCountInput = document.getElementById('player-count');
    const playerNamesContainer = document.getElementById('player-names-container');
    
    playerCountInput.addEventListener('input', function() {
        const count = parseInt(this.value);
        playerNamesContainer.innerHTML = '';
        
        for (let i = 1; i <= count; i++) {
            const div = document.createElement('div');
            div.className = 'form-group';
            div.innerHTML = `
                <label>Player ${i} Name:</label>
                <input type="text" class="player-name" placeholder="Enter name" required>
            `;
            playerNamesContainer.appendChild(div);
        }
    });
}

function setupEventListeners() {
    document.getElementById('start-game-btn').addEventListener('click', startGame);
    document.getElementById('create-action-list-btn').addEventListener('click', () => openListModal('action'));
    document.getElementById('create-punishment-list-btn').addEventListener('click', () => openListModal('punishment'));
    document.getElementById('save-list-btn').addEventListener('click', saveList);
    document.getElementById('completed-btn').addEventListener('click', handleActionCompleted);
    document.getElementById('skipped-btn').addEventListener('click', handleActionSkipped);
    document.getElementById('continue-btn').addEventListener('click', continueAfterPunishment);
    document.getElementById('play-again-btn').addEventListener('click', resetGame);
    
    const closeModal = document.querySelector('.close');
    closeModal.addEventListener('click', closeListModal);
    
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('list-modal');
        if (event.target === modal) {
            closeListModal();
        }
    });
}

function loadSavedLists() {
    // Load saved action lists
    const savedActionLists = JSON.parse(localStorage.getItem('actionLists') || '{}');
    const actionListSelect = document.getElementById('action-list-select');
    
    // Clear existing options except default
    actionListSelect.innerHTML = '<option value="default">Default List</option>';
    
    Object.keys(savedActionLists).forEach(listName => {
        const option = document.createElement('option');
        option.value = listName;
        option.textContent = listName;
        actionListSelect.appendChild(option);
    });
    
    // Load saved punishment lists
    const savedPunishmentLists = JSON.parse(localStorage.getItem('punishmentLists') || '{}');
    const punishmentListSelect = document.getElementById('punishment-list-select');
    
    punishmentListSelect.innerHTML = '<option value="default">Default List</option>';
    
    Object.keys(savedPunishmentLists).forEach(listName => {
        const option = document.createElement('option');
        option.value = listName;
        option.textContent = listName;
        punishmentListSelect.appendChild(option);
    });
}

function openListModal(type) {
    const modal = document.getElementById('list-modal');
    const modalTitle = document.getElementById('modal-title');
    const listNameInput = document.getElementById('list-name');
    const listItemsTextarea = document.getElementById('list-items');
    
    modal.dataset.type = type;
    modalTitle.textContent = type === 'action' ? 'Create Action List' : 'Create Punishment List';
    listNameInput.value = '';
    listItemsTextarea.value = '';
    
    if (type === 'action') {
        listItemsTextarea.placeholder = 'Enter actions, one per line. Actions will be distributed across heat levels automatically.';
    } else {
        listItemsTextarea.placeholder = 'Enter punishments, one per line';
    }
    
    modal.classList.add('active');
}

function closeListModal() {
    document.getElementById('list-modal').classList.remove('active');
}

function saveList() {
    const modal = document.getElementById('list-modal');
    const type = modal.dataset.type;
    const listName = document.getElementById('list-name').value.trim();
    const listItems = document.getElementById('list-items').value.trim();
    
    if (!listName || !listItems) {
        alert('Please enter both a list name and items!');
        return;
    }
    
    const items = listItems.split('\n').filter(item => item.trim());
    
    if (type === 'action') {
        // Distribute actions across heat levels
        const actionList = {};
        const heatLevels = 5;
        const itemsPerLevel = Math.ceil(items.length / heatLevels);
        
        for (let level = 1; level <= heatLevels; level++) {
            const startIndex = (level - 1) * itemsPerLevel;
            const endIndex = Math.min(startIndex + itemsPerLevel, items.length);
            actionList[level] = items.slice(startIndex, endIndex);
        }
        
        const savedLists = JSON.parse(localStorage.getItem('actionLists') || '{}');
        savedLists[listName] = actionList;
        localStorage.setItem('actionLists', JSON.stringify(savedLists));
    } else {
        const savedLists = JSON.parse(localStorage.getItem('punishmentLists') || '{}');
        savedLists[listName] = items;
        localStorage.setItem('punishmentLists', JSON.stringify(savedLists));
    }
    
    loadSavedLists();
    closeListModal();
    alert('List saved successfully!');
}

function startGame() {
    // Get player names
    const playerNameInputs = document.querySelectorAll('.player-name');
    const players = Array.from(playerNameInputs)
        .map(input => input.value.trim())
        .filter(name => name);
    
    if (players.length < 2) {
        alert('Please enter at least 2 player names!');
        return;
    }
    
    // Initialize game state
    gameState.players = players;
    gameState.currentPlayerIndex = 0;
    gameState.currentRound = 1;
    gameState.heatLevel = 1;
    gameState.actionType = document.getElementById('action-type').value;
    gameState.scores = {};
    gameState.isPunishmentPhase = false;
    
    players.forEach(player => {
        gameState.scores[player] = 0;
    });
    
    // Load action list
    const actionListSelect = document.getElementById('action-list-select').value;
    if (actionListSelect === 'default') {
        gameState.actionList = defaultActionLists[gameState.actionType];
    } else {
        const savedLists = JSON.parse(localStorage.getItem('actionLists') || '{}');
        gameState.actionList = savedLists[actionListSelect];
    }
    
    // Load punishment list
    const punishmentListSelect = document.getElementById('punishment-list-select').value;
    if (punishmentListSelect === 'default') {
        gameState.punishmentList = defaultPunishments;
    } else {
        const savedLists = JSON.parse(localStorage.getItem('punishmentLists') || '{}');
        gameState.punishmentList = savedLists[punishmentListSelect] || defaultPunishments;
    }
    
    // Ensure punishment list is an array
    if (!Array.isArray(gameState.punishmentList)) {
        gameState.punishmentList = defaultPunishments;
    }
    
    // Show game screen
    document.getElementById('setup-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    
    updateGameDisplay();
}

function updateGameDisplay() {
    // Update round and heat level
    document.getElementById('current-round').textContent = gameState.currentRound;
    document.getElementById('heat-level').textContent = gameState.heatLevel;
    
    // Update scores
    const scoresContainer = document.getElementById('scores-container');
    scoresContainer.innerHTML = '';
    
    Object.entries(gameState.scores)
        .sort((a, b) => b[1] - a[1])
        .forEach(([player, score]) => {
            const div = document.createElement('div');
            div.className = 'score-item';
            div.innerHTML = `<span>${player}:</span> <strong>${score}</strong>`;
            scoresContainer.appendChild(div);
        });
    
    if (gameState.isPunishmentPhase) {
        // Show punishment phase
        const currentPlayer = gameState.players[gameState.currentPlayerIndex];
        document.getElementById('current-player-name').textContent = currentPlayer;
        
        // Ensure punishment is displayed
        document.getElementById('game-buttons').style.display = 'none';
        document.getElementById('punishment-display').classList.remove('hidden');
    } else {
        // Show current player and action
        const currentPlayer = gameState.players[gameState.currentPlayerIndex];
        const nextPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
        const nextPlayer = gameState.players[nextPlayerIndex];
        
        document.getElementById('current-player-name').textContent = currentPlayer;
        
        // Get random action for current heat level
        const actionsForHeatLevel = gameState.actionList[gameState.heatLevel];
        if (!actionsForHeatLevel || actionsForHeatLevel.length === 0) {
            // Fallback to lower heat level if current has no actions
            let fallbackLevel = gameState.heatLevel;
            while (fallbackLevel > 1 && (!gameState.actionList[fallbackLevel] || gameState.actionList[fallbackLevel].length === 0)) {
                fallbackLevel--;
            }
            const fallbackActions = gameState.actionList[fallbackLevel] || [];
            if (fallbackActions.length > 0) {
                const randomAction = fallbackActions[Math.floor(Math.random() * fallbackActions.length)];
                document.getElementById('action-text').textContent = randomAction;
            } else {
                document.getElementById('action-text').textContent = "No actions available for this heat level!";
            }
        } else {
            const randomAction = actionsForHeatLevel[Math.floor(Math.random() * actionsForHeatLevel.length)];
            document.getElementById('action-text').textContent = randomAction;
        }
        
        document.getElementById('action-target').textContent = `Do this to: ${nextPlayer}`;
        
        // Show/hide elements
        document.getElementById('punishment-display').classList.add('hidden');
        document.getElementById('game-buttons').style.display = 'flex';
    }
}

function handleActionCompleted() {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    gameState.scores[currentPlayer] += 10;
    
    nextTurn();
}

function handleActionSkipped() {
    gameState.isPunishmentPhase = true;
    
    // Check if punishment list exists and has items
    if (!gameState.punishmentList || gameState.punishmentList.length === 0) {
        alert('No punishments available! Using default punishment.');
        gameState.punishmentList = defaultPunishments;
    }
    
    // Get random punishment
    const randomPunishment = gameState.punishmentList[Math.floor(Math.random() * gameState.punishmentList.length)];
    document.getElementById('punishment-text').textContent = randomPunishment;
    
    // Hide action buttons, show punishment
    const gameButtons = document.getElementById('game-buttons');
    const punishmentDisplay = document.getElementById('punishment-display');
    
    if (gameButtons) gameButtons.style.display = 'none';
    if (punishmentDisplay) punishmentDisplay.classList.remove('hidden');
}

function continueAfterPunishment() {
    gameState.isPunishmentPhase = false;
    nextTurn();
}

function nextTurn() {
    // Move to next player
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    
    // If we've gone through all players, advance round
    if (gameState.currentPlayerIndex === 0) {
        gameState.currentRound++;
        
        // Increase heat level (gradually from 1 to 5 over 10 rounds)
        const heatProgression = Math.ceil((gameState.currentRound / gameState.maxRounds) * gameState.maxHeatLevel);
        gameState.heatLevel = Math.min(heatProgression, gameState.maxHeatLevel);
        
        // Check if game is over
        if (gameState.currentRound > gameState.maxRounds) {
            endGame();
            return;
        }
    }
    
    updateGameDisplay();
}

function endGame() {
    // Find winner
    const sortedPlayers = Object.entries(gameState.scores)
        .sort((a, b) => b[1] - a[1]);
    
    const winner = sortedPlayers[0];
    const winnerName = document.getElementById('winner-name');
    const winnerScore = document.getElementById('winner-score');
    
    if (sortedPlayers.length > 1 && sortedPlayers[0][1] === sortedPlayers[1][1]) {
        winnerName.textContent = "It's a Tie!";
        winnerScore.textContent = `Score: ${winner[1]} points`;
    } else {
        winnerName.textContent = `🏆 ${winner[0]} Wins! 🏆`;
        winnerScore.textContent = `Final Score: ${winner[1]} points`;
    }
    
    // Display final scores
    const finalScoresContainer = document.getElementById('final-scores-container');
    finalScoresContainer.innerHTML = '';
    
    sortedPlayers.forEach(([player, score], index) => {
        const div = document.createElement('div');
        div.className = 'final-score-item';
        div.innerHTML = `
            <span>${index + 1}. ${player}</span>
            <strong>${score} points</strong>
        `;
        finalScoresContainer.appendChild(div);
    });
    
    // Show game over screen
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('game-over-screen').classList.add('active');
}

function resetGame() {
    // Reset to setup screen
    document.getElementById('game-over-screen').classList.remove('active');
    document.getElementById('setup-screen').classList.add('active');
    
    // Reset form
    document.querySelectorAll('.player-name').forEach(input => input.value = '');
    document.getElementById('player-count').value = 2;
    document.getElementById('action-type').value = 'mixed';
    document.getElementById('action-list-select').value = 'default';
    document.getElementById('punishment-list-select').value = 'default';
    
    // Reinitialize player names container
    const playerNamesContainer = document.getElementById('player-names-container');
    playerNamesContainer.innerHTML = `
        <div class="form-group">
            <label>Player 1 Name:</label>
            <input type="text" class="player-name" placeholder="Enter name" required>
        </div>
        <div class="form-group">
            <label>Player 2 Name:</label>
            <input type="text" class="player-name" placeholder="Enter name" required>
        </div>
    `;
}

