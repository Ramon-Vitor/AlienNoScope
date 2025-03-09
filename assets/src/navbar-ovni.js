const uls = document.querySelectorAll("nav ul");

const links = [...document.querySelectorAll("nav a")]; // Cria uma lista de todos os links (<a>) dentro do menu de navegação.

const light = document.querySelector("nav .nav-alien"); // Seleciona o elemento de luz (indicador) que será movido entre os links.

let activeIndex = 0; // Armazena o índice do link atualmente ativo (inicialmente 0).
let currentIndex = 0; // Controla o índice do link sendo ativado durante a animação.
let increment = 1; // Determina a direção da animação (1 para direita, -1 para esquerda).

// Itera sobre todos os links para inicializar o estado dos links e do indicador de luz.
links.forEach((link, index) => {
	// Verifica se o link possui a classe "active", caso sim, ajusta a posição da luz para esse link.
	if (links[index].classList.contains("active")) {
		light.style.left = `${links[index].offsetLeft + light.offsetWidth / 4}px`;
		light.style.top = `${links[index].offsetTop - 40}px`;
	}

	// Adiciona um evento de clique para cada link.
	link.addEventListener("click", e => {

		// Atualiza o índice do link ativo com o índice do link clicado.
		activeIndex = index;
		
		// Inicia uma animação de transição entre os links.
		let t = setInterval(() => {
			// Define a direção da animação dependendo se o índice ativo é maior ou menor que o índice atual.
			if (activeIndex > currentIndex) increment = 1; // Vai para a direita.
			else if (activeIndex < currentIndex) increment = -1; // Vai para a esquerda.
			currentIndex += increment; // Atualiza o índice atual com base na direção.

			// Adiciona a classe "active" ao link no índice atual, marcando-o como ativo.
			links[currentIndex].classList.add("active");
			
			// Remove a classe "active" do link anterior, se necessário (não faz isso se currentIndex for -1).
			if (currentIndex != -1) links[currentIndex - increment].classList.remove("active");

			// Se o índice atual alcançar o índice do link clicado, para a animação.
			if (currentIndex == activeIndex) {
				e.target.classList.add("active"); // Marca o link clicado como ativo.
				increment = 0; // Interrompe a direção da animação (não há mais incremento).
				clearInterval(t); // Limpa o intervalo da animação.
			}
		}, 50); // A animação acontece a cada 50 milissegundos.

		// Atualiza a posição da luz para o link clicado.
		light.style.top = `${e.target.offsetTop - 40}px`;
	});
});
