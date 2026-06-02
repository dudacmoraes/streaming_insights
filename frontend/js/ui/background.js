// Music in 68 languages
const langs = [
    "Music",
    "موسيقى",
    "Musiqi",
    "Музыка",
    "Музика",
    "সঙ্গীত",
    "Muzika",
    "Música",
    "Musika",
    "Hudba",
    "Cerddoriaeth",
    "Musik",
    "Μουσική",
    "Muusika",
    "موسیقی",
    "Musiikki",
    "Musique",
    "Ceol",
    "સંગીત",
    "Kiɗa",
    "संगीत",
    "Glazba",
    "Mizik",
    "Zene",
    "Երաժշտություն",
    "Egwu",
    "Tónlist",
    "Musica",
    "מוזיקה",
    "音楽",
    "მუსიკა",
    "តន្ត្រី",
    "ಸಂಗೀತ",
    "음악",
    "ດົນຕີ",
    "Mūzika",
    "Waiata",
    "സംഗീതം",
    "Хөгжим",
    "Muzik",
    "ဂီတ",
    "Muziek",
    "Musikk",
    "Nyimbo",
    "ਸੰਗੀਤ",
    "Muzyka",
    "Muzică",
    "සංගීතය",
    "Hudba",
    "Glasba",
    "Muusig",
    "Muzikë",
    "'Mino",
    "Mmino",
    "Muziki",
    "இசை",
    "సంగీతం",
    "Мусиқӣ",
    "ดนตรี",
    "Müzik",
    "موسیقی",
    "Musiqa",
    "Âm nhạc",
    "מוזיק",
    "Orin",
    "音乐",
    "音樂",
    "Umculo"
];

// Exporta a função que inicializa o fundo animado
export function inicializarBackgroundAnimado() {
    // Evita criar mais de um canvas se a função for chamada novamente
    const existentCanvas = document.querySelector(".p5-background-canvas");
    if (existentCanvas) return;

    // Garante que a biblioteca p5 foi carregada no HTML
    if (typeof window.p5 === "undefined") {
        console.error("p5.js não foi carregada.");
        return;
    }

    new window.p5((p) => {
        // Funções auxiliares
        const deg = (a) => (Math.PI / 180) * a;
        const rand = (v1, v2) => Math.floor(v1 + Math.random() * (v2 - v1));

        // Configurações do efeito
        const opt = {
            particles: window.innerWidth > 500 ? 1000 : 500,
            noiseScale: 0.009,
            angle: deg(-90),
            h1: rand(0, 360),
            h2: rand(0, 360),
            s1: rand(20, 90),
            s2: rand(20, 90),
            li: rand(30, 80),
            l2: rand(30, 80),
            strokeWeight: 1.2,
            tail: 82
        };

        const particles = [];
        let time = 0;

        // Evento de clique
        function mudarPaleta() {
            opt.h1 = rand(0, 360);        
            opt.h2 = rand(0, 360);
            opt.s1 = rand(20, 90);
            opt.s2 = rand(20, 90);
            opt.l1 = rand(30, 80);
            opt.l2 = rand(30, 80);
            opt.angle += deg(p.random(40, 80)) * (Math.random() > 0.5 ? 1 : -1);
            
            for (const particle of particles) {
                particle.randomize();
            }
        }

        // Classe particle
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;               
                this.lx = x;
                this.ly = y;
                this.vx = 0;
                this.vy = 0;
                this.ax = 0;
                this.ay = 0;
                this.hueSeed = Math.random();
                this.hue = this.hueSeed > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
                this.sat = this.hueSeed > 0.5 ? opt.s1 : opt.s2;
                this.light = this.hueSeed > 0.5 ? opt.l1 : opt.l2;
                this.maxSpeed = this.hueSeed > 0.5 ? 3 : 2;
            }

            randomize() {
                this.hueSeed = Math.random();
                this.hue = this.hueSeed > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
                this.sat = this.hueSeed > 0.5 ? opt.s1 : opt.s2;
                this.light = this.hueSeed > 0.5 ? opt.l1 : opt.l2;
                this.maxSpeed = this.hueSeed > 0.5 ? 3 : 2;
            }

            follow() {
                const angle =
                p.noise(
                    this.x * opt.noiseScale,
                    this.y * opt.noiseScale,
                    time * opt.noiseScale
                ) *
                    Math.PI *
                    0.5 +
                opt.angle;

                this.ax += Math.cos(angle);
                this.ay += Math.sin(angle);
            }
            
            update() {
                this.follow();

                this.vx += this.ax;
                this.vy += this.ay;

                const velocidade = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                const angulo = Math.atan2(this.vy, this.vx);
                const limite = Math.min(this.maxSpeed, velocidade);

                this.vx = Math.cos(angulo) * limite;
                this.vy = Math.sin(angulo) * limite;
               
                this.x += this.vx;
                this.y += this.vy;

                this.ax = 0;
                this.ay = 0;

                this.edges();
            }
   
            updatePrev() {
                this.lx = this.x;
                this.ly = this.y;
            }

            edges() {
                if (this.x < 0) {
                    this.x = p.width;
                    this.updatePrev();
                }
                if (this.x > p.width) {
                    this.x = 0;
                    this.updatePrev();
                }
                if (this.y < 0) {
                    this.y = p.height;
                    this.updatePrev();
                }
                if (this.y > p.height) {
                    this.y = 0;
                    this.updatePrev();
                }
            }

            render() {
                p.stroke(`hsla(${this.hue}, ${this.sat}%, ${this.light}%, 0.5)`);
                p.line(this.x, this.y, this.lx, this.ly);
                this.updatePrev();
            }
        }
        
        // Setup       
        p.setup = function () {
            const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
            canvas.addClass("p5-background-canvas");

            for (let i = 0; i < opt.particles; i++) {
                particles.push(new Particle(Math.random() * p.width, Math.random() * p.height));
            }

            p.strokeWeight(opt.strokeWeight);
            p.background(0);

            // Clique no body muda as cores
            document.body.addEventListener("click", mudarPaleta);
        };

        // Draw      
        p.draw = function () {
            time++;
            p.background(0, 100 - opt.tail);

            for (const particle of particles) {
                particle.update();
                particle.render();
            }
        };

        // Resize       
        p.windowResized = function () {
            p.resizeCanvas(window.innerWidth, window.innerHeight);
            p.background(0);
        };
    });
}
