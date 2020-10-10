export const isItemAvailable=(timeStr)=> {
	const timeList = timeStr.split(",");
	const currentHours = new Date().getHours();
	const currentMinutes = new Date().getMinutes();
	let itemAvail = false;
	for (let t of timeList) {
		const slot = t.split("-");
		const hoursAndMinutesFirstSlot = slot[0].split(":");
		const hoursAndMinutesSecondSlot = slot[1].split(":");
		if (
			currentHours == Number(hoursAndMinutesFirstSlot[0]) &&
			currentHours == Number(hoursAndMinutesSecondSlot[0])
		) {
			if (
				currentMinutes >= Number(hoursAndMinutesFirstSlot[1]) &&
				currentMinutes <= Number(hoursAndMinutesSecondSlot[1])
			) {
				itemAvail = true;
				break;
			}
		} else if (currentHours == Number(hoursAndMinutesFirstSlot[0])) {
			if (currentMinutes >= Number(hoursAndMinutesFirstSlot[1])) {
				itemAvail = true;
				break;
			}
		} else if (currentHours == Number(hoursAndMinutesSecondSlot[0])) {
			if (currentMinutes <= Number(hoursAndMinutesSecondSlot[1])) {
				itemAvail = true;
				break;
			}
		} else if (
			currentHours > Number(hoursAndMinutesFirstSlot[0]) &&
			currentHours < Number(hoursAndMinutesSecondSlot[0])
		) {
			itemAvail = true;
			break;
		}
	}
	return itemAvail ? "Yes" : "No";
}