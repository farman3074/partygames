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
            "What's your biggest turn on?",
            "Who was your last fuck?",
            "What's the most embarrassing thing that's happened to you during sex?",
            "What's a secret you've never told anyone about your sex life?",
            "What's your worst sex experience?",
            "Who do you think of during masterbation?",
            "What's the worst lie you've ever told?",
            "What's something you're ashamed of in your body?",
            "What's your most wildest fantasy?",
            "What's your biggest turn off?"
        ],
        2: [
            "What's the best pose you like during sex?",
            "What's something you've done that you hope your parents never find out?",
            "Who in this room would you most like to kiss?",
            "What's the worst thing you've ever done to a friend?",
            "What's a secret about yourself that would ruin your reputation?",
            "What's the most trouble you've ever gotten into?",
            "What's something most illegal you've done?",
            "What's the wierdest place you had sex in?",
            "What's the wierdest think you have done with someone?",
            "What's something you're glad your family doesn't know about you?"
        ],
        3: [
            "What's the most embarrassing thing in your search history?",
            "What's the most searched porn in your history?",
            "Who is your current boy/girl friend",
            "What's the worst thing you've done while drunk?",
            "What's the strongest drug you have ever taken?",
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
            "Hug the person to your left",
            "Kiss the person to your right",
            "Dance with no music for 1 minute",
            "Do plank for 1 minute",
            "Eat a spoonful of a condiment",
            "Flash your ass",
            "Do 20 push-ups",
            "Look into someone's eyes for 1 minute",
            "Stand on one leg for 1 minute",
            "Speak in an accent for the next 3 rounds"
        ],
        2: [
            "Flash your boobs",
            "Get one piece of your closthes off",
            "Do your best sexy dance",
            "Say something dirty in any langauge",
            "drink 2 shots in a row",
            "give lap dance to the person to your right",
            "bend over and open your ass cheeks",
            "french kiss the person to your left",
            "whisper sexy words in the person's ear",
            "let the person lick you for 1 minute"
        ],
        3: [
            "remove your underwear",
            "play with your nipples for 1 minute",
            "Do a body shot off someone in the room",
            "play with your asshole for 1 minute",
            "Do your best impression of a porn star",
            "let others to touch you for 1 minute",
            "let someone bite your nipples for 1 minute",
            "sniff someone's underwear for 1 minute",
            "pick a random porn clip and try to act it out",
            "Do a a drug shot"
        ],
        4: [
            "sniff/eat someone's asshole for 1 minute",
            "suck on someones pussy/dick for 1 minute",
            "Strip down to your birthday suite",
            "Put your finger inside someones asshole for 1 minute",
            "Do a striptease",
            "French kiss with half penetration sex with someone in the room",
            "Insert an object inside your hole",
            "play with your pussy/dick untill it is erect/cumms",
            "let someonen examine you intimately",
            "Do something sexual with an inanimate object"
        ],
        5: [
            "Sit on someone's face for 1 minute",
            "Seduce someone in the room",
            "Have sex with someone in the room",
            "Let the group watch you masturbate",
            "Do something extremely sexual",
            "Have a threesome",
            "Perform oral sex on someone",
            "Let the group film you doing something sexual",
            "Have sex in front of everyone",
            "Pee on someone's face"
        ]
    },
    mixed: {
        1: [
            "What's your biggest turn on?",
            "Who was your last fuck?",
            "What's the most embarrassing thing that's happened to you during sex?",
            "What's a secret you've never told anyone about your sex life?",
            "What's your worst sex experience?",
            "Eat a spoonful of a condiment",
            "Flash your ass",
            "Do 20 push-ups",
            "Look into someone's eyes for 1 minute",
            "Stand on one leg for 1 minute",
            "Speak in an accent for the next 3 rounds"
        ],
        2: [
            "What's the best pose you like during sex?",
            "What's something you've done that you hope your parents never find out?",
            "Who in this room would you most like to kiss?",
            "What's the worst thing you've ever done to a friend?",
            "give lap dance to the person to your right",
            "bend over and open your ass cheeks",
            "french kiss the person to your left",
            "whisper sexy words in the person's ear",
            "let the person lick you for 1 minute"
        ],
        3: [
           "Who is your current boy/girl friend",
            "What's the worst thing you've done while drunk?",
            "What's the strongest drug you have ever taken?",
            "What's the most inappropriate thing you've done in public?",
          "let others to touch you for 1 minute",
            "let someone bite your nipples for 1 minute",
            "sniff someone's underwear for 1 minute",
            "pick a random porn clip and try to act it out",
            "Do a a drug shot"
        ],
        4: [
            "What's the most scandalous thing you've done?",
            "What's something you've done that would shock everyone here?",
            "What's your darkest secret?",
            "What's the worst thing you've done to someone you love?",
            "French kiss with half penetration sex with someone in the room",
            "Insert an object inside your hole",
            "play with your pussy/dick untill it is erect/cumms",
            "let someonen examine you intimately",
            "Do something sexual with an inanimate object"
        ],
        5: [
         "What's a secret that would destroy your relationships?",
            "What's the worst thing you've done that you've never told anyone?",
            "What's something you've done that you can't forgive yourself for?",
            "What's your most dangerous secret?",
            "Let the group watch you masturbate",
            "Do something extremely sexual",
            "Have a threesome",
            "Perform oral sex on someone",
            "Let the group film you doing something sexual",
            "Have sex in front of everyone",
        ]
    }
};

// Default Punishment List
const defaultPunishments = [
    "Drink 3 shots",
    "Do 30 push-ups",
    "Get spanked on ass",
    "Let someone insert their dick inside your asshole",
    "Let someone bite your ass",
    "Be slave to someone in the room for 1 minute",
    "Get teeth marks somewhere it shows",
    "Drink cum",
    "Drink piss",
    "Lick someones feet",
    "Let someone read your last 10 text messages",
    "Do 50 sit-ups",
    "Massage someone's dick/pussy for 1 minute",
    "Eat something off the floor",
    "Let someone else control your social media for 1 hour"
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
    document.getElementById('export-action-list-btn').addEventListener('click', () => exportList('action'));
    document.getElementById('export-punishment-list-btn').addEventListener('click', () => exportList('punishment'));
    document.getElementById('import-list-btn').addEventListener('click', importListFromFile);
    document.getElementById('import-list-file').addEventListener('change', function() {
        if (this.files.length > 0) {
            importListFromFile();
        }
    });
    document.getElementById('save-list-btn').addEventListener('click', saveList);
    document.getElementById('completed-btn').addEventListener('click', handleActionCompleted);
    document.getElementById('skipped-btn').addEventListener('click', handleActionSkipped);
    document.getElementById('continue-btn').addEventListener('click', continueAfterPunishment);
    document.getElementById('play-again-btn').addEventListener('click', resetGame);
    
    // Download buttons
    document.getElementById('download-list-btn-modal').addEventListener('click', () => downloadListFile('modal'));
    document.getElementById('download-list-btn').addEventListener('click', () => downloadListFile('setup'));
    
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

// Download list as JSON file
function downloadListFile(location) {
    const exportData = window.currentExportData;
    if (!exportData) {
        alert('No list selected for download!');
        return;
    }
    
    const fileData = {
        name: exportData.name,
        data: exportData.data,
        type: exportData.type,
        version: '1.0',
        exportedAt: new Date().toISOString()
    };
    
    const jsonString = JSON.stringify(fileData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${exportData.name.replace(/[^a-z0-9]/gi, '_')}_${exportData.type}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert('List file downloaded! You can now share it with others.');
}

// Export and show share options for a list
function exportList(type) {
    const selectId = type === 'action' ? 'action-list-select' : 'punishment-list-select';
    const selectedList = document.getElementById(selectId).value;
    
    if (selectedList === 'default') {
        alert('Please select a saved list to export, or create a new list first!');
        return;
    }
    
    const storageKey = type === 'action' ? 'actionLists' : 'punishmentLists';
    const savedLists = JSON.parse(localStorage.getItem(storageKey) || '{}');
    const listData = savedLists[selectedList];
    
    if (!listData) {
        alert('List not found!');
        return;
    }
    
    // Store current export data globally for sharing
    window.currentExportData = {
        name: selectedList,
        data: listData,
        type: type
    };
    
    // Show export buttons in setup screen
    const exportContainer = document.getElementById('export-buttons-container');
    exportContainer.style.display = 'block';
    
    // Scroll to export section
    exportContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Share via WhatsApp
function shareViaWhatsApp(location) {
    const exportData = window.currentExportData;
    if (!exportData) {
        alert('No list selected for sharing!');
        return;
    }
    
    // Download the file first
    downloadListFile(location);
    
    // Provide instructions
    const message = `Check out this ${exportData.type} list: "${exportData.name}"\n\nThe list file has been downloaded. Please attach it to this message and share it. The recipient can import it in the Party Games app using the "Import List from File" option.`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    
    // Small delay to ensure file download starts
    setTimeout(() => {
        if (confirm('The file has been downloaded. Click OK to open WhatsApp. Then attach the downloaded file to your message.')) {
            window.open(whatsappUrl, '_blank');
        }
    }, 500);
}

// Share via Email
function shareViaEmail(location) {
    const exportData = window.currentExportData;
    if (!exportData) {
        alert('No list selected for sharing!');
        return;
    }
    
    // Download the file first
    downloadListFile(location);
    
    const subject = `Check out this ${exportData.type} list: ${exportData.name}`;
    const body = `I wanted to share this ${exportData.type} list with you:\n\n${exportData.name}\n\nThe list file has been downloaded. Please attach it to this email. The recipient can import it in the Party Games app using the "Import List from File" option.`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Small delay to ensure file download starts
    setTimeout(() => {
        if (confirm('The file has been downloaded. Click OK to open your email client. Then attach the downloaded file to your email.')) {
            window.location.href = mailtoUrl;
        }
    }, 500);
}

// Import list from file
function importListFromFile() {
    const fileInput = document.getElementById('import-list-file');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Please select a file to import!');
        return;
    }
    
    if (!file.name.endsWith('.json')) {
        alert('Please select a valid JSON file!');
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const fileContent = e.target.result;
            const listInfo = JSON.parse(fileContent);
            
            // Validate file structure
            if (!listInfo || !listInfo.name || !listInfo.data || !listInfo.type) {
                alert('Invalid list file format! The file should contain a list exported from this app.');
                return;
            }
            
            // Validate type
            if (listInfo.type !== 'action' && listInfo.type !== 'punishment') {
                alert('Invalid list type! The file must be an action or punishment list.');
                return;
            }
            
            // Save the imported list
            const storageKey = listInfo.type === 'action' ? 'actionLists' : 'punishmentLists';
            const savedLists = JSON.parse(localStorage.getItem(storageKey) || '{}');
            
            // Check if list with same name exists
            let listName = listInfo.name;
            let counter = 1;
            while (savedLists[listName]) {
                listName = `${listInfo.name} (${counter})`;
                counter++;
            }
            
            savedLists[listName] = listInfo.data;
            localStorage.setItem(storageKey, JSON.stringify(savedLists));
            
            // Reload lists and select the imported one
            loadSavedLists();
            const selectId = listInfo.type === 'action' ? 'action-list-select' : 'punishment-list-select';
            document.getElementById(selectId).value = listName;
            
            // Clear file input
            fileInput.value = '';
            
            alert(`List "${listName}" imported successfully!`);
        } catch (error) {
            console.error('Import error:', error);
            alert('Failed to import list. The file may be corrupted or in an invalid format. Please check the file and try again.');
        }
    };
    
    reader.onerror = function() {
        alert('Error reading file. Please try again.');
    };
    
    reader.readAsText(file);
}

function openListModal(type) {
    const modal = document.getElementById('list-modal');
    const modalTitle = document.getElementById('modal-title');
    const listNameInput = document.getElementById('list-name');
    const listItemsTextarea = document.getElementById('list-items');
    const exportContainer = document.getElementById('export-buttons-container-modal');
    
    modal.dataset.type = type;
    modalTitle.textContent = type === 'action' ? 'Create Action List' : 'Create Punishment List';
    listNameInput.value = '';
    listItemsTextarea.value = '';
    
    // Hide export buttons when opening modal for new list
    exportContainer.style.display = 'none';
    window.currentExportData = null;
    
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
    let listData;
    
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
        
        listData = actionList;
        const savedLists = JSON.parse(localStorage.getItem('actionLists') || '{}');
        savedLists[listName] = actionList;
        localStorage.setItem('actionLists', JSON.stringify(savedLists));
    } else {
        listData = items;
        const savedLists = JSON.parse(localStorage.getItem('punishmentLists') || '{}');
        savedLists[listName] = items;
        localStorage.setItem('punishmentLists', JSON.stringify(savedLists));
    }
    
    // Store export data for sharing
    window.currentExportData = {
        name: listName,
        data: listData,
        type: type
    };
    
    // Show share options in modal
    const exportContainer = document.getElementById('export-buttons-container-modal');
    exportContainer.style.display = 'block';
    
    loadSavedLists();
    alert('List saved successfully! You can now download and share it using the buttons below.');
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

