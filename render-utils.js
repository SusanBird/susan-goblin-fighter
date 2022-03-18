export function renderGoblin(goblinData) {

    const goblinEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinEl.classList.add('goblin');

    let goblinEmoji = '';

    if (goblinData.hp === 3) {
        goblinEmoji = '😈';
    } else if (goblinData.hp === 1 || goblinData.hp === 2) {
        goblinEmoji = '😈';
    } else if (goblinData.hp < 1) {
        goblinEmoji = '🔥';
    }

    nameEl.textContent = goblinData.name;
    hpEl.textContent = `${goblinEmoji} ${goblinData.hp}`;

    goblinEl.append(nameEl, hpEl);

    return goblinEl;
}