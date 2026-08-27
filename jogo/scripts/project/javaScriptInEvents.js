

const scriptsInEvents = {

	async FolhaDeEventos1_Event1_Act4(runtime, localVars)
	{
		window.gameRuntime = runtime;
		
		if (runtime.globalVars.Musica === 1) {
		    runtime.timeScale = 1;
		    window.emPartida = true;
		    window.mostrarBotaoPausa();
		} else {
		    // Inicio ou Menu
		    runtime.timeScale = 0;
		    window.emPartida = false;
		    window.mostrarMenuPrincipal(function() {
		        runtime.timeScale = 1;
		        runtime.globalVars.Musica = 1;
		        window.emPartida = true;
		    });
		}
	},

	async FolhaDeEventos1_Event13_Act3(runtime, localVars)
	{
		runtime.globalVars.Musica = 0;
		window.emPartida = false;
		window.mostrarGameOver(
		    runtime.globalVars.Pontos,
		    function() {
		        // Reiniciar
		        runtime.globalVars.Pontos = 0;
		        runtime.globalVars.Vidas = 3;
		        runtime.globalVars.Velocidade = 0;
		        runtime.globalVars.Musica = 1;
		        runtime.goToLayout("Layout 1");
		    },
		    function() {
		        // Menu
		        runtime.globalVars.Pontos = 0;
		        runtime.globalVars.Vidas = 3;
		        runtime.globalVars.Velocidade = 0;
		        runtime.globalVars.Musica = 0;
		        runtime.goToLayout("Layout 1");
		    }
		);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
