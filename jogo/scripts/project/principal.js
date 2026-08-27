// Fonte pixel (Google Fonts) + CSS gamer do SweetAlert2
if (!document.getElementById("pixel-font")) {
    const fontLink = document.createElement("link");
    fontLink.id = "pixel-font";
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap";
    document.head.appendChild(fontLink);
}

const style = document.createElement('style');
style.innerHTML = `
    @font-face {
        font-family: 'Press Start 2P';
        src: local('Arial Bold'), local('Arial');
        font-weight: bold;
        unicode-range: U+00C0-00FF, U+0100-017F;
    }

    .swal-game-popup {
        position: relative !important;
        overflow: visible !important;
        background: linear-gradient(165deg, #2d2b55 0%, #1e1b3a 100%) !important;
        border: 6px solid #c9b6f0 !important;
        border-radius: 28px !important;
        box-shadow:
            0 0 0 3px #4bcdda inset,
            0 0 25px rgba(75, 205, 218, 0.55),
            0 12px 35px rgba(0, 0, 0, 0.6) !important;
        padding: 0 !important;
        margin-top: 24px !important;
        font-family: 'Press Start 2P', 'Impact', sans-serif !important;
        color: #ffffff !important;
        width: 368px !important;
        max-width: 368px !important;
        box-sizing: border-box !important;
    }

    .swal-scroll-wrapper {
        max-height: 85vh;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 34px 16px 24px 16px;
        box-sizing: border-box;
        border-radius: 22px;
    }

    .swal-scroll-wrapper::-webkit-scrollbar {
        width: 6px;
    }
    .swal-scroll-wrapper::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,0.2);
        border-radius: 3px;
    }

    .swal-ribbon {
        position: absolute;
        top: -22px;
        left: 50%;
        transform: translateX(-50%);
        background: #171a35;
        border: 3px solid #4bcdda;
        border-radius: 8px;
        padding: 10px 26px;
        clip-path: polygon(14px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0 50%);
        color: #4bcdda;
        font-family: 'Press Start 2P', sans-serif;
        font-size: 0.85em;
        text-transform: uppercase;
        letter-spacing: 2px;
        white-space: nowrap;
        z-index: 10;
        box-shadow: 0 4px 10px rgba(0,0,0,0.5);
    }
    .swal-ribbon.danger {
        border-color: #e74c3c;
        color: #ffd166;
    }

    .swal-inner-panel {
        position: relative;
        background: radial-gradient(circle at 50% 30%, #3a3a72 0%, #201c40 70%);
        border: 3px solid rgba(255,255,255,0.15);
        border-radius: 18px;
        padding: 18px 14px;
        margin: 10px 0 14px 0;
        overflow: hidden;
    }
    .swal-inner-panel::before {
        content: "✦ ✧ ✦ ✧ ✦";
        position: absolute;
        top: 6px; left: 10px;
        font-size: 0.7em;
        color: rgba(255,255,255,0.35);
        letter-spacing: 8px;
    }
    .swal-inner-panel::after {
        content: "✧ ✦ ✧ ✦ ✧";
        position: absolute;
        bottom: 6px; right: 10px;
        font-size: 0.7em;
        color: rgba(255,255,255,0.25);
        letter-spacing: 8px;
    }

    .swal-section-label {
        font-family: 'Press Start 2P', sans-serif;
        font-size: 0.7em;
        color: #ff6fb0;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-shadow: 2px 2px 0px #000;
    }
    .swal-score-value {
        font-family: 'Press Start 2P', sans-serif;
        font-size: 1.6em;
        color: #ffd166;
        text-shadow: 3px 3px 0px #000;
        margin-top: 8px;
    }
    .swal-title-danger-text {
        font-family: 'Press Start 2P', sans-serif;
        font-size: 1.1em;
        line-height: 1.6;
        color: #ffd166;
        text-shadow: 2px 2px 0px #e74c3c, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000;
        text-transform: uppercase;
        margin: 4px 0 12px 0;
    }
    .swal-record-box {
        background: rgba(0,0,0,0.35);
        border: 2px solid rgba(255,255,255,0.15);
        border-radius: 10px;
        padding: 10px 12px;
        margin-top: 4px;
        font-family: 'Press Start 2P', sans-serif;
        font-size: 0.65em;
        color: #fff;
    }

    .swal-difficulty-badge {
        position: absolute;
        bottom: -10px;
        right: -6px;
        background: #e74c3c;
        border: 2px solid #000;
        border-radius: 50%;
        width: 34px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1em;
        box-shadow: 0 3px 6px rgba(0,0,0,0.5);
    }

    .swal-btn-row {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        gap: 8px;
        font-family: 'Press Start 2P', sans-serif;
        width: 100%;
    }
    .swal-chevron {
        color: #4bcdda;
        font-size: 1.1em;
        text-shadow: 2px 2px 0px #000;
        opacity: 0.8;
        flex-shrink: 0;
    }

    .swal-game-btn {
        font-family: 'Press Start 2P', sans-serif !important;
        background: linear-gradient(180deg, #44bd32 0%, #2ed573 100%) !important;
        border: 3px solid #000 !important;
        border-radius: 12px !important;
        color: #fff !important;
        font-size: 0.85em !important;
        padding: 14px 28px !important;
        text-shadow: 2px 2px 0px #000 !important;
        box-shadow: 0 6px 0px #1e8449, 0 8px 15px rgba(0,0,0,0.4) !important;
        transition: all 0.1s ease !important;
        cursor: pointer !important;
        text-transform: uppercase;
        white-space: nowrap !important;
        box-sizing: border-box !important;
    }
    .swal-game-btn:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 0px #1e8449, 0 10px 20px rgba(0,0,0,0.5) !important;
    }
    .swal-game-btn:active {
        transform: translateY(4px) !important;
        box-shadow: 0 2px 0px #1e8449 !important;
    }

    .swal-game-btn-cancel {
        font-family: 'Press Start 2P', sans-serif !important;
        background: linear-gradient(180deg, #718093 0%, #2f3640 100%) !important;
        border: 3px solid #000 !important;
        border-radius: 12px !important;
        color: #fff !important;
        font-size: 0.7em !important;
        padding: 13px 20px !important;
        text-shadow: 2px 2px 0px #000 !important;
        box-shadow: 0 6px 0px #192a56, 0 8px 15px rgba(0,0,0,0.4) !important;
        transition: all 0.1s ease !important;
        cursor: pointer !important;
        text-transform: uppercase;
        white-space: nowrap !important;
        box-sizing: border-box !important;
    }
    .swal-game-btn-cancel:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 0px #192a56, 0 10px 20px rgba(0,0,0,0.5) !important;
    }
    .swal-game-btn-cancel:active {
        transform: translateY(4px) !important;
        box-shadow: 0 2px 0px #192a56 !important;
    }

    /* Modificador: aplicar junto com .swal-game-btn / .swal-game-btn-cancel
    quando dois botões dividem a mesma linha (ex: tela de Fim de Jogo) */
    .swal-btn-compact {
        font-size: 0.56em !important;
        padding: 14px 4px !important;
        letter-spacing: -0.5px !important;
        text-align: center !important;
        flex: 1 1 0 !important;
        min-width: 0 !important;
    }

    .swal2-actions {
        gap: 10px !important;
        flex-wrap: nowrap !important;
    }
`;
document.head.appendChild(style);

// Sweetalert2
if (!document.getElementById("sweetalert-css")) {
    const linkElement = document.createElement("link");
    linkElement.id = "sweetalert-css";
    linkElement.rel = "stylesheet";
    linkElement.href = "https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css";
    document.head.appendChild(linkElement);
}

if (!document.getElementById("sweetalert-script")) {
    const scriptElement = document.createElement("script");
    scriptElement.id = "sweetalert-script";
    scriptElement.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
    document.head.appendChild(scriptElement);
}

// Highscore
window.maiorPontuacaoSessao = 0;

window.atualizarPontuacaoSessao = function(pontosAtuais) {
    if (pontosAtuais > window.maiorPontuacaoSessao) {
        window.maiorPontuacaoSessao = pontosAtuais;
    }
};

// Menu Principal
window.mostrarMenuPrincipal = function(onIniciar) {
    if (typeof Swal !== "undefined") {
        Swal.fire({
            html: `
                <div class="swal-ribbon">BEM-VINDO!</div>
                <div class="swal-scroll-wrapper">
                    <div class="swal-inner-panel">
                        <img src="jacare_dancando.gif" alt="Jacaré dançando" style="width:130px;height:130px;display:block;margin:0 auto;position:relative;z-index:2;">
                        <div style="margin-top:6px;position:relative;z-index:2;">RELA NO JACARÉ</div>
                    </div>
                    <div class="swal-section-label">Recordes</div>
                    <div class="swal-score-value">${window.maiorPontuacaoSessao || 0} PTS</div>

                    <div class="swal-section-label" style="margin-top:10px;">Como Jogar</div>
                    <div class="swal-instructions" style="text-align:left;font-size:11px;line-height:1.4;margin:6px auto 0;max-width:320px;">
                        <div>🕹️ Use as setas para mover o jacaré</div>
                        <div>⏱️ Sobreviva o máximo de tempo possível</div>
                        <div>🏆 Bata seu recorde de pontuação</div>
                    </div>

                    <div class="swal-btn-row" style="margin-top:16px;">
                        <span class="swal-chevron">»»</span>
                        <button id="swal-play-btn" class="swal-game-btn">Play ▶</button>
                        <span class="swal-chevron">««</span>
                    </div>
                </div>
            `,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            background: "#1e272e",
            customClass: { popup: "swal-game-popup" },
            didOpen: () => {
                document.getElementById("swal-play-btn").addEventListener("click", () => {
                    Swal.close();
                    window.mostrarBotaoPausa();
                    if (typeof onIniciar === "function") onIniciar();
                });
            }
        });
    } else {
        alert(`Menu Principal\nRecorde: ${window.maiorPontuacaoSessao || 0}\nClique OK para iniciar.`);
        window.mostrarBotaoPausa();
        if (typeof onIniciar === "function") onIniciar();
    }
};

// Tela de Pausa
window.mostrarPausa = function(onContinuar) {
    if (typeof Swal !== "undefined") {
        Swal.fire({
            html: `
                <div class="swal-ribbon">PAUSADO</div>
                <div class="swal-scroll-wrapper">
                    <div class="swal-inner-panel">
                        <div style="font-size:2.6em;text-align:center;position:relative;z-index:2;">⏸️</div>
                        <div style="margin-top:8px;text-align:center;position:relative;z-index:2;">Jogo pausado</div>
                    </div>
                    <div class="swal-btn-row" style="margin-top:16px;">
                        <span class="swal-chevron">»»</span>
                        <button id="swal-continuar-btn" class="swal-game-btn">Continuar ▶</button>
                        <span class="swal-chevron">««</span>
                    </div>
                </div>
            `,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            background: "#1e272e",
            customClass: { popup: "swal-game-popup" },
            didOpen: () => {
                document.getElementById("swal-continuar-btn").addEventListener("click", () => {
                    Swal.close();
                    if (typeof onContinuar === "function") onContinuar();
                });
            }
        });
    } else {
        alert("Jogo pausado.\nClique OK para continuar.");
        if (typeof onContinuar === "function") onContinuar();
    }
};

// Controle de pausa (tecla Esc/P e botão flutuante)
window.jogoPausadoAtivo = false;

window.alternarPausa = function() {
    const runtime = window.gameRuntime;
    if (!runtime) {
        console.warn("[Pausa] runtime ainda não disponível (window.gameRuntime indefinido).");
        return;
    }
    if (window.jogoPausadoAtivo) {
        return;
    }
    // Só permite pausar durante uma partida em andamento (não no menu / game over)
    if (!window.emPartida) {
        return;
    }

    window.jogoPausadoAtivo = true;
    runtime.globalVars.Pausado = 1;
    runtime.timeScale = 0;

    window.mostrarPausa(function() {
        window.jogoPausadoAtivo = false;
        runtime.globalVars.Pausado = 0;
        runtime.timeScale = 1;
    });
};

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" || e.key === "p" || e.key === "P") {
        window.alternarPausa();
    }
});

// Botão flutuante de pausa
window.mostrarBotaoPausa = function() {
    const btn = document.getElementById("botao-pausa");
    if (btn) btn.style.display = "flex";
};

window.ocultarBotaoPausa = function() {
    const btn = document.getElementById("botao-pausa");
    if (btn) btn.style.display = "none";
};

(function criarBotaoPausa() {
    if (document.getElementById("botao-pausa")) return;
    if (!document.body) {
        setTimeout(criarBotaoPausa, 100);
        return;
    }
    const btn = document.createElement("button");
    btn.id = "botao-pausa";
    btn.type = "button";
    btn.innerText = "⏸";
    btn.title = "Pausar (Esc)";
    btn.style.cssText = `
        position: fixed;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999999;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        border: 3px solid #000;
        background: linear-gradient(180deg, #4bcdda 0%, #2f9fae 100%);
        color: #fff;
        font-size: 18px;
        box-shadow: 0 4px 0 #1c6b76, 0 6px 10px rgba(0,0,0,0.4);
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
    `;
    btn.addEventListener("click", function() {
        window.alternarPausa();
    });
    document.body.appendChild(btn);
})();

// Tela de Game Over
window.mostrarGameOver = function(pontosFinais, onReiniciar, onIrMenu) {
    window.ocultarBotaoPausa();
    window.atualizarPontuacaoSessao(pontosFinais);

    if (typeof Swal !== "undefined") {
        Swal.fire({
            html: `
                <div class="swal-ribbon danger">Fim de Jogo</div>
                <div class="swal-scroll-wrapper">
                    <div class="swal-title-danger-text">Não relou<br>no Jacaré!</div>
                    <div class="swal-inner-panel" style="position:relative;">
                        <img src="jacare_emburrado.jpg" alt="Jacaré emburrado" style="width:140px;height:140px;display:block;margin:0 auto;position:relative;z-index:2;">
                        <div class="swal-difficulty-badge">💀</div>
                    </div>
                    <div class="swal-record-box">
                        Pontuação: ${pontosFinais} pts<br>
                        <span style="opacity:0.8;">🏆 Recorde: ${window.maiorPontuacaoSessao || 0} pts</span>
                    </div>
                    <div class="swal-btn-row" style="margin-top:18px;">
                        <button id="swal-restart-btn" class="swal-game-btn swal-btn-compact">Reiniciar ↺</button>
                        <button id="swal-menu-btn" class="swal-game-btn-cancel swal-btn-compact">Menu 🏠</button>
                    </div>
                </div>
            `,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            background: "#1e272e",
            customClass: { popup: "swal-game-popup" },
            didOpen: () => {
                document.getElementById("swal-restart-btn").addEventListener("click", () => {
                    Swal.close();
                    if (typeof onReiniciar === "function") onReiniciar();
                });
                document.getElementById("swal-menu-btn").addEventListener("click", () => {
                    Swal.close();
                    if (typeof onIrMenu === "function") onIrMenu();
                });
            }
        });
    } else {
        if (confirm(`Game Over!\nPontuação: ${pontosFinais}\n\nOK: Reiniciar\nCancelar: Menu`)) {
            if (typeof onReiniciar === "function") onReiniciar();
        } else {
            if (typeof onIrMenu === "function") onIrMenu();
        }
    }
};