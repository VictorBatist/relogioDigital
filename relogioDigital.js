      function mostrarHoras() {
        let clock = document.querySelector("#relogio");
        let now = new Date();
        clock.textContent = now.toLocaleTimeString();
      }
      // Mostre a hora assim que carregar o script
      mostrarHoras();
      // Chame a função mostrarHoras a cada 1000ms (1 segundo)
      setInterval(mostrarHoras, 1000);
