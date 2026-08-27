const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.bound,
		C3.Behaviors.Platform,
		C3.Plugins.Keyboard,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Audio.Acts.Play,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event1_Act4,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.SubVar,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event13_Act3
	];
};
self.C3_JsPropNameTable = [
	{PlanoDeFundo: 0},
	{RestritoAoLayout: 0},
	{Plataforma: 0},
	{Jacaré: 0},
	{Teclado: 0},
	{Sólido: 0},
	{Chão: 0},
	{Peche: 0},
	{bomba: 0},
	{Peixes: 0},
	{Musica: 0},
	{FundoPlacar: 0},
	{Vidas: 0},
	{Pontos: 0},
	{Velocidade: 0},
	{Pausado: 0},
	{PausaAudioAtivo: 0}
];

self.InstanceType = {
	PlanoDeFundo: class extends self.ITiledBackgroundInstance {},
	Jacaré: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Chão: class extends self.ISpriteInstance {},
	Peche: class extends self.ISpriteInstance {},
	bomba: class extends self.ISpriteInstance {},
	Peixes: class extends self.ITextInstance {},
	Musica: class extends self.IInstance {},
	FundoPlacar: class extends self.ISpriteInstance {},
	Vidas: class extends self.ITextInstance {}
}