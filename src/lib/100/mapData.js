export let currentMap;

export function setCurrentMap(newCurrentMap) {
	if (currentMap) currentMap.style.border = 'none';
	currentMap = newCurrentMap;
	currentMap.style.border = '1px solid black';
}