class Personaje {
  constructor(nombre, vida, daño, defensa, velocidad, pecadoCapital) {
    this.nombre = nombre;
    this.vida = vida;
    this.daño = daño;
    this.defensa = defensa;
    this.velocidad = velocidad;
    this.pecadoCapital = pecadoCapital;
    this.ataqueEspecialUsado = false;
  }

  atacar() {
    return this.daño;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} formo parte de los 7 pecados capitales mejor conocido como ${this.pecadoCapital}, soy un ${this.constructor.name} y estos son mis valores: \n Vida: ${this.vida} - Daño: ${this.daño}, Defensa: ${this.defensa} - Velocidad: ${this.velocidad} .`);
  }

  ataqueEspecial() {
    this.ataqueEspecialUsado = true;
    return this.daño * 1000;
  }
}

class Guerrero extends Personaje {
  constructor(nombre, vida, daño, defensa, velocidad, armas, habilidadEspecial) {
    super(nombre, vida, daño, defensa, velocidad, habilidadEspecial);
    this.armas = armas;
    this.habilidadEspecial = habilidadEspecial;
  }

  ataqueConArmas(objetivo) {
    let ataqueOculto = ["Cortes de Luz", "Mil Cortes Penetrantes"];
    const armaAleatoria = this.armas[Math.floor(Math.random() * this.armas.length)];
    if (armaAleatoria === "Ataque Oculto"){
      const ataqueAleatorioOculto = ataqueOculto[Math.floor(Math.random() * ataqueOculto.length)];
      console.log(`${this.nombre} utiliza una Habilidad Oculta y ataca con ${ataqueAleatorioOculto} a ${objetivo.nombre}.`);
      return this.daño + Math.floor(Math.random() * 200);
    }else{
      console.log(`${this.nombre} ataca con ${armaAleatoria} a ${objetivo.nombre}.`);
      return this.daño + Math.floor(Math.random() * 100);
    }
  }
}

class Mago extends Personaje {
  constructor(nombre, vida, daño, defensa, velocidad, hechizos, habilidadEspecial) {
    super(nombre, vida, daño, defensa, velocidad, habilidadEspecial);
    this.hechizos = hechizos;
    this.habilidadEspecial = habilidadEspecial;
  }

  ataqueConHechizos(objetivo) {
    let hechizosOcultos = ["Expecto Patronum", "Avada Kedavra, la Maldición Asesina"];
    const hechizoAleatorio = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
    if (hechizoAleatorio === "Ataque Oculto"){
      const hechizoAleatorioOculto = hechizosOcultos[Math.floor(Math.random() * hechizosOcultos.length)];
      console.log(`${this.nombre} utiliza una Habilidad Oculta y lanza ${hechizoAleatorioOculto} a ${objetivo.nombre}.`);
      return this.daño + Math.floor(Math.random() * 200);
    }else{
      console.log(`${this.nombre} lanza ${hechizoAleatorio} a ${objetivo.nombre}.`);
      return this.daño + Math.floor(Math.random() * 100);
    }
  }
}

class Arquero extends Personaje {
  constructor(nombre, vida, daño, defensa, velocidad, flechas, habilidadEspecial) {
    super(nombre, vida, daño, defensa, velocidad, habilidadEspecial);
    this.flechas = flechas;
    this.habilidadEspecial = habilidadEspecial;
  }

  ataqueConFlechas(objetivo) {
    let flechasOcultas = ["Flecha de Fuego", "Flecha del Castigo Infernal"];
    const flechaAleatoria = this.flechas[Math.floor(Math.random() * this.flechas.length)];
    if (flechaAleatoria === "Ataque Oculto"){
      const flechaAleatoriaOculta = flechasOcultas[Math.floor(Math.random() * flechasOcultas.length)];
      console.log(`${this.nombre} utiliza una Habilidad Oculta y dispara ${flechaAleatoriaOculta} a ${objetivo.nombre}.`);
      return this.daño + Math.floor(Math.random() * 200);
    }else{
      console.log(`${this.nombre} dispara ${flechaAleatoria} a ${objetivo.nombre}.`);
      return this.daño + Math.floor(Math.random() * 100);
    }
  }
}

class Juego {
  constructor() {
    this.personajes = [
      new Guerrero("Escanor", 600, 40, 30, 28, ["Hacha Rita", "Espada Solar", "Lanza del Orgullo", "Ataque Oculto"],"El Leon del Orgullo"),
      new Guerrero("Meliodas", 800, 50, 80, 10, ["Espada demoniaca Lostvayne", "Escudo Demoniaco", "Lanza de la ira", "Ataque Oculto"], "El Dragon de la Ira"),
      new Guerrero("Garen", 700, 40, 40, 20, ["Espada de la justicia", "Escudo de la justicia", "Lanza de la justicia", "Ataque Oculto"], "El Lobo de la Justicia"),
      new Mago("Merlin", 500, 35, 25, 25, ["Bola de fuego", "Rayo de hielo", "Tormenta eléctrica", "Ataque Oculto"], "El Jabali de la Gula"),
      new Mago("Gowther", 300, 55, 45, 30, ["Ilusión", "Titiritero", "Explosión arcana", "Maldición de la noche", "Poder de la luna", "Ataque Oculto"],"La Cabra de la Lujuria"),
      new Mago("Gandalf", 550, 65, 32, 18, ["Flecha de Fuego", "Flecha de hielo", "Flecha de Veneno", "Ataque Oculto"],"El Blanco"),
      new Arquero("Ban", 400, 20, 10, 35, ["Flecha de Castigo", "Flecha de Fuego", "Flecha venenosa", "Ataque Oculto"],"El Zorro de la Codicia"),
    ];
  }

  iniciarJuego() {
    console.log("Bienvenido al juego de los 7 pecados capitales!\n");
    this.personajes.forEach(personaje => personaje.saludar());

    let ronda = 1;
    while (this.personajes.filter(p => p.vida > 0).length > 1) {
      console.log(`\n--- Ronda ${ronda} ---`);

      const personajesOrdenados = [...this.personajes.filter(pO => pO.vida > 0)]
        .sort((a, b) => {
          const velocidadA = Math.random() * a.velocidad;
          const velocidadB = Math.random() * b.velocidad;
          return velocidadB - velocidadA;
        });

      personajesOrdenados.forEach(atacante => {
        if (atacante.vida <= 0) return;

        const objetivos = this.personajes.filter(Obj => Obj.vida > 0 && Obj !== atacante);
        if (objetivos.length === 0) return;

        const objetivo = objetivos[Math.floor(Math.random() * objetivos.length)];

        let ataqueEfectivo = Math.floor(Math.random() * 100);

        if (ataqueEfectivo > 5) {

          const usarHabilidadEspecial = Math.random() < 2/3;
          const usarAtaqueEspecial = Math.random() < 0.05 && !atacante.ataqueEspecialUsado;

          let daño;
          if (usarAtaqueEspecial) {
            daño = atacante.ataqueEspecial();
            console.log(`¡¡¡HABILIDAD ESPECIAL ACTIVADA!!! - ${atacante.nombre} utiliza su habilidad especial de ${atacante.habilidadEspecial} y ataca a ${objetivo.nombre}.`);
          }else if (usarHabilidadEspecial) {
            if (atacante instanceof Guerrero) {
              daño = atacante.ataqueConArmas(objetivo);
            } else if (atacante instanceof Mago) {
              daño = atacante.ataqueConHechizos(objetivo);
            } else if (atacante instanceof Arquero) {
              daño = atacante.ataqueConFlechas(objetivo);
            }
          } else {
            daño = atacante.atacar();
            console.log(`${atacante.nombre} ataca con sus puños a ${objetivo.nombre}.`);
          }

          const defensaExitosa = Math.random() * objetivo.defensa > daño;
          if (defensaExitosa) {
            console.log(`¡¡¡DEFENSA EXITOSA!!! - ${objetivo.nombre} se defendió exitosamente del ataque de ${atacante.nombre}.`);
          } else {
            objetivo.vida -= daño;
            if (daño >= 1000) {
              console.log(`¡¡¡MUERTE INMINENTE!!! - ${atacante.nombre} atacó a ${objetivo.nombre} con un golpe Mortal y le hizo ${daño} de daño. Provocandole una muerte inminente.`);
            }else if (daño >= 100) {
              console.log(`¡¡¡GOLPE CRITICO!!! - ${atacante.nombre} atacó a ${objetivo.nombre} y le hizo ${daño} de daño. Vida restante de ${objetivo.nombre}: ${objetivo.vida}`);
            }else{
              console.log(`${atacante.nombre} atacó a ${objetivo.nombre} y le hizo ${daño} de daño. Vida restante de ${objetivo.nombre}: ${objetivo.vida}`);
            }
          }
          if (objetivo.vida <= 0) {
            console.log(`${objetivo.nombre} ha muerto y no puede atacar más.`);
          }
        }else{
          console.log(`¡¡¡OOPS!!! - ${atacante.nombre} se tropieza y falla su ataque.`);
        }
      });

      ronda++;
    }

    // Determinar el ganador
    const ganador = this.personajes.find(p => p.vida > 0);
    console.log(`\n--- Fin del juego ---`);
    console.log(`El ganador es el ${ganador.constructor.name}  ${ganador.nombre}, ${ganador.habilidadEspecial} .\n Puntos de vida restantes: ${ganador.vida} , Daño: ${ganador.daño}, Defensa: ${ganador.defensa}, Velocidad: ${ganador.velocidad}.`);
  }
}

  const juego = new Juego();
  juego.iniciarJuego();