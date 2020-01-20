class HyrulePortalsMain extends HyrulePortals {
  constructor(name = "HyrulePortals", subname = "Main") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Portal","ALttPR Portal: Link's Fortune Teller",331,133,"CrateriaCentral"),
		new Location("Portal","ALttPR Portal: Death Mountain Cave",637,763,"NorfairWest"),
		new Location("Portal","ALttPR Portal: Dark World Ice Cave Right",1105,493,"MaridiaInner"),
		new Location("Portal","ALttPR Portal: Misery Mire East 'Entrance'",853,961,"LowerNorfairWest")
	],this);
  }

  initCasual() {
	this.locations["ALttPR Portal: Link's Fortune Teller"].normalLogic = function() {
		let cc = new CrateriaCentral("","",false);
		cc.initCasual();
		return (cc.canEnter.normalLogic() && canAccessLightWorldPortal()) || canAccessCrateriaPortal();
	}
	this.locations["ALttPR Portal: Death Mountain Cave"].normalLogic = function() {
		let nw = new NorfairWest("","",false);
		nw.initCasual();
		return (nw.canEnter.normalLogic() && canAccessDeathMountainPortal()) || canAccessNorfairPortal();
	}
	this.locations["ALttPR Portal: Dark World Ice Cave Right"].normalLogic = function() {
		let mi = new MaridiaInner("","",false);
		mi.initCasual();
		return (mi.canEnter.normalLogic() && canAccessDarkWorldPortal()) || canAccessMaridiaPortal();
	}
	this.locations["ALttPR Portal: Misery Mire East 'Entrance'"].normalLogic = function() {
		let lnw = new LowerNorfairWest("","",false);
		lnw.initCasual();
		return (lnw.canEnter.normalLogic() && canAccessMiseryMirePortal()) || canAccessLowerNorfairPortal();
	}
  }

  initTournament() {
	this.initCasual();
  }
}
