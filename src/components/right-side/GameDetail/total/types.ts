/** Summary */
export interface ScoreSummary {
	baron?: number;
	dragon?: number;
	tower?: number;
	kill?: number;
	gold?: number;
}
export interface TeamSummary {
	Win: ScoreSummary;
	Lose: ScoreSummary;
}
