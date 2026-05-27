import { useEffect, useRef, useContext } from "react";
import { MyContext } from "../../Context/Context";

export default function QuantumCursorTrail() {
    const canvasRef = useRef(null);
    const { theme } = useContext(MyContext);

    const mouse = useRef({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        tx: window.innerWidth / 2,
        ty: window.innerHeight / 2,
        vx: 0,
        vy: 0,
        speed: 0
    });

    const frame = useRef(0);
    const hue = useRef(220);

    // ─────────────────────────────────────────────
    // 5 LAYERS
    // ─────────────────────────────────────────────

    const mainSpine = useRef(
        Array.from({ length: 90 }, () => ({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            vx: 0,
            vy: 0
        }))
    );

    const outerSpine = useRef(
        Array.from({ length: 65 }, () => ({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            vx: 0,
            vy: 0
        }))
    );

    const particles = useRef([]);
    const plasma = useRef([]);
    const stars = useRef([]);
    const shockwaves = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let raf;

        // ─────────────────────────────────────────────
        // Resize
        // ─────────────────────────────────────────────

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;

            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;

            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);

            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
        };

        resize();

        window.addEventListener("resize", resize);

        // ─────────────────────────────────────────────
        // Mouse
        // ─────────────────────────────────────────────

        const handleMove = (e) => {
            const m = mouse.current;

            m.vx = e.clientX - m.x;
            m.vy = e.clientY - m.y;

            m.speed = Math.min(Math.hypot(m.vx, m.vy), 120);

            m.tx = e.clientX;
            m.ty = e.clientY;

            // ENERGY PARTICLES
            const amount = Math.min(10, Math.floor(m.speed / 4));

            for (let i = 0; i < amount; i++) {
                const angle =
                    Math.atan2(m.vy, m.vx) +
                    (Math.random() - 0.5) * 1.8;

                const speed = Math.random() * 5 + 1;

                particles.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    size: Math.random() * 3 + 1,
                    hue:
                        (hue.current + Math.random() * 100) % 360,
                    life: 1,
                    decay: 0.012 + Math.random() * 0.02
                });
            }

            // PLASMA ORBS
            if (m.speed > 30 && Math.random() < 0.35) {
                plasma.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    r: 15 + Math.random() * 25,
                    hue:
                        (hue.current + Math.random() * 80) % 360,
                    life: 1,
                    decay: 0.01
                });
            }

            // STAR BURSTS
            if (m.speed > 40 && Math.random() < 0.15) {
                stars.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    r: 4 + Math.random() * 6,
                    hue:
                        (hue.current + Math.random() * 60) % 360,
                    life: 1
                });
            }

            // SHOCKWAVE
            if (m.speed > 70 && Math.random() < 0.08) {
                shockwaves.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    radius: 10,
                    life: 1,
                    hue: hue.current
                });
            }
        };

        window.addEventListener("mousemove", handleMove);

        // ─────────────────────────────────────────────
        // Helpers
        // ─────────────────────────────────────────────

        const updateChain = (chain, spring, friction) => {
            chain[0].x +=
                (mouse.current.x - chain[0].x) * spring;

            chain[0].y +=
                (mouse.current.y - chain[0].y) * spring;

            for (let i = 1; i < chain.length; i++) {
                const p = chain[i - 1];
                const c = chain[i];

                c.vx += (p.x - c.x) * spring;
                c.vy += (p.y - c.y) * spring;

                c.vx *= friction;
                c.vy *= friction;

                c.x += c.vx;
                c.y += c.vy;
            }
        };

        const drawSmoothLine = (
            points,
            width,
            alpha,
            hueOffset,
            blur
        ) => {
            if (points.length < 2) return;

            ctx.save();

            ctx.beginPath();

            ctx.moveTo(points[0].x, points[0].y);

            for (let i = 1; i < points.length - 1; i++) {
                const xc =
                    (points[i].x + points[i + 1].x) / 2;

                const yc =
                    (points[i].y + points[i + 1].y) / 2;

                ctx.quadraticCurveTo(
                    points[i].x,
                    points[i].y,
                    xc,
                    yc
                );
            }

            const grad = ctx.createLinearGradient(
                points[0].x,
                points[0].y,
                points[points.length - 1].x,
                points[points.length - 1].y
            );

            grad.addColorStop(
                0,
                `hsla(${(hue.current + hueOffset) % 360},100%,75%,${alpha})`
            );

            grad.addColorStop(
                0.5,
                `hsla(${(hue.current + hueOffset + 60) % 360},100%,65%,${alpha *
                    0.7})`
            );

            grad.addColorStop(
                1,
                `hsla(${(hue.current + hueOffset + 120) % 360},100%,55%,0)`
            );

            ctx.strokeStyle = grad;
            ctx.lineWidth = width;
            ctx.lineCap = "round";

            if (theme === "dark") {
                ctx.shadowBlur = blur;
                ctx.shadowColor = `hsla(${(hue.current +
                    hueOffset) %
                    360},100%,70%,0.8)`;
            }

            ctx.stroke();

            ctx.restore();
        };

        // ─────────────────────────────────────────────
        // Render
        // ─────────────────────────────────────────────

        const render = () => {
            frame.current++;

            ctx.clearRect(
                0,
                0,
                window.innerWidth,
                window.innerHeight
            );

            hue.current += 0.5;

            // Smooth Mouse
            mouse.current.x +=
                (mouse.current.tx - mouse.current.x) * 0.25;

            mouse.current.y +=
                (mouse.current.ty - mouse.current.y) * 0.25;

            // Update chains
            updateChain(mainSpine.current, 0.32, 0.72);
            updateChain(outerSpine.current, 0.18, 0.78);

            // ─────────────────────────────────────────
            // LAYER 1 : AURORA GLOW
            // ─────────────────────────────────────────

            drawSmoothLine(
                outerSpine.current,
                22,
                0.08,
                0,
                35
            );

            drawSmoothLine(
                outerSpine.current,
                12,
                0.15,
                80,
                25
            );

            // ─────────────────────────────────────────
            // LAYER 2 : MAIN ENERGY STREAM
            // ─────────────────────────────────────────

            drawSmoothLine(
                mainSpine.current,
                7,
                0.85,
                0,
                18
            );

            drawSmoothLine(
                mainSpine.current,
                3,
                0.9,
                160,
                12
            );

            // ─────────────────────────────────────────
            // LAYER 3 : DNA WAVES
            // ─────────────────────────────────────────

            const helixA = [];
            const helixB = [];

            for (let i = 0; i < mainSpine.current.length; i++) {
                const s = mainSpine.current[i];

                const next =
                    mainSpine.current[
                        Math.min(
                            i + 1,
                            mainSpine.current.length - 1
                        )
                    ];

                const dx = next.x - s.x;
                const dy = next.y - s.y;

                const len = Math.hypot(dx, dy) || 1;

                const nx = -dy / len;
                const ny = dx / len;

                const wave =
                    Math.sin(
                        i * 0.28 - frame.current * 0.12
                    ) * 12;

                helixA.push({
                    x: s.x + nx * wave,
                    y: s.y + ny * wave
                });

                helixB.push({
                    x: s.x - nx * wave,
                    y: s.y - ny * wave
                });
            }

            drawSmoothLine(helixA, 2, 0.5, 40, 10);
            drawSmoothLine(helixB, 2, 0.5, 200, 10);

            // DNA CONNECTORS
            for (let i = 0; i < helixA.length; i += 4) {
                const a = helixA[i];
                const b = helixB[i];

                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);

                ctx.strokeStyle = `hsla(${(hue.current +
                    120) %
                    360},100%,80%,0.25)`;

                ctx.lineWidth = 1;

                ctx.stroke();
            }

            // ─────────────────────────────────────────
            // LAYER 4 : PARTICLES
            // ─────────────────────────────────────────

            for (
                let i = particles.current.length - 1;
                i >= 0;
                i--
            ) {
                const p = particles.current[i];

                p.x += p.vx;
                p.y += p.vy;

                p.vy += 0.02;

                p.life -= p.decay;

                if (p.life <= 0) {
                    particles.current.splice(i, 1);
                    continue;
                }

                ctx.save();

                ctx.globalAlpha = p.life;

                ctx.beginPath();

                ctx.arc(
                    p.x,
                    p.y,
                    p.size,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle = `hsla(${p.hue},100%,75%,1)`;

                if (theme === "dark") {
                    ctx.shadowBlur = 12;
                    ctx.shadowColor = `hsla(${p.hue},100%,70%,1)`;
                }

                ctx.fill();

                ctx.restore();
            }

            // ─────────────────────────────────────────
            // LAYER 5 : PLASMA ORBS
            // ─────────────────────────────────────────

            for (
                let i = plasma.current.length - 1;
                i >= 0;
                i--
            ) {
                const p = plasma.current[i];

                p.life -= p.decay;

                if (p.life <= 0) {
                    plasma.current.splice(i, 1);
                    continue;
                }

                const g = ctx.createRadialGradient(
                    p.x,
                    p.y,
                    0,
                    p.x,
                    p.y,
                    p.r
                );

                g.addColorStop(
                    0,
                    `hsla(${p.hue},100%,75%,${p.life *
                        0.7})`
                );

                g.addColorStop(
                    1,
                    `hsla(${p.hue},100%,60%,0)`
                );

                ctx.save();

                ctx.beginPath();

                ctx.arc(
                    p.x,
                    p.y,
                    p.r * (1.5 - p.life),
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle = g;

                ctx.fill();

                ctx.restore();
            }

            // ─────────────────────────────────────────
            // STAR FLASH
            // ─────────────────────────────────────────

            for (
                let i = stars.current.length - 1;
                i >= 0;
                i--
            ) {
                const s = stars.current[i];

                s.life -= 0.04;

                if (s.life <= 0) {
                    stars.current.splice(i, 1);
                    continue;
                }

                ctx.save();

                ctx.translate(s.x, s.y);

                ctx.rotate(frame.current * 0.02);

                ctx.globalAlpha = s.life;

                for (let k = 0; k < 4; k++) {
                    ctx.rotate(Math.PI / 2);

                    ctx.beginPath();

                    ctx.moveTo(0, 0);

                    ctx.lineTo(0, s.r * 3);

                    ctx.strokeStyle = `hsla(${s.hue},100%,90%,1)`;

                    ctx.lineWidth = 1.5;

                    ctx.stroke();
                }

                ctx.restore();
            }

            // ─────────────────────────────────────────
            // SHOCKWAVE
            // ─────────────────────────────────────────

            for (
                let i = shockwaves.current.length - 1;
                i >= 0;
                i--
            ) {
                const s = shockwaves.current[i];

                s.radius += 4;
                s.life -= 0.03;

                if (s.life <= 0) {
                    shockwaves.current.splice(i, 1);
                    continue;
                }

                ctx.save();

                ctx.globalAlpha = s.life;

                ctx.beginPath();

                ctx.arc(
                    s.x,
                    s.y,
                    s.radius,
                    0,
                    Math.PI * 2
                );

                ctx.strokeStyle = `hsla(${s.hue},100%,75%,1)`;

                ctx.lineWidth = 2;

                ctx.stroke();

                ctx.restore();
            }

            // ─────────────────────────────────────────
            // CURSOR CORE
            // ─────────────────────────────────────────

            const head = mainSpine.current[0];

            const glow = ctx.createRadialGradient(
                head.x,
                head.y,
                0,
                head.x,
                head.y,
                30
            );

            glow.addColorStop(
                0,
                `hsla(${hue.current},100%,90%,1)`
            );

            glow.addColorStop(
                0.5,
                `hsla(${hue.current},100%,70%,0.5)`
            );

            glow.addColorStop(
                1,
                `hsla(${hue.current},100%,60%,0)`
            );

            ctx.save();

            ctx.beginPath();

            ctx.arc(head.x, head.y, 18, 0, Math.PI * 2);

            ctx.fillStyle = glow;

            if (theme === "dark") {
                ctx.shadowBlur = 25;
                ctx.shadowColor = `hsla(${hue.current},100%,70%,1)`;
            }

            ctx.fill();

            ctx.restore();

            raf = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener(
                "mousemove",
                handleMove
            );

            cancelAnimationFrame(raf);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 pointer-events-none z-[9999] ${
                theme === "dark"
                    ? "mix-blend-screen"
                    : "mix-blend-multiply"
            }`}
            style={{
                backfaceVisibility: "hidden",
                transform: "translate3d(0,0,0)",
                willChange: "transform"
            }}
        />
    );
}