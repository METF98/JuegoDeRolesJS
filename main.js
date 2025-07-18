class Personaje {
  constructor(nombre, vida, daño, defensa, velocidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.daño = daño;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }

  atacar() {
    return this.daño;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}, soy un ${this.constructor.name} y estos son mis valores, \n Vida: ${this.vida} - Daño: ${this.daño},\n Defensa: ${this.defensa} - Velocidad: ${this.velocidad} .`);
  }
}

class Guerrero extends Personaje {
  constructor(nombre, vida, daño, defensa, velocidad, armas) {
    super(nombre, vida, daño, defensa, velocidad);
    this.armas = armas;
  }

  ataqueConArmas(objetivo) {
    let ataqueOculto = ["Espada de Ataque infinito", "Lanza Del Destino"];
    let ataqueEfectivo = Math.floor(Math.random() * 100);
    if (ataqueEfectivo > 5) {
      const armaAleatoria = this.armas[Math.floor(Math.random() * this.armas.length)];
      if (armaAleatoria === "Ataque Oculto"){
        const ataqueAleatorioOculto = ataqueOculto[Math.floor(Math.random() * ataqueOculto.length)];
        console.log(`${this.nombre} utiliza una Habilidad Oculta y ataca con ${ataqueAleatorioOculto} a ${objetivo.nombre}.`);
        return this.daño + Math.floor(Math.random() * 200);
      }else{
        console.log(`${this.nombre} ataca con ${armaAleatoria} a ${objetivo.nombre}.`);
        return this.daño + Math.floor(Math.random() * 100);
      }
    }else{
      return this.daño = 0;
    }
  }
}

class Mago extends Personaje {
  constructor(nombre, vida, daño, defensa, velocidad, hechizos) {
    super(nombre, vida, daño, defensa, velocidad);
    this.hechizos = hechizos;
  }

  ataqueConHechizos(objetivo) {
    let hechizosOcultos = ["Expecto Patronum", "Avada Kedavra, la Maldición Asesina"];
    let ataqueEfectivo = Math.floor(Math.random() * 100);
    if (ataqueEfectivo > 5) {
      const hechizoAleatorio = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
      if (hechizoAleatorio === "Ataque Oculto"){
        const hechizoAleatorioOculto = hechizosOcultos[Math.floor(Math.random() * hechizosOcultos.length)];
        console.log(`${this.nombre} utiliza una Habilidad Oculta y lanza ${hechizoAleatorioOculto} a ${objetivo.nombre}.`);
        return this.daño + Math.floor(Math.random() * 200);
      }else{
        console.log(`${this.nombre} lanza ${hechizoAleatorio} a ${objetivo.nombre}.`);
        return this.daño + Math.floor(Math.random() * 100);
      }
    }else{
      return this.daño = 0;
    }
  }
}

class Arquero extends Personaje {
  constructor(nombre, vida, daño, defensa, velocidad,flechas) {
    super(nombre, vida, daño, defensa, velocidad);
    this.flechas = flechas;
  }

  ataqueConFlechas(objetivo) {
    let flechasOcultas = ["Flecha de Fuego", "Flecha de Castigo"];
    let ataqueEfectivo = Math.floor(Math.random() * 100);
    if (ataqueEfectivo > 5) {
      const flechaAleatoria = this.flechas[Math.floor(Math.random() * this.flechas.length)];
      if (flechaAleatoria === "Ataque Oculto"){
        const flechaAleatoriaOculta = flechasOcultas[Math.floor(Math.random() * flechasOcultas.length)];
        console.log(`${this.nombre} utiliza una Habilidad Oculta y dispara ${flechaAleatoriaOculta} a ${objetivo.nombre}.`);
        return this.daño + Math.floor(Math.random() * 200);
      }else{
        console.log(`${this.nombre} dispara ${flechaAleatoria} a ${objetivo.nombre}.`);
        return this.daño + Math.floor(Math.random() * 100);
      }
    }else{
      return this.daño = 0;
    }
  }
}

class Juego {
  constructor() {
    this.personajes = [
      new Guerrero("Escanor", 600, 40, 30, 28, ["Hacha Rita", "Espada Solar", "Lanza del Orgullo", "Ataque Oculto"]),
      new Guerrero("Meliodas", 800, 15, 80, 10, ["Espada demoniaca Lostvayne", "Escudo Demoniaco", "Daga de la ira", "Ataque Oculto"]),
      new Mago("Merlin", 500, 35, 25, 25, ["Bola de fuego", "Rayo de hielo", "Tormenta eléctrica", "Ataque Oculto"]),
      new Mago("Gowther", 300, 55, 45, 30, ["Ilusión", "Titiritero", "Explosión arcana", "Maldición de la noche", "Poder de la luna", "Ataque Oculto"]),
      new Arquero("Ban", 400, 20, 10, 35, ["Flecha de Castigo", "Flecha de Fuego", "Flecha venenosa", "Ataque Oculto"]),
    ];
  }

  iniciarJuego() {
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

        const usarHabilidadEspecial = Math.random() < 2/3;

        let daño;
        if (usarHabilidadEspecial) {
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

        if (daño == 0) {
          console.log(`${atacante.nombre} se tropieza y falla su ataque`);
        }else{
          const defensaExitosa = Math.random() * objetivo.defensa > daño;
          if (defensaExitosa) {
            console.log(`${objetivo.nombre} se defendió exitosamente del ataque de ${atacante.nombre}.`);
          } else {
            objetivo.vida -= daño;
            if (daño >= 100) {
              console.log(`${atacante.nombre} atacó a ${objetivo.nombre} con un golpe critico y le hizo ${daño} de daño. Vida restante de ${objetivo.nombre}: ${objetivo.vida}`);
            }else{
              console.log(`${atacante.nombre} atacó a ${objetivo.nombre} y le hizo ${daño} de daño. Vida restante de ${objetivo.nombre}: ${objetivo.vida}`);
            }
          }
          if (objetivo.vida <= 0) {
            console.log(`${objetivo.nombre} ha muerto y no puede atacar más.`);
          }
        }
      });

      ronda++;
    }

    // Determinar el ganador
    const ganador = this.personajes.find(p => p.vida > 0);
    console.log(`\n--- Fin del juego ---`);
    console.log(`El ganador es ${ganador.nombre}, un ${ganador.constructor.name}.`);
  }
}

  const juego = new Juego();
  juego.iniciarJuego();