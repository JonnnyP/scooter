class Scooter {
	constructor(lat, long, id, isFull, isBroken) {
		this.id = id;
		this.location = [lat, long];
		this.fullyCharged = isFull;
		this.broken = isBroken;
	}

	rent() {
		if(this.fullyCharged && !this.broken && this.fullyCharged) return true;
		else return false;
	}

	repair() {
		this.broken = false;
	}

	async recharge() {

	}
}

module.exports = Scooter;