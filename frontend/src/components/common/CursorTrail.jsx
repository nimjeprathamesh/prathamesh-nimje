import { useEffect, useRef, useContext } from "react";
import { MyContext } from "../../Context/Context";

export default function CursorTrail() {
    const canvasRef = useRef(null);
    const { theme } = useContext(MyContext);

    const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    // Spring nodes create a fluid, elastic rubber-band ribbon effect
    const nodes = useRef(Array.from({ length: 28 }, () => ({ x: 0, y: 0, vx: 0, vy: 0 })));
    // Sparkles array for that extra magical premium dust
    const particles = useRef([]);
    const hue = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        // Initialize nodes position at current mouse to prevent starting from (0,0)
        nodes.current.forEach(node => {
            node.x = mouse.current.x;
            node.y = mouse.current.y;
        });

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            // Emit magical sparkles on fast mouse moves
            if (Math.random() < 0.4) {
                particles.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: (Math.random() - 0.5) * 3,
                    vy: (Math.random() - 0.5) * 3,
                    alpha: 1,
                    size: Math.random() * 3 + 1,
                    hue: hue.current
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        // --- RENDER LOOP ---
        const renderLoop = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            // 1. Slow Color Cycle (Highly Optimized)
            hue.current = (hue.current + 0.8) % 360;

            // 2. Physics Pass: Update Ribbon Nodes with Spring/Inertia Mathematics
            let head = nodes.current[0];
            // Head follows the mouse with ease
            head.x += (mouse.current.x - head.x) * 0.35;
            head.y += (mouse.current.y - head.y) * 0.35;

            for (let i = 1; i < nodes.current.length; i++) {
                const prev = nodes.current[i - 1];
                const curr = nodes.current[i];

                // Spring physics formula to pull the tail seamlessly
                curr.vx += (prev.x - curr.x) * 0.18;
                curr.vy += (prev.y - curr.y) * 0.18;
                curr.vx *= 0.55; // Friction factor
                curr.vy *= 0.55;

                curr.x += curr.vx;
                curr.y += curr.vy;
            }

            // 3. Drawing Pass: Render Fluid Ribbon using Continuous Bezier Curves
            if (nodes.current.length > 1) {
                ctx.save();
                
                // Holographic shadow glow effects for dark mode
                if (theme === "dark") {
                    ctx.shadowBlur = 24;
                    ctx.shadowColor = `hsla(${hue.current}, 90%, 60%, 0.5)`;
                }

                for (let i = 1; i < nodes.current.length - 1; i++) {
                    const p1 = nodes.current[i];
                    const p2 = nodes.current[i + 1];

                    // Quadratic Bezier midpoint interpolation
                    const xc = (p1.x + p2.x) / 2;
                    const yc = (p1.y + p2.y) / 2;

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

                    // Dynamic styling based on position in tail & theme
                    const ratio = i / nodes.current.length;
                    const alpha = (1 - ratio) * 0.8;
                    
                    ctx.strokeStyle = theme === "dark"
                        ? `hsla(${(hue.current + i * 4) % 360}, 95%, 65%, ${alpha})`
                        : `hsla(${(hue.current + i * 3) % 360}, 80%, 45%, ${alpha})`;

                    ctx.lineWidth = (1 - ratio) * 16;
                    ctx.lineCap = "round";
                    ctx.lineJoin = "round";
                    ctx.stroke();
                }
                ctx.restore();
            }

            // 4. Sparkle Particles Rendering (The Premium Dust)
            particles.current.forEach((p, idx) => {
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= 0.02; // Fade out rate

                if (p.alpha <= 0) {
                    particles.current.splice(idx, 1);
                    return;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = theme === "dark" 
                    ? `hsla(${p.hue}, 95%, 70%, ${p.alpha})`
                    : `hsla(${p.hue}, 80%, 50%, ${p.alpha})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(renderLoop);
        };
        renderLoop();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    // Dynamic mix-blend-mode selection depending on UX background context
    const blendMode = theme === "dark" ? "mix-blend-screen" : "mix-blend-multiply";

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 pointer-events-none z-[9999] ${blendMode}`}
            style={{ backfaceVisibility: "hidden", transform: "translate3d(0,0,0)" }}
        />
    );
}